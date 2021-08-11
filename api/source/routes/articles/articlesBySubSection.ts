/**
 * REST API route for getting all articles by newsroom,
 * subsection
 *
 * @author ShadowCMS
 */

import { Request, Response } from "express";
import Article from "../../models/article-model";

export const ArticlesBySubSectionRoute = async (req: Request, res: Response) => {
  /* Get subsection query from request parameters */
  const { subsection } = req.params;

  /* Get articles from database */
  const articles = await Article.find({ "sections.subsections.slug": subsection });

  /* Send articles to client */
  return res.status(200).json({ articles });
};
