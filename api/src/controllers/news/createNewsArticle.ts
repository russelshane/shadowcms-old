/**
 * @description Route controller for creating a new news article
 * @author ShadowCMS
 */

import Logger from "../../utilities/logger";
import httpStatus from "http-status";
import NewsArticle from "../../models/newsModel";
import { Response } from "express";
import { generateIdNumber } from "../../constants";

const CreateNewsArticleRoute = async (_: any, res: Response) => {
  /* Initialize Document ID */
  const slug = `shadow_${generateIdNumber()}`;
  const logger = Logger();

  /* Persist new default article to database */
  try {
    await NewsArticle.create({
      slug: slug,
    });
    logger.info(`Created 'news' article ${slug}`);
  } catch (err) {
    logger.error(`Error while creating new document. Details: ${err.message}`);
    process.exit(1);
  }

  /* Get new blank article from database */
  const newArticle = await NewsArticle.find({
    slug: slug,
    doc: {
      header: {
        header_type: "basic",
      },
      metadata: {
        is_breaking_news: false,
        is_exclusive: false,
        is_live: false,
      },
    },
  });

  return res.status(httpStatus.OK).json({ data: { ...newArticle } });
};

export default CreateNewsArticleRoute;
