/**
 * @description Global Container UI Component
 * @author ShadowCMS
 */

import React from "react";
import { ContainerMain } from "./style";
import ContainerProps from "./types";

const Container: React.FC<ContainerProps> = ({
  children,
  width,
  padding,
  gridGap,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  margin,
}) => {
  return (
    <ContainerMain
      style={{
        margin: margin,
        padding: padding,
        width: width,
        gridGap: gridGap,
        display: display,
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
    >
      {children}
    </ContainerMain>
  );
};

export default Container;