/**
 * @description Master Component
 * @author ShadowCMS
 */

import React from "react";
import Container from "../../ui/container";
import Label from "../../ui/label";
import { MasterContainer } from "./style";
import { MasterProps } from "./types";

const Master: React.FC<MasterProps> = ({ children, label }) => {
  return (
    <Container width="85%" margin="80px auto" padding="10px 0 0 225px" flexDirection="column">
      <Label fontSize={13.5} fontWeight={500} margin="0 0 10px 0">
        {label}
      </Label>
      <MasterContainer>{children}</MasterContainer>
    </Container>
  );
};

export default Master;
