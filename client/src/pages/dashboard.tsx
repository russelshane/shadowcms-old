/**
 * @description Dashboard Page Component
 * @author ShadowCMS
 */

import React from "react";
import loadable from "@loadable/component";
import { MockUser } from "../constants/mocks/user";

/* Dynamic Components */
const Header = loadable(() => import("../components/header"));
const Layout = loadable(() => import("../ui/layout"));
const CreateButton = loadable(() => import("../ui/create"));

const Dashboard: React.FC = () => {
  /* Return */
  return (
    <Layout page="Dashboard - Shadow">
      <CreateButton />
      <Header user={MockUser} />
    </Layout>
  );
};

export default Dashboard;
