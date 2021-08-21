import styled from "styled-components";
import COLORS from "../../../styles/globalColors";

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
