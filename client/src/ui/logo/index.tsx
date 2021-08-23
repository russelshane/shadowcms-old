/**
 * @description Global Logo Component Styles
 * @author ShadowCMS
 */

import React from "react";
import ROUTES from "../../constants/routes";
import { Link } from "react-router-dom";
import { LogoContainer } from "./styles";
import { LogoProps } from "./types";

const Logo: React.FC<LogoProps> = ({ withBackground }) => {
  return (
    <Link to={ROUTES.DASHBOARD}>
      <LogoContainer className={`${withBackground ? "withBackground" : "undefined"}`} />
    </Link>
  );
};

export default Logo;
