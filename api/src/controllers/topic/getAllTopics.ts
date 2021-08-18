/**
 * @description Fetch all newsroom topics
 * @author ShadowCMS
 */

import TopicModel from "../../models/topicModel";
import httpStatus from "http-status";
import Logger from "../../utilities/logger";
import { Response } from "express";

const logger = Logger();

const GetAllTopicsRoute = async (_: any, res: Response) => {
  await TopicModel.find({}, (error, docs) => {
    if (error) {
      logger.error(
        `Error while fetching newsroom topics. Details: ${error.message}`,
      );
    }

    return res.status(httpStatus.OK).json(docs);
  });
};

export default GetAllTopicsRoute;
