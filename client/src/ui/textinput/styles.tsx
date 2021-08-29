/**
 * @description Text Input UI Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/globalColors";

export const TextInputContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gridGap: 4,
});

export const TextInputField = styled.input({
  outline: "none",
  fontFamily: "Poppins, sans-serif",
  cusor: "pointer",
  border: `1px solid ${COLORS.borders}`,
  padding: 10,
  fontSize: 13,
  color: COLORS.foreground,

  "&:focus": {
    border: `1px solid ${COLORS.primary}`,
  },
});

export const TextInputDescription = styled.span({
  fontSize: 12.5,
  fontFamily: "Poppins, sans-serif",
  color: "#666666",
  cursor: "default",
  userSelect: "none",
});

export const TextInputLabel = styled.span({
  fontSize: 13,
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
  color: "#111",
  cursor: "default",
  userSelect: "none",
});
