/**
 * @description Header Component
 * @author ShadowCMS
 */

import React from "react";
import loadable from "@loadable/component";
import HeaderProps from "./types";
import { HeaderContainer } from "./style";

/* Dynamic Components */
const Avatar = loadable(() => import("../../ui/avatar"));
const Logo = loadable(() => import("../../ui/logo"));

const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Avatar image="https://ik.imagekit.io/drs/Dars.jpg" />
    </HeaderContainer>
  );
};

export default Header;
