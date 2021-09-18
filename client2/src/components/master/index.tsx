/**
 * @description Master Component
 * @author ShadowCMS
 */

import React from "react";
import Container from "../../ui/container";
import Label from "../../ui/label";
import { MasterContainer } from "./style";
import { MasterProps } from "./types";

const Master: React.FC<MasterProps> = ({ children, label, sidebarActive }) => {
  return (
    <Container
      width="90%"
      margin="30px auto 0 auto"
      padding={`10px 0 0 ${sidebarActive ? "190px" : "0"}`}
      flexDirection="column"
    >
      <Label fontSize={14} fontWeight={500} margin="0 0 10px 0">
        {label}
      </Label>
      <MasterContainer>{children}</MasterContainer>
    </Container>
  );
};

export default Master;
