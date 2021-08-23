/**
 * @description Connection to MongoDB Database
 * @author ShadowCMS
 */

import dotenv from "dotenv";
import Logger from "../utilities/logger";
import mongoose from "mongoose";
import { MongoDBConnectionOptions } from "./options";

const logger = Logger();

const connectMongodb = async (staging: boolean): Promise<void> => {
  dotenv.config();
  let urlToConnect = "";
  let successMessage = "";
  let errorMessage = "";

  /* Using MongoDB local or in-memory database in development */
  if (staging) {
    urlToConnect = process.env.MONGODB_STAGING as string;
    successMessage = "Connected to MongoDB STAGING!";
  } else {
    urlToConnect = process.env.MONGODB_PRODUCTION as string;
    successMessage = "Connected to MongoDB PRODUCTION!";
  }

  /* Connect to MongoDB database */
  try {
    await mongoose.connect(urlToConnect, MongoDBConnectionOptions);
    logger.info(successMessage);
  } catch (err) {
    errorMessage = "Can't establish connection to MongoDB. Details:";
    logger.error(`${errorMessage} ${err.message}`);
    process.exit(1);
  }
};

export default connectMongodb;
