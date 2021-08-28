/**
 * @description Editor Sidebar Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

export const EditorSidebarContainer = styled.div({
  width: 220,
  minHeight: 400,
  padding: 0,
  marginTop: 30,
  left: 25,
  float: "left",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gridGap: "8px",
});

export const SidebarNavLabel = styled.span({
  fontSize: 16,
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
});

export const SidebarNav = styled.div({
  display: "flex",
  alignItems: "center",
  gridGap: 8,
  cursor: "pointer",
  color: COLORS.foreground,
  transition: "0.1s ease-in-out",
  userSelect: "none",

  "&:hover": {
    color: COLORS.subtext,
  },
});

export const SidebarHeading = styled.span({
  fontSize: 13,
  fontFamily: "Poppins, sans-serif",
  color: COLORS.subtext,
  cursor: "default",
  userSelect: "none",
});

export const SidebarLabel = styled.span({
  fontSize: 12,
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
  color: COLORS.foreground,
  userSelect: "none",
  cursor: "default",
});
