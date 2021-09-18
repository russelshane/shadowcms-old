/**
 * @description Shadow Compose Component
 * @author ShadowCMS
 */

import React, { useEffect, useReducer, useState } from "react";
import Container from "../../ui/container";
import RandomName from "random-name";
import DayJS from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import Timezone from "dayjs/plugin/timezone";
import UTC from "dayjs/plugin/utc";
import RandomColor from "randomcolor";
import LoadIframelyEmbeds from "./handlers/load-embeds";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import NewsReducer from "../../reducers/news-reducer";
import DefaultExtensions from "./extensions";
import useNewsArticle from "../../handlers/useNewsArticle";
import EditorBubbleMenu from "./compose-components/bubble-menu";
import EditorFloatingMenu from "./compose-components/floating-menu";
import EditorSidebar from "./compose-components/sidebar";
import Placeholder from "@tiptap/extension-placeholder";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import ShadowComposeTop from "./compose-components/top-bar";
import ShadowComposeOptions from "./compose-components/options-bar";
import SaveArticle from "./handlers/save-article";
import EditorMetadata from "./compose-components/metadata";
import { useEditor, EditorContent } from "@tiptap/react";
import { NewsModel } from "../../models/news-model";
import { NewsArticle } from "../../types/news-article";
import { ComposeProps } from "./types";
import { EditorProseMirror } from "./styles/prosemirror";
import {
  EditorHeadline,
  EditorMain,
  EditorSummary,
  EditorTimestamp,
  EditorTop,
  EditorWrapper,
} from "./styles/main";

const Compose: React.FC<ComposeProps> = ({ id, provider, doc }) => {
  /**
   * Editor interactive components states, includes the Add "+" button,
   * selector components, modals, etc.
   */
  const [user] = useState<any>(`${RandomName.first()} ${RandomName.last()}`);
  const [articleState, dispatch] = useReducer(NewsReducer, NewsModel as NewsArticle);
  const [allowEmbeds, setAllowEmbeds] = useState(true);
  const [editorMenuActive, setEditorMenuActive] = useState<boolean>(false);
  const [bodyPanel, setBodyPanel] = useState<boolean>(true);
  const [spellCheck, setSpellCheck] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [wordCount, setWordCount] = useState<any>(0);
  const [articleBody, setArticleBody] = useState<any>(articleState?.doc?.body);
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
  const ParagraphDocument = Document.extend({
    content: "paragraph",
  });
  const editor = useEditor(
    {
      extensions: [
        ...(DefaultExtensions as any),
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
      content: articleBody,
    },
    [],
  );

  const headlineEditor = useEditor({
    extensions: [
      ParagraphDocument,
      Paragraph,
      Text,
      Collaboration.configure({
        document: doc,
        field: "headline",
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: user,
          color: RandomColor(),
        },
      }),
      Placeholder.configure({
        placeholder: "Enter a headline...",
      }),
    ],
    content: articleState?.doc?.header?.headline?.html,
  });

  const summaryEditor = useEditor({
    extensions: [
      ParagraphDocument,
      Paragraph,
      Text,
      Collaboration.configure({
        document: doc,
        field: "summary",
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: user,
          color: RandomColor(),
        },
      }),
      Placeholder.configure({
        placeholder: "Write a summary...",
      }),
    ],
    content: articleState?.doc?.header?.summary?.html,
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

    /**
     * Temporary fix for article body not loading properly
     * within the ProseMirror component.
     */
    setTimeout(() => {
      useNewsArticle(id, dispatch);
      setArticleBody(articleState?.doc?.body);
    }, 250);
  }, []);

  console.log(articleState);

  return (
    <Container margin="120px auto 0 auto">
      <EditorSidebar
        articleState={articleState}
        dispatch={dispatch}
        words={wordCount}
        setBodyPanel={setBodyPanel}
        bodyPanel={bodyPanel}
      />
      {/**
       * - Editor Metadata Component
       * Article's  main components, edit the section, subsection, topics, seo,
       * tags, lede media, etc.
       */}
      <EditorMetadata
        articleState={articleState}
        dispatch={dispatch}
        bodyPanel={bodyPanel}
        id={docId}
        editor={editor}
        isSaving={isSaving}
      />
      <EditorWrapper className={`${!bodyPanel && "hide"}`}>
        {/**
         * @description Short Article Options
         */}
        <ShadowComposeTop editor={editor} isSaving={isSaving} />
        <EditorMain>
          <ShadowComposeOptions
            allowEmbeds={allowEmbeds}
            setAllowEmbeds={setAllowEmbeds}
            spellCheck={spellCheck}
            setShowLabel={setShowLabel}
            showLabel={showLabel}
            setSpellCheck={setSpellCheck}
          />

          {/**
           * @description Article Headlines, Labels, Summary, Bylines & Timestamp
           */}
          <EditorTop>
            <EditorHeadline>
              <EditorContent
                editor={headlineEditor}
                autoComplete="false"
                autoCorrect="false"
                spellCheck={spellCheck}
                onInput={() => {
                  const cleanHeadline = headlineEditor?.getHTML().replace(/<\/?[^>]+(>|$)/g, "");
                  dispatch({
                    type: "SET_HEADLINE",
                    payload: {
                      text: `${cleanHeadline}`,
                    },
                  });
                  dispatch({
                    type: "SET_HEADLINE_HTML",
                    payload: {
                      html: `${headlineEditor?.getHTML()}`,
                    },
                  });
                }}
                onBlur={() => {
                  SaveArticle({ dispatch, articleState, id, editor });
                }}
              />
            </EditorHeadline>
            <EditorSummary>
              <EditorContent
                editor={summaryEditor}
                autoComplete="false"
                autoCorrect="false"
                spellCheck={spellCheck}
                onInput={() => {
                  const cleanSummary = summaryEditor?.getHTML().replace(/<\/?[^>]+(>|$)/g, "");
                  dispatch({
                    type: "SET_SUMMARY",
                    payload: {
                      html: `${summaryEditor?.getHTML()}`,
                      text: `${cleanSummary}`,
                    },
                  });
                }}
                onBlur={() => {
                  console.log(summaryEditor?.getHTML());
                  SaveArticle({ dispatch, articleState, id, editor });
                }}
              />
            </EditorSummary>
            <EditorTimestamp>{DayJS().format("dddd, MMM Do")}</EditorTimestamp>
          </EditorTop>

          {/**
           * @description Article Body / Contents
           */}
          {editor && (
            <EditorProseMirror>
              <EditorContent
                editor={editor}
                autoCorrect="false"
                autoComplete="false"
                spellCheck={spellCheck}
                onInput={() => {
                  dispatch({
                    type: "SET_ARTICLE_BODY",
                    payload: {
                      html: `${editor?.getHTML()}`,
                    },
                  });
                }}
                onBlur={() => {
                  SaveArticle({ dispatch, articleState, id, editor });
                }}
              />
              <EditorBubbleMenu editor={editor} />
              <EditorFloatingMenu
                editor={editor}
                editorMenuActive={editorMenuActive}
                setEditorMenuActive={setEditorMenuActive}
                allowEmbeds={allowEmbeds}
              />
            </EditorProseMirror>
          )}
        </EditorMain>
      </EditorWrapper>
    </Container>
  );
};

export default Compose;
