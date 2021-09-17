/**
 * @description Editor Bubble Menu
 * @author ShadowCMS
 */

import React from "react";
import { BubbleMenu } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import { BoldIcon, ItalicIcon, StrikethroughIcon, LinkIcon, BacklinkIcon } from "evergreen-ui";

type BubbleProps = {
  editor?: Editor;
};

const EditorBubbleMenu: React.FC<BubbleProps> = ({ editor }) => {
  /**
   * Function to set links to a specific sentence.
   * using .extendMarkRange from ProseMirror/TipTap
   */
  const setLink = () => {
    const url = window.prompt("URL");

    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url as string })
      .run();
  };

  return (
    <React.Fragment>
      {editor && (
        <BubbleMenu
          shouldShow={null}
          pluginKey="bubbleMenuOne"
          className="bubble-menu"
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive("bold") ? "is-active" : ""}
          >
            <BoldIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive("italic") ? "is-active" : ""}
          >
            <ItalicIcon />
          </button>
          <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive("strike") ? "is-active" : ""}
          >
            <StrikethroughIcon />
          </button>
          <button onClick={setLink} className={editor.isActive("link") ? "is-active" : ""}>
            <LinkIcon />
          </button>
          <button onClick={() => editor.chain().focus().unsetLink().run()}>
            <BacklinkIcon />
          </button>
        </BubbleMenu>
      )}
    </React.Fragment>
  );
};

export default EditorBubbleMenu;
