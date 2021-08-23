/**
 * @description In-Article Embedded Content Custom Plugin
 * @author ShadowCMS
 */

import { mergeAttributes, Node } from "@tiptap/core";
import { TextSelection } from "prosemirror-state";

export interface EmbedOptions {
  HTMLAttributes: Record<string, any>;
  EmbedAttributes: Record<string, any>;
  ResponsiveAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    embed: {
      /**
       * Set a new embedded content
       */
      setEmbed: (options: { href: string }) => ReturnType;
    };
  }
}

const Embed = Node.create<EmbedOptions>({
  name: "embed",

  /**
   * Currently using iFramely's Embed.js API for embedded content,
   * for Embedly, you can use their platform.js
   */
  defaultOptions: {
    HTMLAttributes: {
      "data-iframely-url": "",
      href: {
        default: null,
      },
    },
    EmbedAttributes: {
      class: "iframely-embed",
      style: "margin-block-start: 0.5em;margin-block-end: 2em;",
    },
    ResponsiveAttributes: {
      class: "iframely-responsive",
    },
  },

  group: "block",

  addAttributes() {
    return {
      href: {
        default: null,
      },
    };
  },

  parseHTML() {
    return [{ tag: "div" }, { tag: "div" }, { tag: "a[href]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.EmbedAttributes),
      [
        "div",
        mergeAttributes(this.options.ResponsiveAttributes),
        ["a", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)],
      ],
    ];
  },

  addCommands() {
    return {
      setEmbed:
        (options) =>
        ({ commands, chain }) => {
          return (
            /**
             * Insert the embedded content to the current article selection
             */
            commands.insertContent({
              type: this.name,
              attrs: options,
            }) &&
            /**
             * Insert a new paragraph node after the selection for the
             * newly embedded content
             */
            chain()
              .command(({ tr, dispatch }) => {
                if (dispatch) {
                  const { parent, pos } = tr.selection.$from;
                  const posAfter = pos + 1;
                  const nodeAfter = tr.doc.nodeAt(posAfter);

                  if (!nodeAfter) {
                    const node = parent.type.contentMatch.defaultType?.create();

                    if (node) {
                      tr.insert(posAfter, node);
                      tr.setSelection(TextSelection.create(tr.doc, posAfter));
                    }
                  }

                  tr.scrollIntoView();
                }

                return true;
              })
              .run()
          );
        },
    };
  },
});

export default Embed;
