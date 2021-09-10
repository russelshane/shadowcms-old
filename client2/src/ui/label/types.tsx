/**
 * @description Types for Global Label UI Component
 * @author ShadowCMS
 */

import { ReactNode } from "react";

type LabelProps = {
  margin?: any;
  width?: string | number;
  gridGap?: string | number;
  padding?: string | number;
  flexDirection?: any;
  alignItems?: string;
  justifyContent?: string;
  display?: string;
  fontSize?: string | number;
  color?: string;
  cursor?: string;
  children?: ReactNode;
  borderBottom?: string;
  borderTop?: string;
  borderLeft?: string;
  borderRight?: string;
  border?: string;
  boxSizing?: string | number | any;
  boxShadow?: string;
  letterSpacing?: string | number;
  fontWeight?: string | number | any;
  textAlign?: string | any;
};

export default LabelProps;
