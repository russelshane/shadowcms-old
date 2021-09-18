/**
 * @description Styles for Global Container UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";

export const ContainerMain = styled.div({
  margin: 0,
  display: "flex",
  gridTemplateColumns: "auto auto auto auto",

  "@media screen and (max-width: 1500px)": {
    gridTemplateColumns: "auto auto",
  },
});
