/**
 * @description Global Styles
 * @author ShadowCMS
 */

import { createGlobalStyle } from "styled-components";
import COLORS from "./global-colors";

const GlobalStyles = createGlobalStyle({
  "html, body": {
    margin: 0,
    padding: 0,
    background: COLORS.background,
    color: COLORS.foreground,
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  },

  "*": {
    margin: 0,
    boxSizing: "border-box",
  },

  a: {
    textDecoration: "none",
    color: "inherit",
  },
});

export default GlobalStyles;
