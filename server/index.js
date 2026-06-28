import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/dbConnection.config.js";
import AuthRouter from "./src/routes/auth.router.js"
import PublicRouter from "./src/routes/public.router.js"

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);

// Default API
app.get("/", (req, res) => {
  console.log("Default Get API Hit");
  res.json({ message: "Welcome to my first backend project" });
});

// Default Error Handler
app.use((err, req, res, next) => {
  const ErrMessage = err.message || "Internal Server Error";
  const ErrStatusCode = err.statusCode || 500;

  res.status(ErrStatusCode).json({ message: ErrMessage });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server Started on port:", port);
  connectDB();
});
