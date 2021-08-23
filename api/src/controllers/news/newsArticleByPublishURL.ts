/**
 * @description Get a single news article based on publish_url
 * @author ShadowCMS
 */

import Logger from "../../utilities/logger";
import NewsArticle from "../../models/newsModel";
import httpStatus from "http-status";
import { Request, Response } from "express";

const GetArticleByPublishURLRoute = async (req: Request, res: Response) => {
  const logger = Logger();

  /* Get document id from request parameters */
  const { url } = req.params;

  /* Find article based on slug provided */
  try {
    const article = await NewsArticle.findOne({
      "doc.metadata.publish_url": url,
    });

    return res.status(httpStatus.OK).json({ data: article });
  } catch (err) {
    logger.error(`Error while getting article. Details: ${err.message}`);
    process.exit(1);
  }
};
export default GetArticleByPublishURLRoute;
