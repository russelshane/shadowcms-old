/**
 * @description Create new newsroom section
 * @author ShadowCMS
 */

import SectionModel from "../../models/sectionModel";
import httpStatus from "http-status";
import Logger from "../../utilities/logger";
import { Response, Request } from "express";

const logger = Logger();

const CreateNewSectionRoute = async (req: Request, res: Response) => {
  const { slug, label, description } = req.body;

  try {
    await SectionModel.create({
      slug: slug,
      label: label,
      description: description,
    });

    const newSection = await SectionModel.findOne({
      slug: slug,
    });

    logger.info(`Successfully created new section: ${label}`);

    return res.status(httpStatus.OK).json({ newSection });
  } catch (err) {
    logger.error(`Error while creating new section. Details: ${err.message}`);
    process.exit(1);
  }
};

export default CreateNewSectionRoute;
