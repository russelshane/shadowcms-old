/**
 * @description Dashboard Page Component
 * @author ShadowCMS
 */

import React from "react";
import loadable from "@loadable/component";

/* Dynamic Components */
const Header = loadable(() => import("../components/header"));
const Layout = loadable(() => import("../ui/layout"));

const Dashboard: React.FC = () => {
  /* Return */
  return (
    <Layout page="Dashboard - Shadow">
      <Header />
    </Layout>
  );
};

export default Dashboard;
