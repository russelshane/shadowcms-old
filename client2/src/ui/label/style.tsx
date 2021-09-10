/**
 * @description Styles for Global Label UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const LabelContainer = styled.span({
  fontSize: 12,
  fontFamily: "Poppins, sans-serif",
  color: COLORS.foreground,
  userSelect: "none",
});
