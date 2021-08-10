/*
  REST API route and function for creating new
  article (upon pressing on create button)
  ShadowCMS
*/

import dayjs from "dayjs";
import { Request, Response } from "express";
import Article from "../../models/article-model";

export const CreateNewArticleRoute = async (req: Request, res: Response) => {
  /* Get body contents of request */
  const { slug } = req.body;

  /* Initialize current date for initial createdAt and updatedAt */
  const date = dayjs().format("YYYY-MM-DDTHH:mm:ss");

  /* Insert data to database */
  await Article.create({
    slug: slug,
    created_at: date,
    updated_at: date,
    metadata: {
      status: "in-progress",
    },
  });

  /* Return OK to User */
  return res.status(200).json({ message: `Successfully created new article ${slug}` });
};
