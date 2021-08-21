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
// import * as awarenessProtocol from "y-protocols/awareness.js";
import * as Y from "yjs";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Image from "@tiptap/extension-image";
import Text from "@tiptap/extension-text";
import MentionConfig from "./config/MentionConfiguration";
import Mention from "@tiptap/extension-mention";
import HorizontalRule from "./plugins/hr";
import Blockquote from "@tiptap/extension-blockquote";
import CodeBlock from "@tiptap/extension-code-block";
import Link from "@tiptap/extension-link";
import loadIframelyEmbedJs from "../../toolkit/editor/loadIframely";
import Iframely from "./plugins/iframely";
import PlaceholderConfig from "./config/PlaceholderConfig";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Collaboration from "@tiptap/extension-collaboration";
import randomColor from "randomcolor";
import random from "random-name";
import { useEditor, BubbleMenu, FloatingMenu, EditorContent } from "@tiptap/react";
import {
  EditorHeader,
  EditorHeadlineHolder,
  EditorHolder,
  EditorSummaryHolder,
  EditorTimestamp,
} from "./styles/canvas";
import { EditorProps } from "./types";
import { EditorAdd, EditorMenu } from "./styles/interactive";
import { WebsocketProvider } from "y-websocket";

const Editor: React.FC<EditorProps> = ({ id }) => {
  /* Interactive state */
  const [editorMenuActive, setEditorMenuActive] = useState(false);

  /* Initialize new editor instance */
  const document = new Y.Doc();
  const provider = new WebsocketProvider("wss://demos.yjs.dev", `${id}`, document);

  const editor = useEditor(
    {
      extensions: [
        StarterKit.configure({
          history: false,
        }),
        Document,
        Paragraph,
        Text,
        Image,
        HorizontalRule,
        Blockquote,
        CodeBlock,
        Link,
        Iframely,
        Mention.configure(MentionConfig),
        Placeholder.configure(PlaceholderConfig),
        // Mention.configure(MentionConfig),
        Collaboration.configure({
          document: document,
        }),
        CollaborationCursor.configure({
          provider: provider,
          user: {
            name: `${random.first()} ${random.last()}`,
            color: `${randomColor()}`,
          },
        }),
      ],
    },
    [],
  );

  /* Function to Add Image from a URL */
  const addImage = () => {
    const url = window.prompt("URL");
    setEditorMenuActive(false);

    if (url) {
      editor?.chain().focus().setImage({ src: url }).run();
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

  const setEmbed = () => {
    const url = window.prompt("URL");

    editor
      ?.chain()
      .focus()
      .setIframely({ href: url as string })
      .run();

    setEditorMenuActive(false);
  };

  /* Load Embedded Contents */
  useEffect(() => {
    loadIframelyEmbedJs();
  });

  const parsed = editor?.getHTML();
  console.log(parsed);

  /* Return */
  return (
    <EditorHolder>
      <EditorHeader>
        <EditorHeadlineHolder contentEditable={true} placeholder="Enter a headline..." />
        <EditorSummaryHolder contentEditable={true} placeholder="Enter a summary..." />
        <EditorTimestamp>{dayjs().format("dddd, MMM D, YYYY")}</EditorTimestamp>
      </EditorHeader>
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

      <EditorContent
        editor={editor}
        spellCheck
        autoCorrect="false"
        autoComplete="true"
        style={{ padding: "80px 90px" }}
      />
    </EditorHolder>
  );
};

export default Editor;
