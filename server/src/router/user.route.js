import express from "express";
import { EditUserProfile } from "../controller/user.controller.js";
import { AuthProtect } from "../middleware/auth.middleware.js";
import multer from "multer";

const Upload = multer();

const router = express.Router();

router.put(
  "/edit-profile",
  AuthProtect,
  upload.single("displayPic"),
  EditUserProfile,
);

export default router;
