/**
 * @description Styles for Shadow Compose
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/global-colors";

export const EditorWrapper = styled.div({
  padding: 0,
  margin: "0 auto",
  width: "860px",

  "&.hide": {
    display: "none",
  },
});

export const EditorMain = styled.div({
  width: "100%",
  background: COLORS.white,
  minHeight: "100vh",
  boxShadow: `0px 1px 2px ${COLORS.shadow}`,
});

export const EditorTop = styled.div({
  padding: "80px 90px",
  borderBottom: `1px solid ${COLORS.borders}`,
  display: "flex",
  flexDirection: "column",
  gridGap: "24px",
  justifyContent: "center",
});

export const EditorTimestamp = styled.span({
  marginTop: "40px",
  fontSize: "13px",
  fontWeight: 500,
  lineHeight: "13px",
  fontFamily: "Poppins, sans-serif",
  color: COLORS.primary,
  userSelect: "none",
  cursor: "default",
});

export const EditorHeadline = styled.div({
  margin: 0,

  p: {
    outline: "none",
    fontWeight: 500,
    fontSize: "2.465rem",
    lineHeight: "2.965rem",
    letterSpacing: "-1px",
    fontStyle: "italic",
    fontFamily: "'Bespoke Serif', serif",
    color: "#333",
  },

  ".collaboration-cursor__caret": {
    position: "relative",
    marginLeft: "-2px",
    marginRight: "-1px",
    borderLeft: "1px solid #0D0D0D",
    borderRight: "2px solid #0D0D0D",
    wordBreak: "normal",
    pointerEvents: "none",
    opacity: 1,
  },

  /* Render the username above the caret */
  ".collaboration-cursor__label": {
    position: "absolute",
    top: "-1.4em",
    left: "-1px",
    fontSize: "15px",
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    userSelect: "none",
    color: "#f8f8f8",
    padding: "0.1rem 0.35rem",
    borderRadius: "3px 3px 3px 0",
    textShadow: "0.5px 1px 1.5px #111",
    whiteSpace: "nowrap",
  },

  ".ProseMirror": {
    outline: "none",

    "> * + *": {
      marginTop: "0.75em",
    },

    "ul, ol": {
      padding: "0 1rem",
    },
  },

  ".ProseMirror .is-empty::before": {
    content: "attr(data-placeholder)",
    float: "left",
    fontWeight: 500,
    fontFamily: "'Bespoke Serif', serif",
    outline: "none",
    color: "#aaa",
    pointerEvents: "none",
    height: 0,
  },
});

export const EditorSummary = styled.div({
  margin: 0,

  p: {
    outline: "none",
    fontWeight: 500,
    fontSize: "1.3rem",
    lineHeight: "1.985rem",
    fontFamily: "'Rowan', serif",
    color: COLORS.foreground,
  },

  ".collaboration-cursor__caret": {
    position: "relative",
    marginLeft: "-2px",
    marginRight: "-1px",
    borderLeft: "1px solid #0D0D0D",
    borderRight: "2px solid #0D0D0D",
    wordBreak: "normal",
    pointerEvents: "none",
    opacity: 1,
  },

  /* Render the username above the caret */
  ".collaboration-cursor__label": {
    position: "absolute",
    top: "-1.4em",
    left: "-1px",
    fontSize: "15px",
    fontFamily: "Poppins, sans-serif",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    userSelect: "none",
    color: "#f8f8f8",
    padding: "0.1rem 0.35rem",
    borderRadius: "3px 3px 3px 0",
    textShadow: "0.5px 1px 1.5px #111",
    whiteSpace: "nowrap",
  },

  ".ProseMirror": {
    outline: "none",

    "> * + *": {
      marginTop: "0.75em",
    },

    "ul, ol": {
      padding: "0 1rem",
    },
  },

  ".ProseMirror .is-empty::before": {
    content: "attr(data-placeholder)",
    float: "left",
    fontWeight: 400,
    fontFamily: "'Rowan', serif",
    outline: "none",
    color: "#aaa",
    pointerEvents: "none",
    height: 0,
  },
});
