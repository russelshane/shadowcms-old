/**
 * @description Fetch all newsroom subsections
 * @author ShadowCMS
 */

import SubsectionModel from "../../models/subsectionModel";
import httpStatus from "http-status";
import Logger from "../../utilities/logger";
import { Response } from "express";

const logger = Logger();

const GetAllSubsectionsRoute = async (_: any, res: Response) => {
  await SubsectionModel.find({}, (error, docs) => {
    if (error) {
      logger.error(
        `Error while fetching newsroom subsections. Details: ${error.message}`,
      );
    }

    return res.status(httpStatus.OK).json(docs);
  });
};

export default GetAllSubsectionsRoute;
