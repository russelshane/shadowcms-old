/**
 * @description Editor Sidebar Component
 * @author ShadowCMS
 */

import React from "react";
import { EditorSidebarProps } from "./types";
import { EditorSidebarContainer } from "./styles";
import { Pane, Heading, ManualIcon, ManuallyEnteredDataIcon } from "evergreen-ui";

const EditorSidebar: React.FC<EditorSidebarProps> = () => {
  return (
    <EditorSidebarContainer>
      <Pane display="flex" gridGap="8px" alignItems="center" cursor="pointer">
        <ManuallyEnteredDataIcon marginBottom="-4px" />
        <Heading size={600} color="muted">
          Metadata
        </Heading>
      </Pane>
      <Pane display="flex" gridGap="8px" alignItems="center" cursor="pointer">
        <ManualIcon marginBottom="-4px" />
        <Heading size={600} color="muted">
          Body
        </Heading>
      </Pane>
    </EditorSidebarContainer>
  );
};

export default EditorSidebar;
