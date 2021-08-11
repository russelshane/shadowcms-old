/**
 * REST API route for getting a single article by
 * publish_url, this field is used for production/
 * publication-ready articles.
 *
 * @author ShadowCMS
 */

import { Request, Response } from "express";
import Article from "../../models/article-model";

export const ArticleByPublishURL = async (req: Request, res: Response) => {
  /* Get slug from request parameters */
  const { url } = req.params;

  /* Get article from database */
  const article = await Article.findOne({ publish_url: url });

  /* Send article to client */
  return res.status(200).json(article);
};
