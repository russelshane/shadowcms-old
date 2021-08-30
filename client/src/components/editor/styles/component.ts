/**
 * @description Other editor component styles written here
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

export const EditorOptions = styled.div({
  padding: 10,
  borderBottom: `1px solid ${COLORS.borders}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const EditorHeader = styled.div({
  margin: 0,
  display: "flex",
  flexDirection: "column",
  borderBottom: `1px solid ${COLORS.borders}`,
  padding: "80px",
});

export const EditorTimestamp = styled.span({
  margin: "30px 0 0 0",
  fontSize: "12.5px",
  letterSpacing: 0.25,
  fontWeight: 400,
  fontFamily: "Poppins, sans-serif",
  color: "#aaa",
  opacity: 0.85,
  userSelect: "none",
  cursor: "default",
  display: "block",
});

export const EditorWrapper = styled.div({
  margin: "0 0 0 20px",
  padding: 0,
  display: "none",
  flexDirection: "column",
  gridGap: "10px",

  "&.show": {
    display: "flex",
  },
});

export const EditorTop = styled.div({
  width: "890px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const EditorContainer = styled.div({
  margin: "40px 0 0 0",
});
