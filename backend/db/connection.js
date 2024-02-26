import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGODB_DRIVER = process.env.MONGODB_DRIVER_CODE;
const createConnection = async () => {
  try {
    await mongoose.connect(MONGODB_DRIVER);
    console.log("Connection Established");
  } catch (error) {
    console.log(error.message);
  }
};
export default createConnection;
