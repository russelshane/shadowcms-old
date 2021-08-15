import dotenv from "dotenv";
import Logger from "../utilities/logger";
import mongoose from "mongoose";
// import { MongoDBUrlProduction, MongoDBUrlStaging } from "../constants";
import { MongoDBConnectionOptions } from "./options";

const logger = Logger();

const connectMongodb = async (staging: boolean): Promise<void> => {
  dotenv.config();
  let urlToConnect = "";
  let successMessage = "Connected to Mongo Database successfully!";

  /* Using MongoDB in-memory database in development */
  if (staging) {
    urlToConnect = process.env.MONGODB_STAGING as string;
    successMessage = "Connected to MongoDB STAGING/TEST successfully!";
  } else {
    urlToConnect = process.env.MONGODB_PRODUCTION as string;
    successMessage = "Connected to MongoDB PRODUCTION successfully!";
  }

  /* Connect to MongoDB database */
  try {
    await mongoose.connect(urlToConnect, MongoDBConnectionOptions);
    logger.info(successMessage);
  } catch (err) {
    logger.error(`Can't establish connection to MongoDB. Details: ${err.message}`);
    process.exit(1);
  }
};

export default connectMongodb;
