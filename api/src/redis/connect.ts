/**
 * @description Connection to Redis
 * @author ShadowCMS
 */

import dotenv from "dotenv";
import Redis from "ioredis";
import Logger from "../utilities/logger";

const logger = Logger();

const connectToRedis = async (staging: boolean) => {
  dotenv.config();
  let urlToConnect = "";
  let successMessage = "";
  let errorMessage = "";
  let redis;

  /* Use ShadowCMS staging redis if in development */
  if (staging) {
    urlToConnect = process.env.REDIS_STAGING as string;
    successMessage = "Connected to Redis STAGING!";
  } else {
    urlToConnect = process.env.REDIS_PRODUCTION as string;
    successMessage = "Connected to Redis PRODUCTION!";
  }

  /* Connect to Redis Database */
  try {
    redis = new Redis(urlToConnect);
    redis.on("connect", () => {
      logger.info(successMessage);
    });
  } catch (err) {
    errorMessage = "A problem occured while connecting to Redis";
    logger.error(`${errorMessage} ${err.message}`);
    process.exit(1);
  }

  return redis;
};

export default connectToRedis;
