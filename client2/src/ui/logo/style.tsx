/**
 * @description Styles for Logo UI Component
 * @author ShadowCMS
 */

import styled from "styled-components";

export const LogoContainer = styled.div({
  width: 30,
  height: 30,
  backgroundImage: "url(https://ik.imagekit.io/drs/shadowcms/logo-transparent_rFd1qYb3H.svg)",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  cursor: "pointer",

  "&:hover": {
    opacity: 0.85,
  },

  "&.md": {
    width: 50,
    height: 50,
  },

  "&.lg": {
    width: 80,
    height: 80,
  },
});
