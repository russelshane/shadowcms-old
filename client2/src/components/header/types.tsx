/**
 * @description Types for Header Component
 * @author ShadowCMS
 */

import User from "../../types/user";

type HeaderProps = {
  isEditor?: boolean;
  setSidebarActive: any;
  sidebarActive: boolean;
  user?: User;
};

export default HeaderProps;
