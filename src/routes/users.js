import express from "express";
import { body, validationResult } from "express-validator";
import {userController} from '../controllers/index.js'
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("GET users");
});

userRouter.post(
  "/login",
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  userController.login
);
userRouter.post('/register', userController.register)

userRouter.get('/getuser',userController.getUser)

//router.post

export default userRouter;
