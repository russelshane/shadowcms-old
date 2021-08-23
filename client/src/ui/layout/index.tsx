/**
 * @description Global Layout UI Component
 * @author ShadowCMS
 */

import React, { useEffect } from "react";
import { LayoutContainer } from "./styles";
import { LayoutProps } from "./types";

const Layout: React.FC<LayoutProps> = ({ children, page }) => {
  useEffect(() => {
    window.document.title = page as string;
  }, []);

  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
