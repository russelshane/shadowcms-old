/*
  Default Route of the REST API
  Shadow CMS
*/

import { Response } from "express";

export const GuideRoute = (_: any, res: Response) => {
  const status: number = 403;
  const msg: Response = res.status(status).json({ error: "Unauthorized Access" });
  return msg;
};
