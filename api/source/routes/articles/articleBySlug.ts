/*
  REST API route for getting a single article 
  by slug (used for CMS)
  ShadowCMS
*/

import { Request, Response } from "express";
import Article from "../../models/article-model";

export const ArticleBySlugRoute = async (req: Request, res: Response) => {
  /* Get slug from request parameters */
  const { slug } = req.params;

  /* Get article from database */
  const article = await Article.find({ slug: slug });

  /* Send article to client */
  return res.status(200).json(article);
};
