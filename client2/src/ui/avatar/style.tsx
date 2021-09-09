/**
 * @description Styles for Avatar UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";
import COLORS from "../../styles/global-colors";

export const AvatarContainer = styled.div({
  width: 32,
  height: 32,
  borderRadius: 32,
  background: COLORS.foreground,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  border: `2px solid ${COLORS.borders}`,
  cursor: "pointer",
});
