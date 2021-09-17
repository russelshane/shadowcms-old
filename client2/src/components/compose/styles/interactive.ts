import styled from "styled-components";
import COLORS from "../../../styles/global-colors";

export const EditorAdd = styled.div({
  width: "40px",
  height: "40px",
  marginTop: "-4.5px",
  marginLeft: "-68px",
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

  ".menuSeperator": {
    width: "88%",
    height: "1px",
    background: "#ccc",
    display: "block",
    userSelect: "none",
    cursor: "default",
    margin: "10px 12px",
  },
});
