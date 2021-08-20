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

export const EditorAdd = styled.div({
  width: "40px",
  height: "40px",
  marginTop: "-2.5px",
  marginLeft: "-75px",
  borderRadius: "40px",
  border: `1px solid ${COLORS.primary}`,
  color: COLORS.primary,
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const EditorMenu = styled.div({
  width: "200px",
  boxSizing: "border-box",
  marginTop: "-2px",
  marginLeft: "-20px",
  position: "absolute",
  background: "#fff",
  padding: "0px",
  border: `1.5px solid ${COLORS.borders}`,
  boxShadow: "0 2px 3px #bbb",
  fontSize: "14px",
  display: "none",
  flexDirection: "column",

  button: {
    padding: "12px",
    display: "flex",
    gridGap: "20px",
    alignItems: "center",
    border: "none",
    background: "transparent",
    borderBottom: `1px solid ${COLORS.borders}`,
    color: "#444",
    cursor: "pointer",

    "&:last-child": {
      borderBottom: "0px !important",
    },

    "&:hover": {
      background: COLORS.background,
    },
  },

  "&.show": {
    display: "grid",
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
  fontSize: "2.25rem",
  lineHeight: "2.925rem",
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

// export const EditorTimestamp = styled.span`
//   margin: 30px 0 0 0;
//   font-size: 14px;
//   font-family: Khula, sans-serif;
//   color: ${globalColors.gray100};
//   user-select: none;
//   cursor: default;
//   display: block;

//   &.feature {
//     text-align: center;
//   }
// `;
