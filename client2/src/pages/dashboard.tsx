/**
 * @description Dashboard Page
 * @author ShadowCMS
 */

import React, { useState } from "react";
import PageProps from "../types/initial";
import loadable from "@loadable/component";
import mockIncoming from "../mocks/incoming";
import IncomingItem from "../ui/incoming-item";

/* Dynamic Components */
const Layout = loadable(() => import("../ui/layout"));
const Header = loadable(() => import("../components/header"));
const Sidebar = loadable(() => import("../components/sidebar"));
const Master = loadable(() => import("../components/master"));

const Dashboard: React.FC<PageProps> = () => {
  /**
   * Interactive State
   */
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <Layout title="Dashboard - Shadow">
      <Header setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
      <Sidebar active={sidebarActive} />

      {/**
       * @description Status checks, number of incoming, needs-editing, needs-review,
       * and for published articles on the dashboard page.
       */}
      <Master label="DASHBOARD"></Master>

      {/**
       * @description List published articles on secondary master component
       * on the dashboard page
       */}
      <Master label="PUBLISHED">
        {mockIncoming.map((val, index) => (
          <IncomingItem
            key={index}
            slug={val.slug}
            publish_url={val.publish_url}
            timestamp={val.timestamp}
            section_name={val.section_name}
            headline={val.headline}
            summary={val.summary}
            status={val.status}
            byline={val.byline}
            thumb={val.thumb}
          />
        ))}
      </Master>
    </Layout>
  );
};

export default Dashboard;
