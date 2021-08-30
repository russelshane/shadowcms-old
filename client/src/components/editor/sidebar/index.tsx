/**
 * @description Editor Sidebar Component
 * @author ShadowCMS
 */

import React from "react";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import COLORS from "../../../styles/globalColors";
import { EditorSidebarProps } from "./types";
import {
  HighPriorityIcon,
  ManualIcon,
  ManuallyEnteredDataIcon,
  TickIcon,
  WarningSignIcon,
} from "evergreen-ui";
import {
  SidebarLabel,
  EditorSidebarContainer,
  SidebarHeading,
  SidebarNav,
  SidebarNavLabel,
  ProgressItem,
  ProgressLabel,
} from "./styles";

const EditorSidebar: React.FC<EditorSidebarProps> = ({ words, articleState, setBodyPanel }) => {
  /* Last Updated */
  const lastUpdated = articleState?.lastUpdated;
  dayjs.extend(RelativeTime);

  /* Interactive State */

  /* Return */
  return (
    <EditorSidebarContainer>
      <SidebarHeading>MAIN</SidebarHeading>
      <SidebarNav onClick={() => setBodyPanel(false)}>
        <ManuallyEnteredDataIcon />
        <SidebarNavLabel>Metadata</SidebarNavLabel>
      </SidebarNav>
      <SidebarNav onClick={() => setBodyPanel(true)}>
        <ManualIcon />
        <SidebarNavLabel>Body</SidebarNavLabel>
      </SidebarNav>
      <SidebarLabel style={{ color: "#777" }}>Updated {dayjs(lastUpdated).fromNow()}</SidebarLabel>
      <SidebarLabel>
        {words} {words !== 1 ? "words" : "word"}
      </SidebarLabel>
      <br />
      {/**
       * @description Article checklist/progress component
       */}
      <SidebarHeading>PROGRESS</SidebarHeading>
      {/**
       * SUMMARY progress/checklist
       */}
      <ProgressItem>
        {!articleState?.id ? <HighPriorityIcon color="danger" /> : <TickIcon color="success" />}
        <ProgressLabel>Document ID</ProgressLabel>
      </ProgressItem>

      {/**
       * HEADLINE progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.header.headline.html ? (
          <HighPriorityIcon color="danger" />
        ) : (
          <React.Fragment>
            {articleState.doc.header.headline.html.length < 10 ? (
              <WarningSignIcon color="warning" />
            ) : (
              <TickIcon color="success" />
            )}
          </React.Fragment>
        )}
        <ProgressLabel>Headline</ProgressLabel>
      </ProgressItem>

      {/**
       * SUMMARY progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.header.summary.text ? (
          <HighPriorityIcon color="danger" />
        ) : (
          <React.Fragment>
            {articleState.doc.header.summary.text.length < 10 ? (
              <WarningSignIcon color="warning" />
            ) : (
              <TickIcon color="success" />
            )}
          </React.Fragment>
        )}
        <ProgressLabel>Summary</ProgressLabel>
      </ProgressItem>

      {/**
       * Publish URL progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.metadata.publish_url || !articleState.doc.metadata.publish_url ? (
          <HighPriorityIcon color="danger" />
        ) : (
          <React.Fragment>
            {articleState.doc.metadata.publish_url.length ||
            articleState.doc.metadata.publish_url.length < 10 ? (
              <WarningSignIcon color="warning" />
            ) : (
              <TickIcon color="success" />
            )}
          </React.Fragment>
        )}
        <ProgressLabel>Publish URL</ProgressLabel>
      </ProgressItem>

      {/**
       * SEO progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.metadata.seo.title || !articleState.doc.metadata.seo.description ? (
          <HighPriorityIcon color="danger" />
        ) : (
          <React.Fragment>
            {articleState.doc.metadata.seo.title.length ||
            articleState.doc.metadata.seo.description.length < 10 ? (
              <WarningSignIcon color="warning" />
            ) : (
              <TickIcon color="success" />
            )}
          </React.Fragment>
        )}
        <ProgressLabel>SEO</ProgressLabel>
      </ProgressItem>

      {/**
       * Sections progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.sections.parent.name || !articleState.doc.sections.name ? (
          <HighPriorityIcon color="danger" />
        ) : (
          <React.Fragment>
            {articleState.doc.sections.parent.name.length ||
            articleState.doc.sections.name.length < 10 ? (
              <WarningSignIcon color="warning" />
            ) : (
              <TickIcon color="success" />
            )}
          </React.Fragment>
        )}
        <ProgressLabel>Sections</ProgressLabel>
      </ProgressItem>

      {/**
       * Topics progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.topics.map((val) => val.name) ? (
          <HighPriorityIcon color="danger" />
        ) : (
          <React.Fragment>
            {articleState.doc.topics.map((val) => val.name).length ||
            articleState.doc.topics.map((val) => val.name).length < 10 ? (
              <WarningSignIcon color="warning" />
            ) : (
              <TickIcon color="success" />
            )}
          </React.Fragment>
        )}
        <ProgressLabel>SBT Topics</ProgressLabel>
      </ProgressItem>
      <SidebarLabel
        style={{ color: COLORS.primary, cursor: "pointer" }}
        onClick={() => setBodyPanel(false)}
      >
        Check now
      </SidebarLabel>
    </EditorSidebarContainer>
  );
};

export default EditorSidebar;
