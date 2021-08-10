/**
 * REST API route for retrieving a single newsroom section
 *
 * @author ShadowCMS
 */

import Section from "../../models/section-model";
import SubSection from "../../models/subsection-model";
import { Request, Response } from "express";

export const GetOneNewsroomSectionRoute = async (req: Request, res: Response) => {
  /* Get new section data from request body */
  const { slug } = req.params;

  /* If successful, Get section from database along with subsections */
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
