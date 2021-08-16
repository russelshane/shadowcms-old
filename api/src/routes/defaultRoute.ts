/**
 * @description Default API Server Route
 * @author ShadowCMS
 */

import httpStatus from "http-status";
import { Response } from "express";

const DefaultRoute = (_: any, res: Response) => {
  const message = "Unauthorized Access";
  const response = res.status(httpStatus.FORBIDDEN).json({ error: message });

  return response;
};

export default DefaultRoute;
