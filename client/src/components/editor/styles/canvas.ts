/**
 * @description Editor Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

export const EditorHolder = styled.div({
  margin: "0 auto",
  width: "100%",
  maxWidth: "860px",
  minHeight: "100vh",
  background: "#fff",
  border: `1px solid ${COLORS.borders}`,

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
    fontFamily: "'Noto Serif TC', Georgia, serif",
    fontSize: "2.25rem",
    color: COLORS.headline,
  },

  h2: {
    fontFamily: "'Noto Serif TC', Georgia, serif",
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
    marginLeft: "-1px",
    marginRight: "-1px",
    borderLeft: "1px solid #0D0D0D",
    borderRight: "1px solid #0D0D0D",
    wordBreak: "normal",
    pointerEvents: "none",
    opacity: 0.9,
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
    color: "#fff",
    padding: "0.1rem 0.3rem",
    borderRadius: "3px 3px 3px 0",
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
});

/* Editor Headline ContentEditable and Textarea (for editing) */
export const EditorHeadlineHolder = styled.div({
  fontFamily: "Bespoke Serif, sans-serif",
  display: "block",
  margin: "0 0 20px 0",
  fontWeight: 500,
  fontStyle: "italic",
  letterSpacing: "-0.85px",
  transform: "skew(-1deg)",
  fontSize: "2.85rem",
  lineHeight: "3.25rem",
  color: "#222",
  outline: "none",
  cursor: "pointer",

  "&[placeholder]:empty:before": {
    content: "attr(placeholder)",
    color: "#989898",
  },
});

export const EditorHeadlineTextarea = styled.textarea({
  fontFamily: "Bespoke Serif, sans-serif",
  fontWeight: 500,
  fontStyle: "italic",
  letterSpacing: "-0.85px",
  transform: "skew(-1deg)",
  fontSize: "2.5rem",
  color: "#222",
  outline: "none",
  cursor: "pointer",
  resize: "none",
  border: "none",

  "&[placeholder]:empty:before": {
    content: "attr(placeholder)",
    color: "#989898",
  },
});

/* Editor Summary ContentEditable and Textarea (for editing) */
export const EditorSummaryHolder = styled.div`
  display: block;
  font-size: 1.235rem;
  line-height: 1.8375rem;
  padding-right: 20px;
  font-family: "Gambetta", serif;
  color: #222;
  width: 100%;
  outline: none;
  cursor: pointer;
  border: none;
  margin-bottom: 30px;
  &[placeholder]:empty:before {
    content: attr(placeholder);
    color: #989898;
  }
  &.feature {
    text-align: center;
    &[placeholder]:empty:before {
      content: attr(placeholder);
      color: #989898;
      text-align: center;
    }
  }
`;

export const EditorSummaryTextarea = styled.textarea`
  display: block;
  font-size: 1.25rem;
  line-height: 1.9375rem;
  font-family: "Newsreader", serif;
  color: ${COLORS.subtext};
  width: 100%;
  outline: none;
  resize: none;
  cursor: pointer;
  border: none;
  &[placeholder]:empty:before {
    content: attr(placeholder);
    color: #989898;
  }
  &.feature {
    text-align: center;
  }
`;

export const EditorHeader = styled.div({
  margin: 0,
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${COLORS.borders}`,
  padding: "80px 90px",
});

export const EditorTimestamp = styled.div({
  margin: "30px 0 0 0",
  fontSize: "13px",
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
  color: COLORS.subtext,
  userSelect: "none",
  cursor: "default",
  display: "block",
});
