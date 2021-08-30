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
  ArchiveIcon,
  ManualIcon,
  Tooltip,
  UndoIcon,
  RedoIcon,
  Text,
} from "evergreen-ui";
import React from "react";

type ComposeProps = {
  editor: any;
  isSaving: boolean | null;
};

const ShadowComposeTop: React.FC<ComposeProps> = ({ editor, isSaving }) => {
  return (
    <React.Fragment>
      <Pane display="flex" alignItems="center" gridGap={15}>
        <Heading size={200}>ARTICLE</Heading>
        {isSaving != null && (
          <React.Fragment>
            {!isSaving ? (
              <StatusIndicator color="success" fontSize={13}>
                Saved.
              </StatusIndicator>
            ) : (
              <StatusIndicator color="warning" fontSize={13}>
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
          <Pane display="flex" alignItems="center" gridGap={8}>
            <ArchiveIcon size={13} color="muted" />
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
    </React.Fragment>
  );
};

export default ShadowComposeTop;
