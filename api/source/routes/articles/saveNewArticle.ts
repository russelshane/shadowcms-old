/**
 * REST API route and function for editing or
 * updating an article (upon pressing create button)
 *
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import { Request, Response } from "express";
import Article, { Articles } from "../../models/article-model";

export const SaveArticleRoute = async (req: Request, res: Response) => {
  /* Get body contents of request */
  const {
    slug,
    header,
    metadata,
    multimedia,
    contents,
    corrections,
    notes,
  }: Articles = req.body;

  /* Initialize current date for initial createdAt and updatedAt */
  const date = dayjs().format("YYYY-MM-DDTHH:mm:ss");

  /* Set new data on existing article */
  await Article.updateOne(
    { slug: slug },
    {
      updated_at: date,
      slug,
      header,
      metadata,
      multimedia,
      contents,
      corrections,
      notes,
    },
  );

  /* Return new data to user */
  res.status(200).json({ message: "Saved!" });
};
