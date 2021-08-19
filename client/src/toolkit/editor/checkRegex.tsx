/**
 * @description Check for URL regex (twitter, youtube, instagram, etc.) for article editor
 * @author ShadowCMS
 */

import { Transforms } from "slate";

const checkRegEx = (e, editor) => {
  const pastedText = e.clipboardData?.getData("text")?.trim();
  //eslint-disable-next-line
  const youtubeRegex =
    /(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/; //eslint-disable-line
  const twitterRegex =
    /^https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+)(?:\/.*)?$/; //eslint-disable-line
  const instagramRegex = /https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?/; //eslint-disable-line
  const facebookRegex = /https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/; //eslint-disable-line
  const matches =
    pastedText.match(twitterRegex) ||
    pastedText.match(youtubeRegex) ||
    pastedText.match(instagramRegex) ||
    pastedText.match(facebookRegex);

  if (matches != null) {
    // eslint-disable-next-line
    e.preventDefault();
    Transforms.insertNodes(editor, [
      {
        type: "embed",
        uri: matches[0],
        children: [
          {
            text: "",
          },
        ],
      } as any,
      {
        children: [
          {
            text: "",
          },
        ],
      },
    ]);
  }
};

export default checkRegEx;
