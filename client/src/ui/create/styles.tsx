/**
 * @description Compose Article Button Styles
 * @author ShadowCMS
 */

import styled from "styled-components";

export const CreateButtonWrapper = styled.div({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999,
  width: 50,
  height: 50,
  borderRadius: 60,
  cursor: "pointer",
  background: "#fff",
  boxShadow: "0px 2px 3px #aaa",
  bottom: 30,
  right: 30,
  transition: "0.1s ease-in-out",

  "&:hover": {
    background: "#474d66",
    color: "#fff",
  },
});
