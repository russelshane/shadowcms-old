/**
 * @description Header Component Types
 * @author ShadowCMS
 */

import { User } from "../../types/user";

export type HeaderProps = {
  isEditor?: boolean;
  articleState?: any;
  user?: User;
};
