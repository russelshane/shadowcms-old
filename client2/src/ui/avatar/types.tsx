/**
 * @description Types for Avatar UI Component
 * @author ShadowCMS
 */

import User from "../../types/user";

type AvatarProps = {
  user: User;
  onClick?: any;
  withMenu?: boolean;
};

export default AvatarProps;
