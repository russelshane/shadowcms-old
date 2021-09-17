/**
 * @description Editor Sidebar Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../../styles/global-colors";

export const EditorSidebarContainer = styled.div({
  width: 220,
  minHeight: 400,
  padding: 0,
  marginTop: 30,
  left: 80,
  float: "left",
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  gridGap: "8px",
});

export const SidebarNavLabel = styled.span({
  fontSize: 18,
  fontWeight: 600,
  fontFamily: "Poppins, sans-serif",
});

export const SidebarSeperator = styled.span({
  width: 35,
  height: 1,
  background: "#bbb",
  margin: "12px 0",
  userSelect: "none",
  cursor: "default",
});

export const SidebarNav = styled.div({
  display: "flex",
  alignItems: "center",
  gridGap: 8,
  cursor: "pointer",
  color: COLORS.foreground,
  transition: "0.05s ease-in-out",
  userSelect: "none",

  "&:hover": {
    opacity: 0.85,
  },
});

export const SidebarHeading = styled.span({
  fontSize: 13,
  fontFamily: "Poppins, sans-serif",
  color: COLORS.muted,
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

export const ProgressItem = styled.div({
  alignItems: "center",
  display: "flex",
  gridGap: 10,
});

export const ProgressLabel = styled.span({
  fontSize: 14,
  fontFamily: "Poppins, sans-serif",
  color: "#555",
  userSelect: "none",
  cursor: "default",
  marginBottom: "-1.25px",
});
