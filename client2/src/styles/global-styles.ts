/**
 * @description Global Styles
 * @author ShadowCMS
 */

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle({
  "html, body": {
    margin: 0,
    padding: 0,
    background: "#FFFFFF",
    boxSizing: "border-box",
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
