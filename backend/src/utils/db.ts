import mongoose from "mongoose";
import { logger } from "./logger.js";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error(" MONGODB_URI is missing in .env file");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB Atlas");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
