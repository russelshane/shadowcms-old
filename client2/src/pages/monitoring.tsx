/**
 * @description Monitoring Page
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

const Monitoring: React.FC<PageProps> = () => {
  /**
   * Interactive State
   */
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <Layout title="Monitoring - Shadow">
      <Header setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
      <Sidebar active={sidebarActive} />

      {/**
       * @description Articles currently in-progress
       */}
      <Master label="IN-PROGRESS" sidebarActive={sidebarActive}>
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

      {/**
       * @description Articles that need editing
       */}
      <Master label="NEEDS EDITING" sidebarActive={sidebarActive}>
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

      {/**
       * @description Articles that need review
       */}
      <Master label="NEEDS REVIEW" sidebarActive={sidebarActive}>
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

export default Monitoring;
