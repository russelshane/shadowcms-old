/**
 * @description Navigation Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/globalColors";

export const NavigationWrapper = styled.nav({
  margin: 0,
  display: "flex",
  alignItems: "center",
  gridGap: 18,
  background: "none",
  marginLeft: "20px",

  "&.row": {
    flexDirection: "row",
  },

  "&.column": {
    flexDirection: "column",
  },
});

export const NavItem = styled.span({
  display: "block",
  fontSize: 13,
  fontWeight: 500,
  color: COLORS.foreground,
  fontFamily: "Poppins, sans-serif",
  cursor: "pointer",
  userSelect: "none",

  "&:hover": {
    opacity: 0.9,
  },
});
