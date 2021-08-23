/**
 * @description Get editorial photos of the current month
 * @author ShadowCMS
 */

import Logger from "../../utilities/logger";
import { Response } from "express";
import httpStatus from "http-status";
import dayjs from "dayjs";
import imagekit from "../../imagekit/config";

const logger = Logger();

const GetLatestPhotosRoute = async (_: any, res: Response) => {
  const currentYear = dayjs().format("YYYY");
  const currentMonth = dayjs().format("MM");
  const directory = "photograph";

  /* Fetch photos in current month directory */
  imagekit.listFiles(
    {
      skip: 0,
      limit: 30,
      path: `${directory}/${currentYear}/${currentMonth}`,
    },
    (error, result) => {
      if (error) {
        logger.error(`Error while fetching images. Details: ${error.message}`);
      }

      return res.status(httpStatus.OK).json({ result });
    },
  );

  return true;
};

export default GetLatestPhotosRoute;
