import Logger from "../utilities/logger";
import mongoose from "mongoose";
import { MongoDBUrlProduction, MongoDBUrlStaging } from "../constants";
import { MongoDBConnectionOptions } from "./options";

const logger = Logger();

const connectMongodb = async (staging: boolean): Promise<void> => {
  let urlToConnect = "";
  let successMessage = "🟢 Connected to Mongo Database successfully!";

  /* Using MongoDB in-memory database in development */
  if (staging) {
    urlToConnect = MongoDBUrlStaging;
    successMessage = "Connected to MongoDB staging successfully!";
  } else {
    urlToConnect = MongoDBUrlProduction;
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
