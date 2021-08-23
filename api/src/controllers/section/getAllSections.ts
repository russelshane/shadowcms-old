/**
 * @description Fetch all newsroom sections
 * @author ShadowCMS
 */

import SectionModel from "../../models/sectionModel";
import httpStatus from "http-status";
import Logger from "../../utilities/logger";
import { Response } from "express";

const logger = Logger();

const GetAllSectionsRoute = async (_: any, res: Response) => {
  await SectionModel.find({}, (error, docs) => {
    if (error) {
      logger.error(
        `Error while fetching newsroom sections. Details: ${error.message}`,
      );
    }

    return res.status(httpStatus.OK).json(docs);
  });
};

export default GetAllSectionsRoute;
