/**
 * @description Dashboard Page
 * @author ShadowCMS
 */

import React, { useState } from "react";
import PageProps from "../types/initial";
import loadable from "@loadable/component";
import mockIncoming from "../mocks/incoming";
import IncomingItem from "../ui/incoming-item";
import dayjs from "dayjs";
import { ClipboardCheckIcon, EyeIcon, MailIcon, PencilIcon } from "@heroicons/react/outline";
import { firestore } from "../services/firebase";
import { NewsModel } from "../models/news-model";
import { customAlphabet } from "nanoid";
import { useHistory } from "react-router-dom";
import mockUser from "../mocks/user";
import { Image } from "evergreen-ui";

/* Dynamic Components */
const Layout = loadable(() => import("../ui/layout"));
const Header = loadable(() => import("../components/header"));
const Sidebar = loadable(() => import("../components/sidebar"));
const Master = loadable(() => import("../components/master"));
const Container = loadable(() => import("../ui/container"));
const Label = loadable(() => import("../ui/label"));
const Button = loadable(() => import("../ui/button"));

const Dashboard: React.FC<PageProps> = () => {
  /**
   * Interactive State
   */
  const history = useHistory();
  const [sidebarActive, setSidebarActive] = useState(true);

  /**
   * Function to create a new news article
   */
  const nanoid = customAlphabet("0987654321", 12);
  const newId = nanoid();
  const createArticle = async () => {
    await firestore
      .collection("articles")
      .doc(`shadow_${newId}`)
      .set({
        id: `shadow_${newId}`,
        lastUpdated: dayjs().format("YYYY-MM-DDTHH:mm:ss"),
        interactiveState: {
          saving: null,
        },
        doc: {
          ...NewsModel.doc,
        },
      });

    history.push(`/doc/shadow_${newId}/web/editing`);
  };

  return (
    <Layout title="Dashboard - Shadow">
      <Header setSidebarActive={setSidebarActive} sidebarActive={sidebarActive} />
      <Sidebar active={sidebarActive} />

      {/**
       * @description Status checks, number of incoming, needs-editing, needs-review,
       * and for published articles on the dashboard page.
       */}
      <Container margin="90px 0 0 0" display="block">
        <Master label="DASHBOARD" sidebarActive={sidebarActive}>
          <Container width="100%" height="100%" padding="20px" flexDirection="column" gridGap="5px">
            <Container gridGap="20px" alignItems="center">
              <Image src={mockUser.image} width="50px" borderRadius="50px" />
              <Label fontSize={25}>Welcome, {mockUser.byline}!</Label>
            </Container>
            <Container width="100%" justifyContent="space-between" alignItems="center">
              <Label fontSize={14}>Have fun on your {dayjs().format("dddd")} briefing!</Label>
              <Container gridGap="10px">
                <Button icon={<ClipboardCheckIcon />}>Your Tasks</Button>
                <Button icon={<MailIcon />}>Check Mailbox</Button>
                <Button icon={<EyeIcon />}>View Monitoring</Button>
                <Button onClick={createArticle} icon={<PencilIcon />}>
                  Write an article
                </Button>
              </Container>
            </Container>
          </Container>
        </Master>

        {/**
         * @description List published articles on secondary master component
         * on the dashboard page
         */}
        <Master label="PUBLISHED" sidebarActive={sidebarActive}>
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
      </Container>
    </Layout>
  );
};

export default Dashboard;
