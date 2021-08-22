/**
 * @description Main document/article editor
 * @author ShadowCMS
 */

import dayjs from "dayjs";
import random from "random-name";
import randomColor from "randomcolor";
import advancedFormat from "dayjs/plugin/advancedFormat";
import React, { useEffect, useState } from "react";
import loadIframelyEmbedJs from "../../toolkit/editor/loadIframely";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import Collaboration from "@tiptap/extension-collaboration";
import EditorBubbleMenu from "./bubble";
import EditorFloatingMenu from "./floating";
import { EditorProps } from "./types";
import { useEditor, EditorContent } from "@tiptap/react";
import { EditorOptions, EditorHeader, EditorTimestamp } from "./styles/component";
import { EditorProseMirror } from "./styles/prosemirror";
import { EditorHeadlineHolder, EditorSummaryHolder, EditorHolder } from "./styles/canvas";
import defaultExtensions from "./extensions";

const Editor: React.FC<EditorProps> = ({ doc, provider }) => {
  /* Interactive state */
  const [editorMenuActive, setEditorMenuActive] = useState(false);
  dayjs.extend(advancedFormat);

  /* Initialize new editor instance */
  const editor = useEditor(
    {
      extensions: [
        ...defaultExtensions,
        Collaboration.configure({
          document: doc,
        }),
        CollaborationCursor.configure({
          provider: provider,
          user: {
            name: `${random.first()} ${random.last()}`,
            color: `${randomColor({
              luminosity: "dark",
              format: "hex",
            })}`,
          },
        }),
      ],
      content: `
      <headline class="header-basic"></headline> 
      <p></p>
      `,
    },
    [],
  );

  /* Load Embedded Contents */
  useEffect(() => {
    loadIframelyEmbedJs();
  });

  const parsed = editor?.getJSON();
  console.log(parsed);

  /* Return */
  return (
    <EditorHolder>
      <EditorOptions></EditorOptions>

      {/* EDITOR HEADER */}
      <EditorHeader>
        <EditorHeadlineHolder contentEditable={true} placeholder="Enter a headline..." />
        <EditorSummaryHolder rows={3} placeholder="Write a summary..." />
        <EditorTimestamp>{dayjs().format("MMMM Do, YYYY")}</EditorTimestamp>
      </EditorHeader>

      {/* PROSEMIRROR */}
      <EditorProseMirror>
        {editor && (
          <React.Fragment>
            <EditorBubbleMenu editor={editor} />
            <EditorFloatingMenu
              editor={editor}
              editorMenuActive={editorMenuActive}
              setEditorMenuActive={setEditorMenuActive}
            />
            <EditorContent
              editor={editor}
              spellCheck
              autoCorrect="false"
              autoComplete="true"
            />
          </React.Fragment>
        )}
      </EditorProseMirror>
    </EditorHolder>
  );
};

export default Editor;
