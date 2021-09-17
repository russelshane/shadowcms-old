/**
 * @description Pill UI Component
 * @author ShadowCMS
 */

import React from "react";
import { PillContainer, PillLabel } from "./style";
import { PillProps } from "./types";

const Pill: React.FC<PillProps> = ({ label, type }) => {
  return (
    <PillContainer className={type}>
      <PillLabel>{label}</PillLabel>
    </PillContainer>
  );
};

export default Pill;
