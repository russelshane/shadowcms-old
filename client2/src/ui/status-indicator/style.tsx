/**
 * @description Styles for Status Indicator UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const SIContainer = styled.div({
  margin: 0,
  padding: 0,
  gridGap: "10px",
  display: "flex",
  alignItems: "center",
});

export const SILabel = styled.span({
  fontSize: "12px",
  lineHeight: "12px",
  cursor: "default",
  userSelect: "none",
  fontFamily: "Poppins, sans-serif",
  color: COLORS.default,
});

export const SIStatus = styled.span({
  height: 4,
  width: 4,
  borderRadius: 5,
  background: COLORS.primary,

  "&.primary": {
    background: COLORS.primary,
  },

  "&.danger": {
    background: COLORS.danger,
  },

  "&.warning": {
    background: COLORS.warning,
  },

  "&.success": {
    background: COLORS.success,
  },
});
