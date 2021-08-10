/**
 * REST API route for updating an existing new
 * newsroom section
 *
 * @author ShadowCMS
 */

import Section from "../../models/section-model";
import { Request, Response } from "express";

export const UpdateSectionRoute = async (req: Request, res: Response) => {
  /* Get new section data from request body */
  const { slug, label, description } = req.body;

  /* Persist new section data to database */
  await Section.updateOne(
    { slug: slug },
    {
      slug: slug,
      label: label,
      description: description,
    },
  ).catch((err) => {
    return res.status(500).json({ errors: err });
  });

  /* If successful, Get new section from database */
  const updatedSection = await Section.findOne({ slug: slug });

  /* Return section data to client */
  return res.status(200).json({ updatedSection: updatedSection });
};
