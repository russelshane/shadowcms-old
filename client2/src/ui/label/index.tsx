/**
 * @description Global Label UI Component
 * @author ShadowCMS
 */

import React from "react";
import { LabelContainer } from "./style";
import LabelProps from "./types";

const Label: React.FC<LabelProps> = ({
  children,
  width,
  padding,
  gridGap,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  margin,
  fontSize,
  color,
  cursor,
  boxShadow,
  boxSizing,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  letterSpacing,
  fontWeight,
  textAlign,
}) => {
  return (
    <LabelContainer
      style={{
        fontWeight: fontWeight,
        margin: margin,
        padding: padding,
        width: width,
        gridGap: gridGap,
        textAlign: textAlign,
        display: display,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        fontSize: fontSize,
        color: color,
        cursor: cursor,
        boxShadow: boxShadow,
        boxSizing: boxSizing,
        border: border,
        borderBottom: borderBottom,
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderTop: borderTop,
        letterSpacing: letterSpacing,
      }}
    >
      {children}
    </LabelContainer>
  );
};

export default Label;
