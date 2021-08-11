/**
 * REST API route for creating a new newsroom topic
 *
 * @author ShadowCMS
 */

import Topic from "../../models/topic-model";
import { Request, Response } from "express";

export const CreateNewTopicRoute = async (req: Request, res: Response) => {
  /* Get new topic data from request body */
  const { slug, label, description } = req.body;

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
