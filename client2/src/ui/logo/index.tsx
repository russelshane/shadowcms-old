/**
 * @description Logo UI Component
 * @author ShadowCMS
 */

import React from "react";
import { LogoContainer } from "./style";
import LogoProps from "./types";

const Logo: React.FC<LogoProps> = ({ size }) => {
  return <LogoContainer className={size ? size : undefined} />;
};

export default Logo;
