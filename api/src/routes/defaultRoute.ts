/**
 * @description Default API Server Route
 * @author ShadowCMS
 */

import { Response } from "express";

const DefaultRoute = (_: any, res: Response) => {
  const message = "Unauthorized Access";
  const response = res.status(403).json({ error: message });
  return response;
};

export default DefaultRoute;
