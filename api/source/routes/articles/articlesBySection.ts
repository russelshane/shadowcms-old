/**
 * REST API route for getting all articles by newsroom,
 * section
 *
 * @author ShadowCMS
 */

import { Request, Response } from "express";
import Article from "../../models/article-model";

export const ArticlesBySectionRoute = async (req: Request, res: Response) => {
  /* Get section query from request parameters */
  const { section } = req.params;

  /* Get article from database */
  const articles = await Article.find({ "sections.slug": section });

  /* Send article to client */
  return res.status(200).json({ articles });
};
