/**
 * @description Editor Top Component
 * @author ShadowCMS
 */

import {
  Pane,
  Heading,
  StatusIndicator,
  Popover,
  Position,
  ManualIcon,
  Tooltip,
  UndoIcon,
  RedoIcon,
  Text,
  HistoryIcon,
} from "evergreen-ui";
import React from "react";
import COLORS from "../../../../styles/global-colors";

type ComposeProps = {
  editor: any;
  isSaving: boolean | null;
};

const ShadowComposeTop: React.FC<ComposeProps> = ({ editor, isSaving }) => {
  return (
    <Pane
      display="flex"
      justifyContent="space-between"
      padding="10px"
      borderBottom={`1px solid ${COLORS.borders}`}
    >
      <Pane display="flex" alignItems="center" gridGap={15} width="100%" flexDirection="row">
        <Heading size={200} cursor="default">
          ARTICLE
        </Heading>
        {isSaving != null && (
          <React.Fragment>
            {!isSaving ? (
              <StatusIndicator cursor="default" color="success" fontSize={13}>
                Saved.
              </StatusIndicator>
            ) : (
              <StatusIndicator cursor="default" color="warning" fontSize={13}>
                Saving...
              </StatusIndicator>
            )}
          </React.Fragment>
        )}
      </Pane>

      <Pane display="flex" alignItems="center" gridGap={20}>
        <Popover
          position={Position.BOTTOM_RIGHT}
          content={
            <Pane width={240} padding={10} display="flex" gridGap={10} flexDirection="column">
              <Text cursor="default">Coming soon...</Text>
            </Pane>
          }
        >
          <Pane display="flex" alignItems="center" gridGap={8} width="90px">
            <HistoryIcon size={13} color="muted" />
            <Text cursor="pointer" fontSize={12}>
              View History
            </Text>
          </Pane>
        </Popover>
        <Pane display="flex" alignItems="center" gridGap={8}>
          <ManualIcon size={13} color="muted" />
          <Text cursor="pointer" fontSize={12}>
            Help
          </Text>
        </Pane>
        <Text cursor="pointer" fontSize="12">
          Guidelines
        </Text>
        <Tooltip content="Undo" position={Position.BOTTOM_RIGHT}>
          <UndoIcon
            size={15}
            color="muted"
            cursor="pointer"
            onClick={() => editor?.chain().focus().undo().run()}
          />
        </Tooltip>
        <Tooltip content="Redo" position={Position.BOTTOM_LEFT}>
          <RedoIcon
            size={15}
            color="muted"
            cursor="pointer"
            onClick={() => editor?.chain().focus().redo().run()}
          />
        </Tooltip>
      </Pane>
    </Pane>
  );
};

export default ShadowComposeTop;
