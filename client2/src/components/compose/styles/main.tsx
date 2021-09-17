/**
 * @description Styles for Shadow Compose
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../../styles/global-colors";

export const EditorWrapper = styled.div({
  padding: 0,
  margin: "0 auto",
  width: "900px",
  minHeight: "100vh",
  background: COLORS.white,
  boxShadow: `0px 1px 2px ${COLORS.shadow}`,
});
