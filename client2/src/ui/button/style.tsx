/**
 * @description Styles for Button UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const ButtonContainer = styled.div({
  padding: "5px 8px",
  cursor: "pointer",
  fontFamily: "Poppins, sans-serif",
  outline: "none",
  display: "flex",
  alignItems: "center",
  gridGap: "10px",
  background: COLORS.primary,
  border: `1.5px solid ${COLORS.primary}`,
  color: COLORS.white,
  borderRadius: 3,

  "&.ghost": {
    background: "none",
    border: "none",
    color: COLORS.foreground,
  },

  "&.primary": {
    background: COLORS.primary,
    border: `1.5px solid ${COLORS.primary}`,
    color: COLORS.white,
  },

  "&.danger": {
    background: COLORS.danger,
    border: `1.5px solid ${COLORS.danger}`,
  },

  "&.sm": {
    padding: "5px 8px",
  },

  "&.md": {
    padding: "8px 8px",
  },

  "&.lg": {
    padding: "10px 12px",
  },

  "&:hover": {
    opacity: 0.9,
  },
});
