/**
 * @description Main Server & API
 * @author ShadowCMS
 */

import Logger from "./utilities/logger";
import cors from "cors";
import dotenv from "dotenv";
import connectRedis from "connect-redis";
import connectMongodb from "./mongodb/connect";
import connectToRedis from "./redis/connect";
import initImageKit from "./imagekit/init";
import session from "express-session";
import express, { Express, urlencoded, json } from "express";
import { REDIS_STORE_NAME, isProduction } from "./constants";

import DefaultRoute from "./routes/defaultRoute";
import CreateNewsArticleRoute from "./controllers/news/createNewsArticle";
import UpdateNewsArticleRoute from "./controllers/news/updateNewsArticle";
import GetArticleBySlugRoute from "./controllers/news/newArticleBySlug";
import GetLatestPhotosRoute from "./controllers/multimedia/getLatestPhotos";
import GetPhotosByMonthAndYearRoute from "./controllers/multimedia/getPhotosByMonthAndYear";
import GetLatestMoviesRoute from "./controllers/multimedia/getLatestMovies";
import GetMoviesByMonthAndYearRoute from "./controllers/multimedia/getMoviesByMonthAndYear";

/* Replacing console.log with a custom ShadowLogger */
const logger = Logger();

/* Main function to start application server */
const init = async () => {
  /* Initialize server environment */
  dotenv.config();
  const PORT = process.env.PORT || (5000 as number);

  /* Connect to Databases */
  await connectMongodb(true);
  await initImageKit();
  const redis: any = await connectToRedis(true);

  /* Re-initialize new Redis store */
  const RedisStore = await connectRedis(session);

  /* New express.js instance (dropped Koajs) */
  const api: Express = express();
  api.set("trust proxy", 1);
  api.use(urlencoded({ extended: true }));
  api.use(cors({ origin: "*" }));
  api.use(json());

  /* Initialize server sessions / cookies */
  api.use(
    session({
      name: REDIS_STORE_NAME,
      store: new RedisStore({
        client: redis,
        disableTouch: true,
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10 /* 10 Years */,
        httpOnly: true,
        sameSite: "lax" /* CRSF */,
        secure: isProduction /* Cookie only works in https (production) */,
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET as string,
      resave: false,
    }),
  );

  /* Server request routes (available in API docs) */
  api.get("/", DefaultRoute);
  api.post("/api/v8/articles/new/", CreateNewsArticleRoute);
  api.post("/api/v8/articles/update/", UpdateNewsArticleRoute);
  api.get("/api/v8/articles/:slug/", GetArticleBySlugRoute);
  api.get("/api/v8/multimedia/photos/latest/", GetLatestPhotosRoute);
  api.get("/api/v8/multimedia/photos/custom/", GetPhotosByMonthAndYearRoute);
  api.get("/api/v8/multimedia/movies/latest/", GetLatestMoviesRoute);
  api.get("/api/v8/multimedia/movies/custom/", GetMoviesByMonthAndYearRoute);

  /* Initialize server */
  api.listen(PORT, () => {
    logger.info("Shadow CMS is now running...");
  });
};

/* Call function to start server */
init().catch((error) => {
  logger.error(error);
});
