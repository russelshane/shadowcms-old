/**
 * @description Sections Library Page
 * @author ShadowCMS
 */

import React, { useState } from "react";
import loadable from "@loadable/component";

const Layout = loadable(() => import("../../ui/layout"));
const Header = loadable(() => import("../../components/header"));
const Sidebar = loadable(() => import("../../components/sidebar"));
const Master = loadable(() => import("../../components/master"));
const Container = loadable(() => import("../../ui/container"));

const SectionsLibrary: React.FC = () => {
  /**
   * Interactive State
   */
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <Layout title="Sections Library - Shadow">
      <Header setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
      <Sidebar active={sidebarActive} />

      <Container margin="90px 0 0 0" display="block">
        <Master label="NEWSROOM SECTIONS" sidebarActive={sidebarActive}></Master>
      </Container>
    </Layout>
  );
};

export default SectionsLibrary;
