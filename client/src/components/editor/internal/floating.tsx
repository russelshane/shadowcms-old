/**
 * @description Editor Floating Menu (Add "+" button on the side)
 * @author ShadowCMS
 */

import {
  CodeIcon,
  DragHandleHorizontalIcon,
  HeaderOneIcon,
  ListIcon,
  MediaIcon,
  PlusIcon,
  SocialMediaIcon,
} from "evergreen-ui";
import { EditorAdd, EditorMenu } from "../styles/interactive";
import { FloatingMenu } from "@tiptap/react";
import { Editor } from "@tiptap/core";
import React from "react";

/**
 * TypeScript Properties: editor is the main editor component,
 * setEditorMenuActive and editorMenuActive are the state of the
 * component where the add "+" button is clicked.
 */
type FloatingProps = {
  editor?: Editor;
  setEditorMenuActive?: any;
  editorMenuActive?: any;
};

const EditorFloatingMenu: React.FC<FloatingProps> = ({
  editor,
  editorMenuActive,
  setEditorMenuActive,
}) => {
  /**
   * Using Google Cloud Storage (through Firebase) to store
   * newly uploaded images.
   */
  const addImage = () => {
    const url = window.prompt("URL");
    setEditorMenuActive(false);

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  /**
   * Function to embed content in the article
   * "setIframely" is a prosemirror/tiptap plugin created by
   * the ShadowCMS team.
   */
  const setEmbed = () => {
    const url = window.prompt("URL");

    editor
      ?.chain()
      .focus()
      .setIframely({ href: url as string })
      .run();

    setEditorMenuActive(false);
  };

  return (
    <React.Fragment>
      {editor && (
        <FloatingMenu
          className="floating-menu"
          pluginKey="floatingMenuOne"
          shouldShow={null}
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <EditorMenu className={`${editorMenuActive && "show"}`}>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();

                setEditorMenuActive(false);
              }}
              className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
            >
              <HeaderOneIcon />
              Subheading
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleBulletList().run();

                setEditorMenuActive(false);
              }}
              className={editor.isActive("bulletList") ? "is-active" : ""}
            >
              <ListIcon />
              Bullet List
            </button>
            <button
              onClick={() => {
                editor.chain().focus().setSeperator().run();
                setEditorMenuActive(false);
              }}
            >
              <DragHandleHorizontalIcon />
              Seperator
            </button>
            <button onClick={addImage} className="add-image-btn">
              <MediaIcon />
              Image
            </button>
            <button onClick={setEmbed}>
              <SocialMediaIcon />
              Embeds
            </button>
            <button
              className={editor.isActive("codeBlock") ? "is-active" : ""}
              onClick={async () => {
                editor.chain().focus().toggleCodeBlock().run();
                setEditorMenuActive(false);
                await editor?.chain().insertContent(`<p></p>`).run();
              }}
            >
              <CodeIcon />
              HTML Code
            </button>
          </EditorMenu>
          <EditorAdd onClick={() => setEditorMenuActive(!editorMenuActive)}>
            <PlusIcon size={20} />
          </EditorAdd>
        </FloatingMenu>
      )}
    </React.Fragment>
  );
};

export default EditorFloatingMenu;
