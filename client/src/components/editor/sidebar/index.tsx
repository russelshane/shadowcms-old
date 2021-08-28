/**
 * @description Editor Sidebar Component
 * @author ShadowCMS
 */

import React from "react";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import { EditorSidebarProps } from "./types";
import { ManualIcon, ManuallyEnteredDataIcon } from "evergreen-ui";
import {
  SidebarLabel,
  EditorSidebarContainer,
  SidebarHeading,
  SidebarNav,
  SidebarNavLabel,
} from "./styles";

const EditorSidebar: React.FC<EditorSidebarProps> = ({ words, articleState }) => {
  /* Last Updated */
  const lastUpdated = articleState?.lastUpdated;
  dayjs.extend(RelativeTime);

  /* Return */
  return (
    <EditorSidebarContainer>
      <SidebarHeading>ARTICLE</SidebarHeading>
      <SidebarNav>
        <ManuallyEnteredDataIcon />
        <SidebarNavLabel>Metadata</SidebarNavLabel>
      </SidebarNav>
      <SidebarNav>
        <ManualIcon />
        <SidebarNavLabel>Body</SidebarNavLabel>
      </SidebarNav>
      <SidebarLabel style={{ color: "#777" }}>Updated {dayjs(lastUpdated).fromNow()}</SidebarLabel>
      <SidebarLabel>
        {words} {words !== 1 ? "words" : "word"}
      </SidebarLabel>
      <br />
      <SidebarHeading>PROGRESS</SidebarHeading>
    </EditorSidebarContainer>
  );
};

export default EditorSidebar;
