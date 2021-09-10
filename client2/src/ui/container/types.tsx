/**
 * @description Types for Global Container UI Component
 * @author ShadowCMS
 */

import { ReactNode } from "react";

type ContainerProps = {
  margin?: any;
  width?: string | number;
  gridGap?: string | number;
  padding?: string | number;
  flexDirection?: any;
  alignItems?: string;
  justifyContent?: string;
  display?: string;
  children?: ReactNode;
};

export default ContainerProps;
