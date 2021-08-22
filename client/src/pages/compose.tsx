/**
 * @description Compose new article page
 * @author ShadowCMS
 */

import * as Y from "yjs";
import React from "react";
import loadable from "@loadable/component";
import { useParams } from "react-router-dom";
import { WebrtcProvider } from "y-webrtc";
import { Doc } from "yjs";

const Compose: React.FC = () => {
  /* Init Document */
  const { id }: any = useParams();

  /* Dynamic Components */
  const document: Doc = new Y.Doc();
  const provider: WebrtcProvider = new WebrtcProvider(`${id}`, document);
  const Editor = loadable(() => import("../components/editor"));

  /* Return */
  return (
    <React.Fragment>
      <Editor id={id} doc={document} provider={provider} />
    </React.Fragment>
  );
};

export default Compose;
