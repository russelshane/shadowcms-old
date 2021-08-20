/**
 * @description Main document/article editor
 * @author ShadowCMS
 */
import {
  BacklinkIcon,
  BoldIcon,
  CodeIcon,
  DragHandleHorizontalIcon,
  HeaderOneIcon,
  HeaderTwoIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  MediaIcon,
  PlusIcon,
  SocialMediaIcon,
  StrikethroughIcon,
} from "evergreen-ui";
import React, { useEffect, useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Image from "@tiptap/extension-image";
import Iframe from "./plugins/iframe";
import Text from "@tiptap/extension-text";
import Mention from "@tiptap/extension-mention";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Blockquote from "@tiptap/extension-blockquote";
import MentionConfig from "./plugins/MentionConfiguration";
import CodeBlock from "@tiptap/extension-code-block";
import Link from "@tiptap/extension-link";
import {
  EditorAdd,
  EditorHeadlineHolder,
  EditorHolder,
  EditorMenu,
  EditorSummaryHolder,
} from "./styles";
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from "@tiptap/react";
import loadIframelyEmbedJs from "../../toolkit/editor/loadIframely";
import EmbedBlock from "./plugins/embed";

const Editor: React.FC = () => {
  /* Interactive state */
  const [editorMenuActive, setEditorMenuActive] = useState(false);

  /* Initialize new editor instance */
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2],
        },
      }),
      Document,
      Paragraph,
      Text,
      Image,
      HorizontalRule,
      Blockquote,
      CodeBlock,
      Link,
      EmbedBlock as any,
      Placeholder.configure({
        showOnlyCurrent: false,
        placeholder: ({ node }) => {
          const headingPlaceholders = {
            1: "Enter a heading...",
            2: "Enter a subheading...",
          };

          if (node.type.name === "heading") {
            return headingPlaceholders[node.attrs.level];
          }

          if (node.type.name === "codeBlock") {
            return "Enter HTML Code...";
          }

          return "Write content here...";
        },
      }),
      Iframe,
      Mention.configure(MentionConfig),
    ],
    content: `
    <p></p>
    `,
  });

  /* Function to Add Image from a URL */
  const addImage = () => {
    const url = window.prompt("URL");
    setEditorMenuActive(false);

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
    }
  };

  /* Function to Add a YouTube Video from youtube/embed/123 */
  const addIframe = () => {
    const url = window.prompt("URL");
    setEditorMenuActive(false);

    if (url) {
      editor?.chain().focus().setIframe({ src: url }).run();
    }
  };

  /* Function to Add Links */
  const setLink = () => {
    const url = window.prompt("URL");

    editor
      ?.chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url as string })
      .run();
  };

  useEffect(() => {
    loadIframelyEmbedJs();
  });

  const parsed = editor?.getHTML();

  console.log(parsed);

  /* Return */
  return (
    <EditorHolder>
      <EditorHeadlineHolder contentEditable={true} placeholder="Enter a headline..." />
      <EditorSummaryHolder contentEditable={true} placeholder="Enter a summary..." />

      {/* PROSEMIRROR */}
      <br />
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
          <button
            onClick={setLink}
            className={editor.isActive("link") ? "is-active" : ""}
          >
            <LinkIcon />
          </button>
          <button onClick={() => editor.chain().focus().unsetLink().run()}>
            <BacklinkIcon />
          </button>
        </BubbleMenu>
      )}

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
                editor.chain().focus().toggleHeading({ level: 1 }).run();
                setEditorMenuActive(false);
              }}
              className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
            >
              <HeaderOneIcon />
              Heading
            </button>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();

                setEditorMenuActive(false);
              }}
              className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
            >
              <HeaderTwoIcon />
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
                editor.chain().focus().setHorizontalRule().run();
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
            <button onClick={addIframe}>
              <SocialMediaIcon />
              Embeds
            </button>
            <button
              className={editor.isActive("codeBlock") ? "is-active" : ""}
              onClick={() => {
                editor.chain().focus().toggleCodeBlock().run();
                setEditorMenuActive(false);
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

      <EditorContent
        editor={editor}
        spellCheck={false}
        autoCorrect="false"
        autoComplete="true"
      />
    </EditorHolder>
  );
};

export default Editor;
