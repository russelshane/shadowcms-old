/**
 * @description Get editorial photos based on custom date and month
 * @author ShadowCMS
 */

import Logger from "../../utilities/logger";
import { Response, Request } from "express";
import httpStatus from "http-status";
import imagekit from "../../imagekit/config";

const logger = Logger();

const GetPhotosByMonthAndYearRoute = async (req: Request, res: Response) => {
  const currentYear = req.query.year;
  const currentMonth = req.query.month;
  const directory = "photograph";

  /* Fetch photos */
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

export default GetPhotosByMonthAndYearRoute;
