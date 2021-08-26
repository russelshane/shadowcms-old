/**
 * @description Editor Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

export const EditorHolder = styled.div({
  margin: "0px auto 0 auto",
  width: "100%",
  maxWidth: "850px",
  minHeight: "100vh",
  background: "#fff",
  border: `1px solid ${COLORS.borders}`,
});

/* Editor Headline ContentEditable and Textarea (for editing) */
export const EditorHeadlineHolder = styled.div({
  fontFamily: "'Bespoke Serif', sans-serif",
  fontWeight: 500,
  fontStyle: "italic",
  letterSpacing: "-1.325px",
  fontSize: "2.5rem",
  lineHeight: "2.965rem",
  outline: "none",
  cursor: "pointer",
  resize: "none",
  border: "none",
  margin: "0 0 10px 0",

  "&[placeholder]:empty:before": {
    content: "attr(placeholder)",
    color: "#aaa",
  },

  ".headline-holder": {
    border: "none",
    outline: "none",
    color: "#333",

    "&[placeholder]:empty:before": {
      content: "attr(placeholder)",
      color: "#aaa",
    },
  },
});

/* Editor Summary ContentEditable and Textarea (for editing) */
export const EditorSummaryHolder = styled.textarea`
  display: block;
  font-size: 1.165rem;
  line-height: 1.8365rem;
  padding-right: 20px;
  letter-spacing: -0.35px;
  font-family: "Bespoke Serif", serif;
  color: #292929;
  width: 100%;
  height: 110px;
  outline: none;
  resize: none;
  cursor: pointer;
  border: none;

  &.feature {
    text-align: center;
  }
`;

export const EditorLabelHolder = styled.span({
  margin: "0 0 10px 0",
  fontSize: 13.5,
  fontWeight: 600,
  fontFamily: "Poppins, sans-serif",
  color: COLORS.foreground,
  userSelect: "none",
  cursor: "default",
});
