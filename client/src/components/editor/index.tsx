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
import loadable from "@loadable/component";
import { firestore } from "../../services/firebase";
import { EditorProps } from "./types";
import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { EditorProseMirror } from "./styles/prosemirror";
import { toaster } from "evergreen-ui";
import { MockUser } from "../../constants/mocks/user";
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

const Header = loadable(() => import("../../components/header"));

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

  /**
   * Function to save article contents (not publish)
   */
  async function saveArticle() {
    await dispatch({
      type: "SET_ARTICLE_SAVING",
      payload: {
        saving: true,
      },
    });

    await dispatch({
      type: "SET_ARTICLE_BODY",
      payload: {
        body: `${editor?.getHTML()}`,
      },
    });

    setTimeout(async () => {
      const ref = await firestore.collection("articles").doc(id);

      await firestore
        .runTransaction((transaction) => {
          return transaction.get(ref).then((doc) => {
            if (!doc.exists) {
              throw "Document does not exist!";
            }

            transaction.set(ref, {
              ...articleState,
              doc: {
                ...articleState?.doc,
                body: `${editor?.getHTML()}`,
              },
            });
          });
        })
        .then(() => {
          toaster.success("Article saved successfully!");
          dispatch({
            type: "SET_ARTICLE_SAVING",
            payload: {
              saving: false,
            },
          });

          setTimeout(() => {
            dispatch({
              type: "SET_ARTICLE_SAVING",
              payload: {
                saving: null,
              },
            });
          }, 1000);
        });
    }, 200);
  }

  return (
    <React.Fragment>
      <Header
        saveArticle={saveArticle}
        isEditor={true}
        articleState={articleState}
        user={MockUser}
      />

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
              <ContentEditable
                className="headline-holder"
                placeholder="Enter a headline..."
                onChange={(e) => SetHeadline(e, dispatch, articleState)}
                html={articleState?.doc.header.headline.html as string}
                spellCheck={spellCheck}
              />
            </EditorHeadlineHolder>
            <EditorSummaryHolder
              placeholder="Write summary..."
              value={articleState?.doc.header.summary.text}
              onChange={(e) => SetSummary(e, dispatch, articleState)}
              spellCheck={spellCheck}
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
    </React.Fragment>
  );
};

export default Editor;
