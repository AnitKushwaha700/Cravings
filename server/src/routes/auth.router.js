import express from "express";
import {
  RegisterUser,
  LoginUser,
  LogoutUser,
} from "../controllers/public.controller.js";

const router = express.Router();

router.post("/register", RegisterUser);
router.post("/login", LoginUser);
router.get("/logout", LoginUser);
