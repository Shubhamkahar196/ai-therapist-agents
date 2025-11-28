import express from 'express'
import type {Request, Response} from 'express'
import { inngest, functions } from "./inngest/functions.js"
import { logger } from "./utils/logger.js";
import { connectDB } from './utils/db.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

app.get("/",(req:Request,res:Response)=>{
    res.send("Hello world");
})

// Start server
const startServer = async () => {
  try {
    // Connect to MongoDB first
    await connectDB();

    // Then start the server
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
      logger.info(
        `Inngest endpoint available at http://localhost:${PORT}/api/inngest`
      );
    });
  } catch (error) {
    logger.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
