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
import SyncHeadline from "./handlers/syncHeadline";
import SetSummary from "./handlers/setSummary";
import ContentEditable from "react-contenteditable";
import { EditorProps } from "./types";
import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { EditorProseMirror } from "./styles/prosemirror";
import { Heading, Pane, Switch, Text } from "evergreen-ui";
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
import { firestore } from "../../services/firebase";

const Editor: React.FC<EditorProps> = ({ doc, provider, articleState, dispatch, id }) => {
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

  return (
    <EditorWrapper>
      <EditorTop>
        <Heading size={200}>ARTICLE</Heading>
      </EditorTop>
      <EditorHolder>
        {/**
         * - Editor Options Component
         * Set the header type, and any features available to the article such
         * as labels, bylines, etc.
         */}
        <EditorOptions>
          <Pane display="flex" gridGap={8} alignItems="center">
            <Heading size={200}>TEMPLATE</Heading>

            <Text cursor="pointer" fontSize={12} color="blue500">
              Basic
            </Text>
          </Pane>
          <Pane display="flex" gridGap={10} alignItems="center">
            <Pane display="flex" gridGap={8} alignItems="center">
              <Text fontSize={12} marginTop="-2px">
                Spell Check
              </Text>
              <Switch checked={spellCheck} onChange={() => setSpellCheck(!spellCheck)} />
            </Pane>
            <Pane display="flex" gridGap={8} alignItems="center">
              <Text fontSize={12} marginTop="-2px">
                Labels
              </Text>
              <Switch checked={showLabel} onChange={() => setShowLabel(!showLabel)} />
            </Pane>
            <Pane display="flex" gridGap={8} alignItems="center">
              <Text fontSize={12} marginTop="-2px">
                Embeds
              </Text>
              <Switch checked={allowEmbeds} onChange={() => setAllowEmbeds(!allowEmbeds)} />
            </Pane>
          </Pane>
        </EditorOptions>

        {/**
         * - Editor Header Component
         * Where headline and summary nodes are in. Timestamps are also
         * included here and the article's bylines.
         */}
        <EditorHeader>
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
              onBlur={(e) => {
                SyncHeadline(e, articleState);
                dispatch({
                  type: "SET_HEADLINE_EDITOR",
                  payload: {
                    editor: null,
                  },
                });
                firestore
                  .collection("articles")
                  .doc(id)
                  .set({
                    ...articleState,
                    interactiveState: {
                      headlineEditor: null,
                    },
                  });
              }}
              html={articleState?.doc.header.headline.html as string}
              onClick={() => {
                firestore
                  .collection("articles")
                  .doc(id)
                  .set({
                    ...articleState,
                    interactiveState: {
                      headlineEditor: newName,
                    },
                  });
              }}
            />
          </EditorHeadlineHolder>
          <EditorSummaryHolder
            rows={3}
            placeholder="Write summary..."
            value={articleState?.doc.header.summary.text}
            onChange={(e) => SetSummary(e, dispatch, articleState)}
          />
          <EditorTimestamp>{DayJS().format("MMMM Do, YYYY")}</EditorTimestamp>
        </EditorHeader>

        {/**
         * - Collaborative ProseMirror/TipTap Component
         * The editor is using WebSockets to synchronize with other newsroom members.
         * Cursors are also synced, the function is battle-testeed and should be
         * enough for production, at least, for now.
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
            />
          </EditorProseMirror>
        )}
      </EditorHolder>
    </EditorWrapper>
  );
};

export default Editor;
