/**
 * @shadowcms/client, using render instead of ReactDOM.hydrate
 * to initialize main React application to the DOM
 *
 * @author ShadowCMS
 */

import React from "react";
import { render } from "react-dom";
import Application from "./application";

render(<Application />, document.getElementById("react-root"));
