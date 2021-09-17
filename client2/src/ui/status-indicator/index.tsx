/**
 * @description Status Indicator UI Component
 * @author ShadowCMS
 */

import React from "react";
import { SIContainer, SIStatus, SILabel } from "./style";
import { StatusIndicatorProps } from "./types";

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ type, label }) => {
  return (
    <SIContainer>
      <SIStatus className={type} />
      {label && <SILabel>{label}</SILabel>}
    </SIContainer>
  );
};

export default StatusIndicator;
