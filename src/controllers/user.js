import userRepository from "../respositories/user.js";
import { EventEmitter } from "events";
import { body, validationResult } from "express-validator";
import HttpStatusCode from "../exception/HttpStatusCode.js";
import jwt from 'jsonwebtoken'

const myEvent = new EventEmitter();

myEvent.on("event.register.user", (params) => {
  console.log(`They talked about : ${JSON.stringify(params)}`);
});

const login = async (req, res) => {
  //console.log(req.body)
  const errors = validationResult(req.body);
  if (!errors.isEmpty()) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: errors.array(),
    });
  }
  const { email, password } = await req.body;
  //console.log(email)
  //call repository
  try {
    let existingUser = await userRepository.login({ email, password });
    res.status(HttpStatusCode.OK).json({
      message: "Login user successfully",
      data: existingUser.token,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const register = async (req, res) => {
  const { firstname, lastname, gender, birthday, email, password, role = "user" } =
    await req.body;
  //console.log(firstname)
  myEvent.emit("event.register.user", { email, password });

  try {
    await userRepository.register({
      firstname,
      lastname,
      gender,
      birthday,
      email,
      password,
      role
    });
    let existingUser = await userRepository.login({ email, password });
    //console.log(firstname)
    res.status(HttpStatusCode.INSERT_OK).json({
      message: "Register user successfully",
      data: existingUser.token,
    });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      message: exception.toString(),
    });
  }
};

const getUser = async (req, res) => {
  try {
    const token = req.headers?.authorization?.split(" ")[1];
    // jwt.verify(token, process.env.SECRET_KEY, (error, data) => {
    const jwtObject = jwt.verify(token, process.env.SECRET_KEY);
    // });
    res.status(HttpStatusCode.OK).json({
      message: "user exist",
      data: jwtObject.data,
    });
  } catch (exception) {
    res.status(HttpStatusCode.NOT_FOUND).json({
      message: exception.toString(),
    });
  }
};

export default { login, register, getUser };
