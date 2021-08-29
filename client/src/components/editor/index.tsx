/**
 * @description Main document/article editor
 * @author ShadowCMS
 */

import React, { useReducer } from "react";
import DayJS from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import Timezone from "dayjs/plugin/timezone";
import UTC from "dayjs/plugin/utc";
import RandomName from "random-name";
import RandomColor from "randomcolor";
import LoadIframelyEmbeds from "../../toolkit/editor/loadIframely";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import DefaultExtensions from "./extensions";
import SetHeadline from "./handlers/setHeadline";
import SyncSummary from "./handlers/syncSummary";
import ContentEditable from "react-contenteditable";
import ShadowComposeOptions from "./editorOptions";
import ShadowComposeTop from "./editorTop";
import loadable from "@loadable/component";
import NewsReducer from "../../reducers/news.reducer";
import useNewsArticle from "../../handlers/useNewsArticle";
import SyncHeadline from "./handlers/syncHeadline";
import SaveArticle from "./handlers/saveArticle";
import EditorBubbleMenu from "./internal/bubble";
import EditorFloatingMenu from "./internal/floating";
import EditorSidebar from "./sidebar";
import EditorMetadata from "./metadata";
import { EditorProps } from "./types";
import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import { EditorProseMirror } from "./styles/prosemirror";
import { MockUser } from "../../constants/mocks/user";
import { NewsModel } from "../../models/news.model";
import {
  EditorHeadlineHolder,
  EditorHolder,
  EditorLabelHolder,
  EditorSummaryHolder,
} from "./styles/canvas";
import {
  EditorContainer,
  EditorHeader,
  EditorOptions,
  EditorTimestamp,
  EditorTop,
  EditorWrapper,
} from "./styles/component";

/* Dynamic Components */
const Header = loadable(() => import("../../components/header"));

const Editor: React.FC<EditorProps> = ({ doc, provider, id }) => {
  /**
   * Editor interactive components states, includes the Add "+" button,
   * selector components, modals, etc.
   */
  const [user] = useState<any>(`${RandomName.first()} ${RandomName.last()}`);
  const [editorMenuActive, setEditorMenuActive] = useState<boolean>(false);
  const [bodyPanel, setBodyPanel] = useState<boolean>(true);
  const [spellCheck, setSpellCheck] = useState(false);
  const [allowEmbeds, setAllowEmbeds] = useState(true);
  const [showLabel, setShowLabel] = useState(false);
  const [articleState, dispatch] = useReducer(NewsReducer, NewsModel);
  const [wordCount, setWordCount] = useState<any>(0);
  const isSaving = articleState?.interactiveState?.saving;
  const docId = id;

  /**
   * Initialize advanced formats plugin for dayjs, "Do"
   * day type is needed for current editor timestamp
   */
  DayJS.extend(AdvancedFormat);
  DayJS.extend(Timezone);
  DayJS.extend(UTC);

  /**
   *  Initialize new prosemirror/tiptap instance with partial collaboration
   *  features. Default extensions comes from another file, as well as the
   *  configurations for it.
   */
  const editor = useEditor({
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
          name: user,
          color: RandomColor(),
        },
      }),
    ],
    content: `${articleState?.doc.body}`,
    enablePasteRules: false,
  });

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

    /**
     * Always get current character count in article's body / contents
     */
    setWordCount(editor?.state.doc.textContent.split(" ").length);
  });

  /**
   * Fetch the blank or the initial news article data
   * upon creating new article.
   */
  useEffect(() => {
    useNewsArticle(id, dispatch);
  }, [useNewsArticle]);

  return (
    <React.Fragment>
      <Header isEditor={true} user={MockUser} />
      <EditorContainer>
        {/**
         * - Editor Sidebar Component
         * View article checklist, properties, character count, etc.
         */}
        <EditorSidebar
          articleState={articleState}
          dispatch={dispatch}
          words={wordCount}
          setBodyPanel={setBodyPanel}
        />
        {/**
         * - Editor Metadata Component
         * Article's  main components, edit the section, subsection, topics, seo,
         * tags, lede media, etc.
         */}
        <EditorMetadata articleState={articleState} dispatch={dispatch} bodyPanel={bodyPanel} />
        <EditorWrapper className={`${bodyPanel ? "show" : undefined}`}>
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
                  onChange={(e) => {
                    SetHeadline(e, dispatch, articleState);
                  }}
                  onBlur={(e) => {
                    SyncHeadline(e, docId, articleState);
                  }}
                  html={articleState?.doc.header.headline.html as string}
                  spellCheck={spellCheck}
                />
              </EditorHeadlineHolder>
              <EditorSummaryHolder
                placeholder="Write summary..."
                value={articleState?.doc.header.summary.text}
                onBlur={(e) => SyncSummary(e, docId)}
                onChange={(e) =>
                  dispatch({
                    type: "SET_SUMMARY",
                    payload: {
                      text: e.target.value,
                    },
                  })
                }
                spellCheck={spellCheck}
              />
              <EditorTimestamp>{DayJS().format("MMMM Do, YYYY")} </EditorTimestamp>
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
                  onBlur={() => {
                    SaveArticle({ dispatch, articleState, id, editor });
                  }}
                  onInput={() => {
                    dispatch({
                      type: "SET_ARTICLE_BODY",
                      payload: {
                        html: `${editor.getHTML()}`,
                      },
                    });
                  }}
                  onPasteCapture={(e) => {
                    /**
                     * Transform pastedLinks as soon as possible to embedded content
                     * if supported by editor
                     */
                    const pastedText = e.clipboardData?.getData("text")?.trim();

                    const youtubeRegex =
                      /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/; //eslint-disable-line
                    const twitterRegex =
                      /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/; //eslint-disable-line
                    const instagramRegex = /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?/; //eslint-disable-line
                    const facebookRegex = /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/; //eslint-disable-line
                    const pinRegex = /https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/; //eslint-disable-line

                    const matches =
                      pastedText.match(twitterRegex) ||
                      pastedText.match(youtubeRegex) ||
                      pastedText.match(instagramRegex) ||
                      pastedText.match(facebookRegex) ||
                      pastedText.match(pinRegex);

                    if (matches != null) {
                      editor
                        ?.chain()
                        .focus()
                        .setEmbed({ href: matches as any })
                        .run();
                    }
                  }}
                />
              </EditorProseMirror>
            )}
          </EditorHolder>
        </EditorWrapper>
      </EditorContainer>
    </React.Fragment>
  );
};

export default Editor;
