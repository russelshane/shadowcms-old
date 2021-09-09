/**
 * @description Avatar UI Component
 * @author ShadowCMS
 */

import React from "react";
import AvatarProps from "./types";
import { AvatarContainer } from "./style";

const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return <AvatarContainer style={{ backgroundImage: `url(${image})` }} />;
};

export default Avatar;
