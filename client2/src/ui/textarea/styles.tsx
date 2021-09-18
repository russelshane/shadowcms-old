/**
 * @description Textarea UI Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const TextareaContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gridGap: 4,
});

export const TextareaField = styled.textarea({
  outline: "none",
  fontFamily: "Poppins, sans-serif",
  cusor: "pointer",
  resize: "none",
  border: `1px solid ${COLORS.borders}`,
  padding: 10,
  fontSize: 13,
  lineHeight: "20px",
  color: "#444",

  "&:focus": {
    border: `1px solid ${COLORS.primary}`,
  },

  "&:disabled": {
    background: "#ddd",
    border: "1px solid #bbb",
    color: "#777",
    userSelect: "none",
    cursor: "default",
  },
});

export const TextareaDescription = styled.span({
  fontSize: 12.5,
  fontFamily: "Poppins, sans-serif",
  color: "#666666",
  cursor: "default",
  userSelect: "none",
});

export const TextareaLabel = styled.span({
  fontSize: 13,
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
  color: "#111",
  cursor: "default",
  userSelect: "none",
});
