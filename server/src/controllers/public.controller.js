import ContactUs from "../models/contact.model.js";
import bcrypt from "bcrypt";

export const ContactUsForm = async (req, res, next) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    if (!fullName || !email || !phone || !subject || !message) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "Email already Registered" });
      return next(error);
    }

    const SALT = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, SALT);

    const newMessage = await ContactUs.create({
      fullName,
      email,
      phone,
      subject,
      message,
    });

    res.status(201).json({ message: "Messages Sends Successfully" });
  } catch (error) {
    console.log(error.message);
    next();
  }
};
