/**
 * @description Client Frontend
 * @author ShadowCMS
 */

import { render } from "react-dom";
import React from "react";
import Application from "./application";

render(
  <React.Fragment>
    <Application />
  </React.Fragment>,
  document.getElementById("react-root"),
);
