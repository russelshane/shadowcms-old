/**
 * @description Dashboard Page
 * @author ShadowCMS
 */

import React from "react";
import PageProps from "../types/initial";
import loadable from "@loadable/component";

/* Dynamic Components */
const Layout = loadable(() => import("../ui/layout"));
const Header = loadable(() => import("../components/header"));

const Dashboard: React.FC<PageProps> = () => {
  return (
    <Layout title="Dashboard - ShadowCMS">
      <Header />
      <h1>Dashboard</h1>
    </Layout>
  );
};

export default Dashboard;
