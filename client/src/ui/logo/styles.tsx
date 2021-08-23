/**
 * @description Logo UI Component Styles
 * @author ShadowCMS
 */

import styled from "styled-components";

export const LogoContainer = styled.div({
  width: 30,
  height: 30,
  margin: 0,
  padding: 0,
  cursor: "pointer",
  userSelect: "none",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundImage: "url(https://ik.imagekit.io/drs/shadowcms/favicon_kbWy-5k14M.svg)",

  "&:hover": {
    opacity: 0.85,
  },

  "&.withBackground": {
    backgroundImage:
      "url(https://ik.imagekit.io/drs/shadowcms/logo-main_si3w4ONK4Wv.png)",
  },
});
