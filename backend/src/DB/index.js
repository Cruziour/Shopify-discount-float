import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({});

const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGODB_URI);

    console.log(
      `🚀 MongoDB Connected Successfully: ${connectionDB.connection.host}`,
    );
  } catch (error) {
    console.log(`MongoDB Connection failed: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
