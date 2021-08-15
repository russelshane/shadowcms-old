/**
 * @description ShadowCMS
 */

import dotenv from "dotenv";
import connectMongodb from "./mongodb/connect";
import Logger from "./utilities/logger";

/* Replacing console.log with a custom ShadowLogger */
const logger = Logger();

/* Main function to start application server */
const init = async () => {
  /* Initialize server environment */
  dotenv.config();

  connectMongodb(false);
};

/* Call function to start server */
init().catch((error) => {
  logger.error(error);
});
