/**
 * REST API route for updating an existing new
 * newsroom subsection
 *
 * @author ShadowCMS
 */

import SubSection from "../../models/subsection-model";
import { Request, Response } from "express";

export const UpdateSubSectionRoute = async (req: Request, res: Response) => {
  /* Get new subsection data from request body */
  const { slug, label, description, parent } = req.body;

  /* Persist new subsection data to database */
  await SubSection.updateOne(
    { slug: slug },
    {
      slug: slug,
      label: label,
      description: description,
      parent: parent,
    },
  ).catch((err) => {
    return res.status(500).json({ errors: err });
  });

  /* If successful, Get new subsection from database */
  const updatedSubSection = await SubSection.findOne({ slug: slug });

  /* Return subsection data to client */
  return res.status(200).json({ updatedSubSection: updatedSubSection });
};
