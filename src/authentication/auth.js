import HttpStatusCode from "../exception/HttpStatusCode.js";
import jwt from "jsonwebtoken";
export default function checkToken(req, res, next) {
  //bypass login, register
  if (
    req.url.toLowerCase().trim() !== "/account".toLowerCase().trim() ||
    req.url.toLowerCase().trim() !== "/account/addresses".toLowerCase().trim()
    //|| req.url.toLowerCase().trim() !== "".toLowerCase().trim()
  ) {
    next();
    return;
  }
  //other requests
  //get and validate token
  const token = req.headers?.authorization?.split(" ")[1];
  try {
    const jwtObject = jwt.verify(token, process.env.SECRET_KEY);
    const isExpired = Date.now() >= jwtObject.exp * 1000;

    if (isExpired) {
      res.status(HttpStatusCode.BAD_REQUEST).json({
        message: "Token is expired",
      });
      res.end();
    } else {
      next();
      return;
    }
  } catch (exception) {
    res.status(HttpStatusCode.BAD_REQUEST).json({
      message: exception.message,
    });
  }
}
