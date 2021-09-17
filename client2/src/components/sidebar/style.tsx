/**
 * @description Styles for Sidebar Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const SidebarContainer = styled.div({
  margin: 0,
  left: "-300px",
  top: 0,
  padding: 10,
  paddingTop: 80,
  width: 230,
  background: "#F9FAFC",
  height: "100%",
  position: "fixed",
  display: "flex",
  gridGap: "12px",
  flexDirection: "column",
  boxShadow: `0px 2px 8px rgb(0,0,0,0.1)`,
  transition: "0.2s ease-in-out",
  overflowY: "scroll",

  "&.active": {
    left: 0,
  },
});

export const SidebarItem = styled.div({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: 10,
  gridGap: 12,
  margin: 0,
  borderRadius: 2,

  "&:hover": {
    background: "rgb(0,0,0,0.1)",
  },
});

export const SidebarSeperator = styled.span({
  width: "90%",
  height: 1,
  background: COLORS.shadow,
  opacity: 0.6,
  margin: "5px auto",
});

export const SidebarIcon = styled.div({
  width: 25,
  height: 25,
  color: COLORS.foreground,
  opacity: 0.85,
});
