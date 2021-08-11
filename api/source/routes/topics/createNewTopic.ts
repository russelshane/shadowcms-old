/**
 * REST API route for creating a new newsroom topic
 *
 * @author ShadowCMS
 */

import Topic from "../../models/topic-model";
import { Request, Response } from "express";
import slugify from "slugify";

export const CreateNewTopicRoute = async (req: Request, res: Response) => {
  /* Get new topic data from request body */
  const { label, description } = req.body;

  /* Initialize new slug from label */
  const slug: string = slugify(label).toLowerCase();

  /* Persist new topic data to database */
  await Topic.create({
    slug: slug,
    label: label,
    description: description,
  });

  /* If successful, Get new topic from database */
  const newTopic = await Topic.findOne({ slug: slug });

  /* Return topic data to client */
  return res.status(200).json({ newTopic: newTopic });
};
