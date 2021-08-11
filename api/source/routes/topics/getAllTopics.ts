/**
 * REST API route for retrieving all newsroom
 * topics
 *
 * @author ShadowCMS
 */

import Topic from "../../models/topic-model";
import { Response } from "express";

export const GetNewsroomTopicsRoute = async (_: any, res: Response) => {
  /* Retrieve all topics from database */
  const topics = await Topic.find();

  /* Return topics data to client */
  return res.status(200).json({ topics });
};
