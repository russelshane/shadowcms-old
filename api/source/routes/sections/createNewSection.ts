/**
 * REST API route for creating a new newsroom section
 *
 * @author ShadowCMS
 */

import Section from "../../models/section-model";
import SubSection from "../../models/subsection-model";
import { Request, Response } from "express";

export const CreateNewSectionRoute = async (req: Request, res: Response) => {
  /* Get new section data from request body */
  const { slug, label, description } = req.body;

  /* Persist new section data to database */
  await Section.create({
    slug: slug,
    label: label,
    description: description,
  });

  /* If successful, Get new section from database along with its subsections */
  const getSection = await Section.findOne({ slug: slug });
  const subsections = await SubSection.find({ parent: slug });
  const section = {
    label: getSection?.label,
    slug: getSection?.slug,
    description: getSection?.description,
    subsections: subsections,
  };

  /* Return section data to client */
  return res.status(200).json({ section });
};
