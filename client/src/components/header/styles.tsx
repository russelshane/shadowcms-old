/**
 * @description Main Header Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/globalColors";

export const HeaderWrapper = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 20,
  margin: 0,
  gridGap: 10,
});

export const UserAvatar = styled.div({
  width: 30,
  height: 30,
  borderRadius: 30,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  cursor: "pointer",
});

export const UserEmail = styled.span({
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
