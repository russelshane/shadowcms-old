/**
 * This API endpoint is for returning a list of users
 * that can be mentioned within an article inline-comment
 *
 * @author ShadowCMS
 */

import { Response } from "express";

export const GetUserMentionsRoute = (_: any, res: Response) => {
  /* Get query parameter */
  // const query = req.query.search;

  /* TEMP: return list of users */
  const data = {
    success: true,
    items: [
      {
        name: "Times Independent",
        profile_photo: "https://avatars.githubusercontent.com/u/88447439",
      },
      {
        name: "Sweet Amnesia",
        profile_photo: "https://avatars.githubusercontent.com/u/88624989",
      },
    ],
  };

  return res.status(200).json({
    ...data,
  });
};
