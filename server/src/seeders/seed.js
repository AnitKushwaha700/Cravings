import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();

import connectDB from "../config/dbConnection.config.js";
import adminSeed from "./adminSeed.js";

const Seed = async () => {
  try {
    connectDB();

    await adminSeed();
    await userSeed();
  } catch (error) {
    console.log(error.message);
  } finally {
    process.exit(1);
  }
};

Seed();

