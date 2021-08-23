/**
 * @description Fetch latest hard-news articles
 * @author ShadowCMS
 */

import { Response } from "express";
import Logger from "../../utilities/logger";
import httpStatus from "http-status";
import NewsArticle from "../../models/newsModel";

const logger = Logger();

const GetLatestNewsArticlesRoute = async (_: any, res: Response) => {
  let articles;

  /* Fetch articles */
  try {
    articles = await NewsArticle.find({});
  } catch (err) {
    logger.error(
      `Error while fetching latest news articles. Details: ${err.message}`,
    );
  }

  return res.status(httpStatus.OK).json(articles);
};

export default GetLatestNewsArticlesRoute;
