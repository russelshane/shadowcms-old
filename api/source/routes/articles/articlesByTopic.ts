/**
 * REST API route for getting all articles by newsroom,
 * topic
 *
 * @author ShadowCMS
 */

import { Request, Response } from "express";
import Article from "../../models/article-model";

export const ArticlesByTopicRoute = async (req: Request, res: Response) => {
  /* Get topic from request parameters */
  const { topic } = req.params;

  /* Get articles from database */
  const articles = await Article.find({ "topics.slug": topic });

  /* Send articles to client */
  return res.status(200).json({ articles });
};
