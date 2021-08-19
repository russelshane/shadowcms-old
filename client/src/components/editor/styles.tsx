/**
 * @description Editor Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/globalColors";

export const EditorHolder = styled.div({
  margin: "0 auto",
  padding: "80px 90px",
  width: "100%",
  maxWidth: "860px",
  minHeight: "100vh",
  background: "#fff",
  border: `1px solid ${COLORS.borders}`,

  ".editable": {
    ".css-123": {
      marginBlockEnd: "0.5em",
      marginBlockStart: " 0.5em",
    },

    p: {
      fontFamily: "'Bespoke Serif', Georgia, 'Times New Roman', serif",
      fontSize: "1.125rem",
      lineHeight: "1.8375rem",
      color: "#333",
    },
  },
});

export const EditorAdd = styled.div({
  borderRadius: "50px",
  border: `1px solid ${COLORS.borders}`,
  marginLeft: "-65px",
  marginTop: "-45px",
  zIndex: 9999,
  width: "45px",
  height: "45px",
  background: "#fff",
  display: "none",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  transition: "0.1s ease-in-out",

  "&.show": {
    display: "flex",
  },

  ".icon": {
    color: "#aaa",
    transition: "0.1s ease-in-out",
  },

  "&:hover": {
    border: `1px solid #555555`,

    ".icon": {
      color: "#555555",
    },
  },
});

export const EditorMenu = styled.div({
  width: "300px",
  boxSizing: "border-box",
  height: "200px",
  marginTop: "150px",
  marginRight: "-370px",
  padding: "10px",
  background: COLORS.background,
  boxShadow: "0 1px 2px #ccc",
  position: "absolute",
  fontSize: "14px",
  display: "none",

  "&.show": {
    display: "block",
  },
});
