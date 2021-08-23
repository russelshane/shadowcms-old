/**
 * @description Main Header Component
 * @author ShadowCMS
 */

import React from "react";
import loadable from "@loadable/component";
import { HeaderProps } from "./types";
import { HeaderWrapper } from "./styles";

const Header: React.FC<HeaderProps> = () => {
  /* Dynamic Components */
  const Logo = loadable(() => import("../../ui/logo"));

  return (
    <HeaderWrapper>
      <Logo />
    </HeaderWrapper>
  );
};

export default Header;
