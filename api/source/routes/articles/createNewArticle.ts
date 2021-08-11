/**
 * REST API route and function for creating new
 * article (upon pressing create button)
 *
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import { Request, Response } from "express";
import Article, { Articles } from "../../models/article-model";

export const CreateNewArticleRoute = async (req: Request, res: Response) => {
  /* Get body contents of request */
  const {
    slug,
    metadata,
    header,
    multimedia,
    contents,
    sections,
    topics,
    corrections,
    notes,
  }: Articles = req.body;

  /* Initialize current date for initial createdAt and updatedAt */
  const date = dayjs().format("YYYY-MM-DDTHH:mm:ss");

  /* Insert data to database */
  await Article.create({
    slug: slug,
    created_at: date,
    updated_at: date,
    header,
    metadata,
    sections,
    topics,
    multimedia,
    contents,
    corrections,
    notes,
  });

  /* Return OK to User */
  return res
    .status(200)
    .json({ message: `Successfully created new article ${slug}` });
};
