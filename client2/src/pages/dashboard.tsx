/**
 * @description Dashboard Page
 * @author ShadowCMS
 */

import React, { useState } from "react";
import PageProps from "../types/initial";
import loadable from "@loadable/component";

/* Dynamic Components */
const Layout = loadable(() => import("../ui/layout"));
const Header = loadable(() => import("../components/header"));
const Sidebar = loadable(() => import("../components/sidebar"));

const Dashboard: React.FC<PageProps> = () => {
  /**
   * Interactive State
   */
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <Layout title="Dashboard - ShadowCMS">
      <Header setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
      <Sidebar active={sidebarActive} />
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
