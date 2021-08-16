/**
 * @description Connecting to the Shadow ImageKit service.
 * @author ShadowCMS
 */

import Logger from "../utilities/logger";
import dotenv from "dotenv";
import imagekit from "./config";

const logger = Logger();
dotenv.config();

const initImageKit = () => {
  let connected = false;

  /* Connect to ImageKit */
  try {
    if (imagekit) {
      logger.info(`Connected to Shadow Imagekit!`);
      connected = true;
    } else {
      logger.warn(`Error while connecting to ImageKit.`);
      connected = false;
    }
  } catch (err) {
    logger.error(`Error while connecting to ImageKit. Details: ${err.message}`);
    connected = false;
  }

  return connected;
};

export default initImageKit;
