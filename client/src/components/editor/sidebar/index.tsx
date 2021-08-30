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
  SidebarSeperator,
} from "./styles";

const EditorSidebar: React.FC<EditorSidebarProps> = ({ words, articleState, setBodyPanel }) => {
  /* Last Updated */
  const lastUpdated = articleState?.lastUpdated;
  dayjs.extend(RelativeTime);

  /* Return */
  return (
    <EditorSidebarContainer>
      <SidebarHeading>MAIN</SidebarHeading>
      <SidebarNav onClick={() => setBodyPanel(true)}>
        <ManualIcon />
        <SidebarNavLabel>Body</SidebarNavLabel>
      </SidebarNav>
      <SidebarLabel style={{ color: "#777" }}>Updated {dayjs(lastUpdated).fromNow()}</SidebarLabel>
      <SidebarLabel>
        {words} {words !== 1 ? "words" : "word"}
      </SidebarLabel>
      <SidebarSeperator />
      <SidebarNav onClick={() => setBodyPanel(false)}>
        <ManuallyEnteredDataIcon />
        <SidebarNavLabel>Metadata</SidebarNavLabel>
      </SidebarNav>
      <SidebarLabel style={{ color: "#777" }}>SEO, Publish, Editor's Note, etc.</SidebarLabel>
      <SidebarSeperator />
      {/**
       * @description Article checklist/progress component
       */}
      <SidebarHeading>PROGRESS</SidebarHeading>
      {/**
       * SUMMARY progress/checklist
       */}
      <ProgressItem>
        {!articleState?.id ? (
          <React.Fragment>
            <HighPriorityIcon color="danger" />
            <ProgressLabel style={{ color: COLORS.danger }}>Document ID</ProgressLabel>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TickIcon color="success" />
            <ProgressLabel style={{ color: COLORS.success }}>Document ID</ProgressLabel>
          </React.Fragment>
        )}
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
              <React.Fragment>
                <WarningSignIcon color="warning" />
                <ProgressLabel style={{ color: COLORS.warning }}>Headline</ProgressLabel>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <TickIcon color="success" />
                <ProgressLabel style={{ color: COLORS.success }}>Headline</ProgressLabel>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </ProgressItem>

      {/**
       * SUMMARY progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.header.summary.text ? (
          <React.Fragment>
            <WarningSignIcon color="warning" />
            <ProgressLabel style={{ color: COLORS.warning }}>Summary</ProgressLabel>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TickIcon color="success" />
            <ProgressLabel style={{ color: COLORS.success }}>Summary</ProgressLabel>
          </React.Fragment>
        )}
      </ProgressItem>

      {/**
       * Publish URL progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.metadata.publish_url || !articleState.doc.metadata.publish_url ? (
          <React.Fragment>
            <WarningSignIcon color="warning" />
            <ProgressLabel style={{ color: COLORS.warning }}>Publish URL</ProgressLabel>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TickIcon color="success" />
            <ProgressLabel style={{ color: COLORS.success }}>Publish URL</ProgressLabel>
          </React.Fragment>
        )}
      </ProgressItem>

      {/**
       * SEO progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.metadata.seo.title || !articleState.doc.metadata.seo.description ? (
          <React.Fragment>
            <HighPriorityIcon color="danger" />
            <ProgressLabel style={{ color: COLORS.danger }}>SEO</ProgressLabel>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {articleState.doc.metadata.seo.title.length &&
            articleState.doc.metadata.seo.description.length < 10 ? (
              <React.Fragment>
                <WarningSignIcon color="warning" />
                <ProgressLabel style={{ color: COLORS.warning }}>SEO</ProgressLabel>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <TickIcon color="success" />
                <ProgressLabel style={{ color: COLORS.success }}>SEO</ProgressLabel>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </ProgressItem>

      {/**
       * Sections progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.sections.parent.name || !articleState.doc.sections.name ? (
          <React.Fragment>
            <HighPriorityIcon color="danger" />
            <ProgressLabel style={{ color: COLORS.danger }}>Sections</ProgressLabel>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {articleState.doc.sections.parent.name.length ||
            articleState.doc.sections.name.length < 10 ? (
              <React.Fragment>
                <WarningSignIcon color="warning" />
                <ProgressLabel style={{ color: COLORS.warning }}>Sections</ProgressLabel>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <TickIcon color="success" />
                <ProgressLabel style={{ color: COLORS.success }}>Sections</ProgressLabel>
              </React.Fragment>
            )}
          </React.Fragment>
        )}
      </ProgressItem>

      {/**
       * Topics progress/checklist
       */}
      <ProgressItem>
        {!articleState?.doc.topics.forEach((val) => val.name) ? (
          <React.Fragment>
            <HighPriorityIcon color="danger" />
            <ProgressLabel style={{ color: COLORS.danger }}>Topics</ProgressLabel>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TickIcon color="success" />
            <ProgressLabel style={{ color: COLORS.success }}>Topics</ProgressLabel>
          </React.Fragment>
        )}
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
