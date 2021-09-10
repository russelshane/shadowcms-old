/**
 * @description Styles for Header Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const HeaderContainer = styled.div({
  margin: 0,
  padding: "12px 15px",
  background: COLORS.black,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  boxShadow: `2px 4px 4px ${COLORS.shadow}`,
});
