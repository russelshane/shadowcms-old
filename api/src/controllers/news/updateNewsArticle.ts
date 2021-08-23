/**
 * @description Route controller for updating an exiting news article
 * @author ShadowCMS
 */

import Logger from "../../utilities/logger";
import httpStatus from "http-status";
import NewsArticle from "../../models/newsModel";
import { Response, Request } from "express";
import { generateDate } from "../../constants";

const UpdateNewsArticleRoute = async (req: Request, res: Response) => {
  const logger = Logger();

  /* Get updated news article data */
  const { slug, doc } = req.body;

  /* Persist new data of article to database */
  try {
    await NewsArticle.updateOne(
      { slug: slug },
      {
        updated_at: generateDate(),
        slug: slug,
        doc: {
          ...doc,
        },
      },
    );
    logger.info(`Updated 'news' article ${slug}`);
  } catch (err) {
    logger.error(`Error while updating document. Details: ${err.message}`);
    process.exit(1);
  }

  /* Get updated article database */
  const updatedArticle = await NewsArticle.find({
    slug: slug,
  });

  return res.status(httpStatus.OK).json(updatedArticle);
};

export default UpdateNewsArticleRoute;
