/**
 * @description Navigation Component
 * @author ShadowCMS
 */

import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../../constants/nav";
import { NavigationWrapper, NavItem } from "./styles";
import { NavProps } from "./types";

const Navigation: React.FC<NavProps> = ({ flexDirection }) => {
  return (
    <NavigationWrapper className={flexDirection}>
      {NavLinks.slice(0, 5).map((val, index) => (
        <Link to={val.path} key={index}>
          <NavItem>{val.label}</NavItem>
        </Link>
      ))}
    </NavigationWrapper>
  );
};

export default Navigation;
