/**
 * @description Compose new article page
 * @author ShadowCMS
 */

import * as Y from "yjs";
import React from "react";
import loadable from "@loadable/component";
import { useParams } from "react-router-dom";
import { Doc } from "yjs";
import { WebsocketProvider } from "y-websocket";

const Compose: React.FC = () => {
  /**
   * Initialize new WebRTC provider with room name of the
   * new document ID.
   */
  const { id }: any = useParams();
  const document: Doc = new Y.Doc();
  const provider = new WebsocketProvider("wss://websocket.tiptap.dev", id, document);

  /* Dynamic Components */
  const Layout = loadable(() => import("../ui/layout"));
  const Header = loadable(() => import("../components/header"));
  const Editor = loadable(() => import("../components/editor"));

  /* Return */
  return (
    <Layout page={`Editing ${id} - Shadow`}>
      <Header />
      <Editor id={id} doc={document} provider={provider} />
    </Layout>
  );
};

export default Compose;
