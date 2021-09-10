/**
 * @description Styles for Dropdown UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const DropdownContainer = styled.div({
  position: "absolute",
  background: COLORS.white,
  boxShadow: `0px 1px 2px ${COLORS.shadow}`,
  zIndex: 9,
  padding: 10,
  marginTop: 35,
  minWidth: 180,
  maxWidth: 400,
  minHeight: 50,
  borderRadius: 2,
  display: "none",
  flexDirection: "column",
  gridGap: "5px",

  "&.active": {
    display: "flex",
  },
});

export const DropdownItem = styled.div({
  display: "flex",
  gridGap: "10px",
  alignItems: "center",
  cursor: "pointer",
  padding: "8px",
  borderRadius: 3,

  "&:hover": {
    background: COLORS.hover,
  },
});

export const DropdownIcon = styled.div({
  width: 18,
  height: 18,
  objectFit: "contain",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: COLORS.default,
});

export const DropdownLabel = styled.span({
  fontSize: 13,
  fontWeight: 500,
  fontFamily: "Poppins, sans-serif",
  color: COLORS.default,
  userSelect: "none",
});
