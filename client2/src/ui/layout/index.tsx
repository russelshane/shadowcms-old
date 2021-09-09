/**
 * @description Layout UI Component
 * @author ShadowCMS
 */

import React, { useEffect } from "react";
import LayoutProps from "./types";
import { LayoutContainer } from "./style";

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  /**
   * Change page title on page load by layout
   */
  useEffect(() => {
    if (!title) {
      document.title = "Shadow";
    }
    document.title = title as string;
  }, []);

  /**
   * Render
   */
  return <LayoutContainer>{children}</LayoutContainer>;
};

export default Layout;
