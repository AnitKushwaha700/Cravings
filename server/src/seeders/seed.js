import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();

import connectDB from "../config/dbConnection.config.js";

const Seed = async () => {
  try {
    connectDB();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
