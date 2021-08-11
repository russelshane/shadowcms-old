/**
 * REST API route for updating an existing
 * newsroom topic
 *
 * @author ShadowCMS
 */

import Topic from "../../models/topic-model";
import { Request, Response } from "express";

export const UpdateTopicRoute = async (req: Request, res: Response) => {
  /* Get new topic data from request body */
  const { slug, label, description } = req.body;

  /* Persist new topic data to database */
  await Topic.updateOne(
    { slug: slug },
    {
      slug: slug,
      label: label,
      description: description,
    },
  ).catch((err) => {
    return res.status(500).json({ errors: err });
  });

  /* If successful, Get new topic from database */
  const updatedTopic = await Topic.findOne({ slug: slug });

  /* Return topic data to client */
  return res.status(200).json({ updatedTopic: updatedTopic });
};
