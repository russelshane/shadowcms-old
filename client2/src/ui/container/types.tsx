/**
 * @description Types for Global Container UI Component
 * @author ShadowCMS
 */

import { ReactNode } from "react";

type ContainerProps = {
  margin?: any;
  width?: string | number;
  height?: string | number;
  gridGap?: string | number;
  padding?: string | number;
  maxWidth?: string | number | any;
  flexDirection?: any;
  alignItems?: string;
  justifyContent?: string;
  display?: string;
  alignSelf?: string;
  children?: ReactNode;
};

export default ContainerProps;
