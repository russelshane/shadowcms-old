/**
 * @description Client Frontend
 * @author ShadowCMS
 */

import { hydrate } from "react-dom";
import React from "react";
import Application from "./application";

hydrate(
  <React.Fragment>
    <Application />
  </React.Fragment>,
  document.getElementById("react-root"),
);
