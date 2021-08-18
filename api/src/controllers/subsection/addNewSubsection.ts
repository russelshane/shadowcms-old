/**
 * @description Create new newsroom subsection
 * @author ShadowCMS
 */

import SubsectionModel from "../../models/subsectionModel";
import SectionModel from "../../models/sectionModel";
import httpStatus from "http-status";
import Logger from "../../utilities/logger";
import { Response, Request } from "express";

const logger = Logger();

const CreateNewSubsectionRoute = async (req: Request, res: Response) => {
  const { slug, label, description, parent_id } = req.body;

  try {
    await SubsectionModel.create({
      slug: slug,
      label: label,
      description: description,
      parent_id: parent_id,
    });

    const newSub = await SubsectionModel.findOne({
      slug: slug,
    });

    const withParent = await SectionModel.findOne({
      _id: parent_id,
    });

    const newSubsection = {
      slug: newSub?.slug,
      label: newSub?.label,
      description: newSub?.description,
      parent: {
        slug: withParent?.slug,
        label: withParent?.label,
        description: withParent?.description,
      },
    };

    logger.info(`Successfully created new subsection: ${label}`);

    return res.status(httpStatus.OK).json({ newSubsection });
  } catch (err) {
    logger.error(`Error while creating new subsection. Details: ${err.message}`);
    process.exit(1);
  }
};

export default CreateNewSubsectionRoute;
