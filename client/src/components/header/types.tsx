/**
 * @description Header Component Types
 * @author ShadowCMS
 */

import { Article } from "../../types/article";
import { User } from "../../types/user";

export type HeaderProps = {
  isEditor?: boolean;
  articleState?: Article;
  dispatch?: any;
  user?: User;
};
