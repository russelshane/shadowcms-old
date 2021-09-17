/**
 * @description Editor Page
 * @author ShadowCMS
 */

import * as Y from "yjs";
import React, { useState } from "react";
import PageProps from "../types/initial";
import loadable from "@loadable/component";
import mockUser from "../mocks/user";
import { useParams } from "react-router";
import { WebsocketProvider } from "y-websocket";

/* Dynamic Components */
const Layout = loadable(() => import("../ui/layout"));
const Header = loadable(() => import("../components/header"));
const Sidebar = loadable(() => import("../components/sidebar"));
const Compose = loadable(() => import("../components/compose"));

const Editor: React.FC<PageProps> = () => {
  /**
   * Interactive State
   */
  const [sidebarActive, setSidebarActive] = useState(false);
  const { id }: any = useParams();

  /**
   * Initialize new WebRTC provider with room name of the
   * new document ID.
   */
  const document: Y.Doc = new Y.Doc();
  const provider = new WebsocketProvider("wss://shadow-websockets.herokuapp.com", id, document);

  console.log(`Editor activated for article: ${id}`);

  return (
    <Layout title="Dashboard - Shadow">
      <Header setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
      <Sidebar active={sidebarActive} />
      <Compose doc={document} provider={provider} id={id} user={mockUser} />
    </Layout>
  );
};

export default Editor;
