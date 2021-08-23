/**
 * @description ProseMirror Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

export const EditorProseMirror = styled.div({
  padding: "80px",
  background: "#fff",
  width: "100%",
  minHeight: "80vh",

  p: {
    fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
    fontSize: "1.125rem",
    lineHeight: "1.785rem",
    color: "#333",
    marginBlockEnd: "1.5em",
  },

  a: {
    fontFamily: "'Newsreader', Georgia, 'Times New Roman', serif",
    fontSize: "1.125rem",
    lineHeight: "1.785rem",
    color: COLORS.primary,
    cursor: "pointer",
    borderBottom: `1px dotted ${COLORS.primary}`,
  },

  img: {
    width: "100%",
    boxSizing: "border-box",
  },

  h1: {
    fontFamily: "'Gambetta', Georgia, serif",
    fontSize: "2.25rem",
    color: COLORS.headline,
  },

  h2: {
    fontFamily: "'Gambetta', Georgia, serif",
    fontSize: "1.925rem",
    color: COLORS.headline,
  },

  pre: {
    borderRadius: "10px",
    background: "#333",
    border: "8px solid #333 !important",
  },

  code: {
    background: "#333",
    fontSize: "14px",
    padding: "10px",
    borderRadius: "5px",
    width: "100%",
    minHeight: 100,
    display: "block",
    color: COLORS.success,

    "&::before": {
      content: "Code",
    },
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

  ".mention": {
    color: "#A975FF",
    backgroundColor: "rgba(#A975FF, 0.1)",
    borderRadius: "0.3rem",
    padding: "0.1rem 0.3rem",
  },

  ".character-count": {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    color: "#68CEF8",

    "&--warning": {
      color: "#FB5151",
    },

    "&__graph": {
      marginRight: "0.5rem",
    },

    "&__text": {
      color: "#868e96",
    },
  },

  ".ProseMirror p.is-editor-empty:first-child::before": {
    content: "attr(data-placeholder)",
    float: "left",
    fontWeight: 200,
    fontFamily: "'Newsreader', serif",
    color: "#aaa",
    pointerEvents: "none",
    height: 0,
  },

  ".ProseMirror .is-empty::before": {
    content: "attr(data-placeholder)",
    float: "left",
    fontWeight: 200,
    fontFamily: "'Bespoke Serif', serif",
    letterSpacing: "0.25px",
    color: "#aaa",
    pointerEvents: "none",
    height: 0,
    opacity: 0.9,
  },

  ".seperator": {
    width: "123%",
    height: "1px",
    background: COLORS.borders,
    display: "flex",
    marginTop: "50px",
    marginBottom: "50px",
    marginLeft: "-80px",
    marginRight: "-80px",
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

  ".bubble-menu": {
    display: "flex",
    backgroundColor: "#0D0D0D",
    padding: "10px 12px",
    borderRadius: "4px",

    button: {
      border: "none",
      background: "none",
      color: "#fff",
      fontSize: "1rem",
      padding: "0 0.5rem",
      opacity: "0.6",
      cursor: "pointer",

      "&:hover, &.is-active": {
        opacity: 1,
      },
    },
  },

  ".headline": {
    background: "pink !important",
  },
});
