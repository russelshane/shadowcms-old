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
  borderRadius: 2,

  "&.ghost": {
    background: "none",
    border: "none",
    color: COLORS.foreground,
  },

  "&.outline": {
    background: "transparent",
    border: `1.5px solid ${COLORS.primary}`,
    color: COLORS.primary,
  },

  "&.primary": {
    background: COLORS.primary,
    border: `1.5px solid ${COLORS.primary}`,
    color: COLORS.white,
  },

  "&:hover": {
    opacity: 0.9,
  },
});
