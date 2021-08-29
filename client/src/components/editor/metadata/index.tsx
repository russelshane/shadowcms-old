/**
 * @description Editor Metadata Component
 * @author ShadowCMS
 */

import React from "react";
import { Heading } from "evergreen-ui";
import { EditorMetadataWrapper, MetadataContainer } from "./styles";
import { EditorMetadataProps } from "./types";
import TextInput from "../../../ui/textinput";

const EditorMetadata: React.FC<EditorMetadataProps> = ({ bodyPanel, articleState, dispatch }) => {
  return (
    <EditorMetadataWrapper className={`${!bodyPanel ? "show" : undefined}`}>
      {/**
       * - Editor Main Tab
       * See the current headline, summary, publish URL, CMS slug,
       * bylines, custom publish date and, etc.
       */}
      <Heading size={400} color="muted">
        MAIN
      </Heading>
      <MetadataContainer>
        <TextInput
          label="Headline"
          required
          description="A formal headline that will appear on the main article page."
          disabled
          value={articleState?.doc.header.headline.html as string}
          onChange={(e) =>
            dispatch({
              type: "SET_HEADLINE_HTML",
              payload: {
                html: e.target.value,
              },
            })
          }
        />

        <TextInput
          label="Summary / Excerpt"
          required
          description="A short brief on what information this article may give to readers."
          disabled
          value={articleState?.doc.header.summary.text as string}
          onChange={(e) =>
            dispatch({
              type: "SET_SUMMARY",
              payload: {
                text: e.target.value,
              },
            })
          }
        />

        <TextInput
          label="Publish URL"
          required
          description="This is auto-generated, although it's required to make it more URL-friendly. You should worry about this last."
          value={articleState?.doc.metadata.publish_url as string}
          onChange={(e) =>
            dispatch({
              type: "SET_PUBLISH_URL",
              payload: {
                publish_url: e.target.value,
              },
            })
          }
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
       * - Editor Search Engine Optimization Tab
       * Authors and editors can edit the article's SEO title, description,
       * image here. They can also add their own keywords.
       */}
      <Heading size={400} color="muted">
        SECTIONS
      </Heading>
      <MetadataContainer></MetadataContainer>

      {/**
       * - Editor Editor's Notes Tab
       * Newsroom editors can add their notes in this section.
       */}
      <Heading size={400} color="muted">
        EDITOR'S NOTE
      </Heading>
      <MetadataContainer></MetadataContainer>

      {/**
       * - Editor Corrections Tab
       * Authors of the article can add editorial corrections in
       * this section.
       */}
      <Heading size={400} color="muted">
        CORRECTIONS
      </Heading>
      <MetadataContainer></MetadataContainer>
    </EditorMetadataWrapper>
  );
};

export default EditorMetadata;
