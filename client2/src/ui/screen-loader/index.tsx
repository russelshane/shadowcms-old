/**
 * @description Screen Loader UI Component
 * @author ShadowCMS
 */

import React from "react";
import Container from "../container";
import { Spinner } from "evergreen-ui";

const ScreenLoader: React.FC = () => {
  return (
    <Container
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Spinner />
    </Container>
  );
};

export default ScreenLoader;
