/**
 * @description Dashboard Page Component
 * @author ShadowCMS
 */

import React from "react";
import Layout from "../ui/layout";
import Header from "../components/header";
import CreateButton from "../ui/create";
import { MockUser } from "../constants/mocks/user";

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
