/**
 * @description Styles for Master Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const MasterContainer = styled.div({
  margin: 0,
  padding: 0,
  minHeight: 20,
  width: "100%",
  background: COLORS.white,
  boxShadow: `0 1px 2px ${COLORS.shadow}`,
});
