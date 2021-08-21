/**
 * @description Compose new article page
 * @author ShadowCMS
 */

import React from "react";
import loadable from "@loadable/component";
import { useParams } from "react-router-dom";

const Compose: React.FC = () => {
  /* Init Document */
  const { id }: any = useParams();

  /* Dynamic Components */
  const Editor = loadable(() => import("../components/editor"), { ssr: false });

  /* Return */
  return (
    <React.Fragment>
      <Editor id={id} />
    </React.Fragment>
  );
};

export default Compose;
