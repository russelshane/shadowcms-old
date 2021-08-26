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
import SetHeadline from "./handlers/setHeadline";
import SetSummary from "./handlers/setSummary";
import ContentEditable from "react-contenteditable";
import ShadowComposeOptions from "./editorOptions";
import ShadowComposeTop from "./editorTop";
import { EditorProps } from "./types";
import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { EditorProseMirror } from "./styles/prosemirror";
import { Text } from "evergreen-ui";
import {
  EditorHeadlineHolder,
  EditorHolder,
  EditorLabelHolder,
  EditorSummaryHolder,
} from "./styles/canvas";
import {
  EditorHeader,
  EditorOptions,
  EditorTimestamp,
  EditorTop,
  EditorWrapper,
} from "./styles/component";

const Editor = React.memo(({ doc, provider, articleState, dispatch, id }: EditorProps) => {
  /* Generate random name */
  const newName = `${RandomName.first()} ${RandomName.last()}`;

  /**
   * Editor interactive components states, includes the Add "+" button,
   * selector components, modals, etc.
   */
  const [editorMenuActive, setEditorMenuActive] = useState<boolean>(false);
  const [spellCheck, setSpellCheck] = useState(false);
  const [allowEmbeds, setAllowEmbeds] = useState(true);
  const [showLabel, setShowLabel] = useState(false);
  const headlineEditor = articleState?.interactiveState.headlineEditor;
  const isSaving = articleState?.interactiveState.saving;

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
  const editor = useEditor(
    {
      extensions: [
        ...DefaultExtensions,
        /**
         * Using WebSockets for the article's body to be collaborative.
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
      content: `${articleState?.doc.body}`,
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

  console.log(articleState?.doc.body);

  return (
    <EditorWrapper>
      {/**
       * - Editor Top Component
       * View article history, get help, read the guidelines, undo or redo
       * changes, other interactive stuff.
       */}
      <EditorTop>
        <ShadowComposeTop isSaving={isSaving as any} editor={editor} />
      </EditorTop>
      <EditorHolder>
        {/**
         * - Editor Options Component
         * Set the header type, and any features available to the article such
         * as labels, bylines, etc.
         */}
        <EditorOptions>
          <ShadowComposeOptions
            setAllowEmbeds={setAllowEmbeds}
            setShowLabel={setShowLabel}
            setSpellCheck={setSpellCheck}
            spellCheck={spellCheck}
            allowEmbeds={allowEmbeds}
            showLabel={showLabel}
          />
        </EditorOptions>

        {/**
         * - Editor Header Component
         * Where headline and summary nodes are in. Timestamps are also
         * included here and the article's bylines.
         */}
        <EditorHeader>
          {/**
           * Only show the label/section/topic of the article if the user has
           * set the "Show Labels" to "on".
           */}
          {showLabel && (
            <EditorLabelHolder>
              {!articleState?.doc?.sections?.name ? "UNKNOWN" : articleState.doc.sections.name}
            </EditorLabelHolder>
          )}
          <EditorHeadlineHolder>
            {headlineEditor && <Text>{headlineEditor} is editing the headline...</Text>}
            <ContentEditable
              className="headline-holder"
              placeholder="Enter a headline..."
              onChange={(e) => SetHeadline(e, dispatch, articleState, id)}
              html={articleState?.doc.header.headline.html as string}
            />
          </EditorHeadlineHolder>
          <EditorSummaryHolder
            placeholder="Write summary..."
            value={articleState?.doc.header.summary.text}
            onChange={(e) => SetSummary(e, dispatch, articleState)}
          />
          <EditorTimestamp>{DayJS().format("MMMM Do, YYYY")}</EditorTimestamp>
        </EditorHeader>

        {/**
         * - Collaborative ProseMirror/TipTap Component
         * The editor is using WebSockets to synchronize with other newsroom members.
         * Cursors are also synced, the function is not quite battle-testeed but should
         * be enough for production, at least, for now.
         */}
        {editor && (
          <EditorProseMirror>
            <EditorBubbleMenu editor={editor} />
            <EditorFloatingMenu
              editor={editor}
              editorMenuActive={editorMenuActive}
              setEditorMenuActive={setEditorMenuActive}
              allowEmbeds={allowEmbeds}
            />
            <EditorContent
              editor={editor}
              spellCheck={spellCheck}
              autoCorrect="false"
              autoComplete="false"
              onInput={() => {
                dispatch({
                  type: "SET_ARTICLE_BODY",
                  payload: {
                    html: `${editor.getHTML()}`,
                  },
                });
              }}
            />
          </EditorProseMirror>
        )}
      </EditorHolder>
    </EditorWrapper>
  );
});

export default Editor;
