/**
 * @description Get editorial movies/videos based on custom date
 * @author ShadowCMS
 */

import Logger from "../../utilities/logger";
import { Response, Request } from "express";
import httpStatus from "http-status";
import imagekit from "../../imagekit/config";

const logger = Logger();

const GetMoviesByMonthAndYearRoute = async (req: Request, res: Response) => {
  const currentYear = req.query.year;
  const currentMonth = req.query.month;
  const directory = "movies";

  /* Fetch movies */
  imagekit.listFiles(
    {
      skip: 0,
      limit: 30,
      path: `${directory}/${currentYear}/${currentMonth}`,
    },
    (error, result) => {
      if (error) {
        logger.error(`Error while fetching videos. Details: ${error.message}`);
      }

      return res.status(httpStatus.OK).json({ result });
    },
  );

  return true;
};

export default GetMoviesByMonthAndYearRoute;
