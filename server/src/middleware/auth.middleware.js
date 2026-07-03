import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const AuthProtect = async (req, res, next) => {
  try {
    const token = req.cookies.Oreo;

    if (!token) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      next(error);
    }
    console.log("Token From Middleware : ", token);

    const decode = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decode) {
      const error = new Error("Session Expired");
      error.statusCode = 401;
      next(error);
    }

    const verifi

  } catch (error) {
    console.log(error.message);
    const error = new Error("Unknown Error At Middleware");
    error.statusCode = 500;
    next(error);
  }
};
