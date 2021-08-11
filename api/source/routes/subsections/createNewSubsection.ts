/**
 * REST API route for creating a new newsroom subsection
 *
 * @author ShadowCMS
 */

import SubSection from "../../models/subsection-model";
import { Request, Response } from "express";
import slugify from "slugify";

export const CreateNewSubSectionRoute = async (req: Request, res: Response) => {
  /* Get new subsection data from request body */
  const { label, description, parent } = req.body;

  /* Initialize new slug from label */
  const slug: string = slugify(label).toLowerCase();

  /* Persist new subsection data to database */
  await SubSection.create({
    slug: slug,
    label: label,
    description: description,
    parent: parent,
  });

  /* If successful, Get new subsection from database */
  const newSubSection = await SubSection.findOne({ slug: slug });

  /* Return subsection data to client */
  return res.status(200).json({ newSubSection: newSubSection });
};
