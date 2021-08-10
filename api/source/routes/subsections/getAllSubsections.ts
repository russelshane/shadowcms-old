/**
 * REST API route for retrieving all newsroom
 * subsections
 *
 * @author ShadowCMS
 */

import SubSection from "../../models/subsection-model";
import { Response } from "express";

export const GetNewsroomSubSectionsRoute = async (_: any, res: Response) => {
  /* Retrieve all sections from database */
  const subsections = await SubSection.find();

  /* Return section data to client */
  return res.status(200).json({ subsections });
};
