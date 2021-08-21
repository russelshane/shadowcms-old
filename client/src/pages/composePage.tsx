/**
 * @description Compose new article page
 * @author ShadowCMS
 */

import React from "react";
import loadable from "@loadable/component";

const Compose: React.FC = () => {
  /* Dynamic Components */
  const Editor = loadable(() => import("../components/editor"));

  /* Return */
  return (
    <React.Fragment>
      <Editor />
    </React.Fragment>
  );
};

export default Compose;
