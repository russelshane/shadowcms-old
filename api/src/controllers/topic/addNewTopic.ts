/**
 * @description Create new newsroom topic
 * @author ShadowCMS
 */

import TopicModel from "../../models/topicModel";
import httpStatus from "http-status";
import Logger from "../../utilities/logger";
import { Response, Request } from "express";

const logger = Logger();

const CreateNewTopicRoute = async (req: Request, res: Response) => {
  const { slug, label, description } = req.body;

  try {
    await TopicModel.create({
      slug: slug,
      label: label,
      description: description,
    });

    const newSection = await TopicModel.findOne({
      slug: slug,
    });

    logger.info(`Successfully created new topic: ${label}`);

    return res.status(httpStatus.OK).json({ newSection });
  } catch (err) {
    logger.error(`Error while creating new topic. Details: ${err.message}`);
    process.exit(1);
  }
};

export default CreateNewTopicRoute;
