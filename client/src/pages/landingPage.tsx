/**
 * @description Client Landing / Authentication Page
 * @author ShadowCMS
 */

import React from "react";
import loadable from "@loadable/component";

const Landing: React.FC = () => {
  /* Dynamic Components */
  const Editor = loadable(() => import("../components/editor"));

  /* Return */
  return (
    <React.Fragment>
      <h1>landing</h1>
      <Editor />
    </React.Fragment>
  );
};

export default Landing;
