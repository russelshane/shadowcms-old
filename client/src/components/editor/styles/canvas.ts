/**
 * @description Editor Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

export const EditorHolder = styled.div({
  margin: "40px auto 0 auto",
  width: "100%",
  maxWidth: "840px",
  minHeight: "100vh",
  background: "#fff",
  border: `1px solid ${COLORS.borders}`,
});

/* Editor Headline ContentEditable and Textarea (for editing) */
export const EditorHeadlineHolder = styled.div({
  fontFamily: "Bespoke Serif, sans-serif",
  display: "block",
  margin: "0 0 20px 0",
  fontWeight: 500,
  fontStyle: "italic",
  letterSpacing: "-0.985px",
  fontSize: "2.45rem",
  lineHeight: "2.85rem",
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
  lineHeight: "2.85rem",
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
export const EditorSummaryHolder = styled.textarea`
  display: block;
  font-size: 1.185rem;
  line-height: 1.8375rem;
  padding-right: 20px;
  letter-spacing: -0.35px;
  font-family: "Bespoke Serif", serif;
  color: #292929;
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
