/**
 * @description Editor Metadata Component
 * @author ShadowCMS
 */

import React from "react";
import { Heading, Pane, StatusIndicator } from "evergreen-ui";
import { EditorMetadataProps } from "./types";
import { EditorMetadataWrapper, MetadataContainer } from "./styles";
import TextInput from "../../../../ui/textinput";
import Textarea from "../../../../ui/textarea";
import SaveArticle from "../../handlers/save-article";

const EditorMetadata: React.FC<EditorMetadataProps> = ({
  bodyPanel,
  articleState,
  dispatch,
  id,
  editor,
  isSaving,
}) => {
  console.log(articleState?.doc.topic);
  return (
    <EditorMetadataWrapper className={`${!bodyPanel ? "show" : undefined}`}>
      {/**
       * - Editor Main Tab
       * See the current headline, summary, publish URL, CMS slug,
       * bylines, custom publish date and, etc.
       */}
      <Pane display="flex" alignItems="center" gridGap={20}>
        <Heading size={400}>METADATA</Heading>
        {isSaving != null && (
          <React.Fragment>
            {!isSaving ? (
              <StatusIndicator color="success" fontSize={13}>
                Saved.
              </StatusIndicator>
            ) : (
              <StatusIndicator color="warning" fontSize={13}>
                Saving...
              </StatusIndicator>
            )}
          </React.Fragment>
        )}
      </Pane>

      <MetadataContainer>
        <TextInput
          label="Headline"
          required
          description="A formal headline that will appear on the main article page."
          disabled
          value={articleState?.doc.header.headline.text as string}
          onChange={null}
        />
        <Textarea
          label="Summary / Excerpt"
          required
          description="A short brief on what information this article may give to readers."
          disabled
          value={articleState?.doc.header.summary.text as string}
          onChange={null}
        />
        <TextInput
          label="Publish URL"
          required
          description="This is auto-generated, although it's required to make it more URL-friendly. You should worry about this last."
          value={articleState?.doc.metadata.publish_url}
          onChange={(e) =>
            dispatch({
              type: "SET_PUBLISH_URL",
              payload: {
                url: e.target.value,
              },
            })
          }
          onBlur={() => {
            SaveArticle({ dispatch, articleState, id, editor });
          }}
        />
        <TextInput
          label="Document ID / CMS Slug"
          required
          disabled
          description="This is auto-generated and cannot be changed."
          value={articleState?.id}
          onChange={null}
        />
      </MetadataContainer>

      {/**
       * - Editor Search Engine Optimization Tab
       * Authors and editors can edit the article's SEO title, description,
       * image here. They can also add their own keywords.
       */}
      <Heading size={400} color="muted">
        SEARCH ENGINE OPTIMIZATION (SEO)
      </Heading>
      <MetadataContainer>
        <TextInput
          label="SEO Title"
          required
          description="Try to make the headline similar to the main one but more keyword-rich."
          value={articleState?.doc.metadata.seo.title as string}
          onChange={(e) => {
            dispatch({
              type: "SET_SEO_TITLE",
              payload: {
                title: e.target.value,
              },
            });
          }}
          onBlur={() => {
            SaveArticle({ dispatch, articleState, id, editor });
          }}
        />
        <Textarea
          label="SEO Description"
          required
          description="Similar to the summary but try to make it more clear, think about what readers would type on search engines."
          value={articleState?.doc.metadata.seo.description as string}
          onChange={(e) => {
            dispatch({
              type: "SET_SEO_DESCRIPTION",
              payload: {
                description: e.target.value,
              },
            });
          }}
          onBlur={() => {
            SaveArticle({ dispatch, articleState, id, editor });
          }}
        />
        <TextInput
          label="SEO Keywords"
          description="Try to add some keywords for this article, this will help the story rank even further. Seperated by comma."
          value={articleState?.doc.metadata.seo.keywords as string}
          onChange={(e) => {
            dispatch({
              type: "SET_SEO_KEYWORDS",
              payload: {
                keywords: e.target.value,
              },
            });
          }}
          onBlur={() => {
            SaveArticle({ dispatch, articleState, id, editor });
          }}
        />
      </MetadataContainer>

      {/**
       * - Editor Sections Tab
       * Reporters and editors will make sure that this article will
       * appear in the right places.
       */}
      <Heading size={400} color="muted">
        SECTIONS
      </Heading>
      <MetadataContainer></MetadataContainer>

      {/**
       * - Editor Topics Tab
       * Similar to the sections section but topics are also used for
       * platform algorithms.
       */}
      <Heading size={400} color="muted">
        TOPICS
      </Heading>
      <MetadataContainer></MetadataContainer>

      {/**
       * - Editor Editor's Notes Tab
       * Newsroom editors can add their notes in this section.
       */}
      <Heading size={400} color="muted">
        EDITOR'S NOTE
      </Heading>
      <MetadataContainer>
        <Textarea
          label="Optional"
          description="A newsroom editor can leave any notes here regarding the article that readers will find and read."
          value={articleState?.doc.editors_note as string}
          rows={4}
          onChange={(e) =>
            dispatch({
              type: "SET_EDITORS_NOTE",
              payload: {
                note: e.target.value,
              },
            })
          }
          onBlur={() => {
            SaveArticle({ dispatch, articleState, id, editor });
          }}
        />
      </MetadataContainer>

      {/**
       * - Editor Corrections Tab
       * Authors of the article can add editorial corrections in
       * this section.
       */}
      <Heading size={400} color="muted">
        CORRECTIONS
      </Heading>
      <MetadataContainer>
        <Textarea
          label="Optional"
          description="If you need to correct an editorial error, you can do so here."
          value={articleState?.doc.corrections as string}
          rows={4}
          onChange={(e) =>
            dispatch({
              type: "SET_CORRECTIONS",
              payload: {
                correction: e.target.value,
              },
            })
          }
          onBlur={() => {
            SaveArticle({ dispatch, articleState, id, editor });
          }}
        />
      </MetadataContainer>
    </EditorMetadataWrapper>
  );
};

export default EditorMetadata;
