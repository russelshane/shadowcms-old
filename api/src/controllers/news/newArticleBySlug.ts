/**
 * @description Get a single news article based on cms document ID
 * @author ShadowCMS
 */

import Logger from "../../utilities/logger";
import NewsArticle from "../../models/newsModel";
import httpStatus from "http-status";
import { Request, Response } from "express";

const GetArticleBySlugRoute = async (req: Request, res: Response) => {
  const logger = Logger();

  /* Get document id from request parameters */
  const { slug } = req.params;

  /* Find article based on slug provided */
  try {
    const article = await NewsArticle.find({
      slug: slug,
    });

    return res.status(httpStatus.OK).json(article);
  } catch (err) {
    logger.error(`Error while getting article. Details: ${err.message}`);
    process.exit(1);
  }
};
export default GetArticleBySlugRoute;
