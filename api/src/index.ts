/**
 * @description ShadowCMS
 */

import dotenv from "dotenv";
import express, { Express, urlencoded, json } from "express";
import connectMongodb from "./mongodb/connect";
import Logger from "./utilities/logger";

import DefaultRoute from "./routes/defaultRoute";

/* Replacing console.log with a custom ShadowLogger */
const logger = Logger();

/* Main function to start application server */
const init = async () => {
  /* Initialize server environment */
  dotenv.config();
  const PORT = process.env.PORT || (5000 as number);

  /* Connect to Databases */
  connectMongodb(true);

  /* New express.js instance (dropped Koajs) */
  const api: Express = express();
  api.use(urlencoded({ extended: true }));
  api.use(json());

  /* Server request routes (available in API docs) */
  api.get("/", DefaultRoute);

  /* Initialize server */
  api.listen(PORT, () => {
    logger.info("Shadow CMS is running");
  });
};

/* Call function to start server */
init().catch((error) => {
  logger.error(error);
});
