/**
 * @description Application Global Styles
 * @author ShadowCMS
 */

import { createGlobalStyle } from "styled-components";
import COLORS from "./globalColors";

const GlobalStyles = createGlobalStyle({
  html: {
    margin: 0,
    padding: 0,
    background: COLORS.background,
    color: COLORS.foreground,
    fontFamily: "Poppins, sans-serif",
  },

  "*": {
    boxSizing: "border-box",
    margin: 0,
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },
});

export default GlobalStyles;
