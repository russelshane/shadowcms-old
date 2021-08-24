/**
 * @description Main document/article editor
 * @author ShadowCMS
 */

import React from "react";
import DayJS from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import RandomName from "random-name";
import RandomColor from "randomcolor";
import LoadIframelyEmbeds from "../../toolkit/editor/loadIframely";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import DefaultExtensions from "./extensions";
import EditorBubbleMenu from "./internal/bubble";
import EditorFloatingMenu from "./internal/floating";
import SetNewHeadline from "./handlers/updateHeadline";
import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { EditorHeadlineHolder, EditorHolder, EditorSummaryHolder } from "./styles/canvas";
import { EditorHeader, EditorOptions, EditorTimestamp } from "./styles/component";
import { EditorProseMirror } from "./styles/prosemirror";
import { EditorProps } from "./types";

const Editor: React.FC<EditorProps> = ({ doc, provider, articleState, dispatch }) => {
  /**
   * Editor interactive components states, includes the Add "+" button,
   * selector components, modals, etc.
   */
  const [editorMenuActive, setEditorMenuActive] = useState<boolean>(false);

  /* Generate random name */
  const newName = `${RandomName.first()} ${RandomName.last()}`;

  /**
   * Initialize advanced formats plugin for dayjs, "Do"
   * day type is needed for current editor timestamp
   */
  DayJS.extend(AdvancedFormat);

  /**
   *  Initialize new prosemirror/tiptap instance with partial collaboration
   *  features. Default extensions comes from another file, as well as the
   *  configurations for it.
   */
  provider.on("status", (e) => {
    console.log(e.status);
  });
  const editor = useEditor(
    {
      extensions: [
        ...DefaultExtensions,
        /**
         * Using WebRTC for the article's body to be collaborative.
         * Work in progress: headline, summary, bylines, labels, etc.
         */
        Collaboration.configure({
          document: doc,
        }),
        CollaborationCursor.configure({
          provider: provider,
          user: {
            name: newName,
            color: RandomColor(),
          },
        }),
      ],
    },
    [],
  );

  /**
   * Load initial scripts for handling editor functions such as
   * embeds, images, interactive components, etc.
   */
  useEffect(() => {
    /**
     * Using Iframely/Embedly for handling in-article embedded contents
     * API key is needed, can't be hidden as of 8/23/2021.
     */
    LoadIframelyEmbeds();
  });

  // On summary input, change following state
  function setNewSummary(e) {
    const summary = e.target.value;

    dispatch({
      type: "SET_SUMMARY",
      payload: {
        text: summary,
      },
    });

    if ((articleState.doc.header.summary.text as string).length < 0) {
      dispatch({
        type: "SET_SEO_DESCRIPTION",
        payload: {
          description: summary,
        },
      });
    }
  }

  return (
    <EditorHolder>
      {/**
       * - Editor Options Component
       * Set the header type, and any features available to the article such
       * as labels, bylines, etc.
       */}
      <EditorOptions></EditorOptions>

      {/**
       * - Editor Header Component
       * Where headline and summary nodes are in. Timestamps are also
       * included here and the article's bylines.
       */}
      <EditorHeader>
        <EditorHeadlineHolder
          placeholder="Enter a headline..."
          contentEditable
          onInput={(e) => SetNewHeadline(e, dispatch)}
        />
        <EditorSummaryHolder
          rows={3}
          placeholder="Write a summary..."
          value={articleState.doc.header.summary.text}
          onChange={setNewSummary}
        />
        <EditorTimestamp>{DayJS().format("MMMM Do, YYYY")}</EditorTimestamp>
      </EditorHeader>

      {/**
       * - Collaborative ProseMirror/TipTap Component
       * The editor is using WebSockets to synchronize with other newsroom members.
       * Cursors are also synced, the function is battle-testeed and should be
       * enough for production, at least, for now.
       */}
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
              spellCheck={false}
              autoCorrect="false"
              autoComplete="false"
            />
          </React.Fragment>
        )}
      </EditorProseMirror>
    </EditorHolder>
  );
};

export default Editor;
