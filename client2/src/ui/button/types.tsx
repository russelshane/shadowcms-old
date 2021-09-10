/**
 * @description Types for Button UI Component
 * @author ShadowCMS
 */

import { ReactNode } from "react";

type ButtonProps = {
  variant?: string;
  children?: ReactNode;
  icon?: any;
  onClick?: any;
  size?: string;
};

export default ButtonProps;
