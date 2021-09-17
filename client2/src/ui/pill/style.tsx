/**
 * @description Styles for Pill UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const PillContainer = styled.div({
  padding: "8px 10px",
  background: COLORS.primary,
  borderRadius: "20px",
  width: "120px",
  position: "relative",
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  cursor: "default",
  alignSelf: "flex-start",
  display: "flex",

  "&.danger": {
    background: COLORS.danger,
  },

  "&.warning": {
    background: COLORS.warning,
  },

  "&.success": {
    background: COLORS.success,
  },

  "&.primary": {
    background: COLORS.primary,
  },
});

export const PillLabel = styled.span({
  fontSize: "12px",
  lineHeight: "10px",
  fontFamily: "Poppins, sans-serif",
  fontWeight: 400,
  color: COLORS.white,
  userSelect: "none",
  cursor: "default",
});
