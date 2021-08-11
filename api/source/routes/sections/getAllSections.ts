/**
 * REST API route for retrieving all newsroom
 * sections
 *
 * @author ShadowCMS
 */

import Section from "../../models/section-model";
import { Response } from "express";

export const GetNewsroomSectionsRoute = async (_: any, res: Response) => {
  /* Retrieve all sections from database */
  const sections = await Section.find({});

  /* Return section data to client */
  return res.status(200).json({ sections });
};
