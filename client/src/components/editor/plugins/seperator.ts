/**
 * @description Article seperator (<hr />) component. - To be removed -
 * @author ShadowCMS
 */

import { Node, nodeInputRule, mergeAttributes } from "@tiptap/core";
import { TextSelection } from "prosemirror-state";

export interface SeperatorOptions {
  HTMLAttributes: Record<string, any>;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    seperator: {
      /**
       * Add a horizontal rule
       */
      setSeperator: () => ReturnType;
    };
  }
}

const Seperator = Node.create<SeperatorOptions>({
  name: "seperator",

  defaultOptions: {
    HTMLAttributes: {
      class: "seperator",
    },
  },

  group: "block",

  parseHTML() {
    return [{ tag: "div" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
  },

  addCommands() {
    return {
      setSeperator:
        () =>
        ({ chain }) => {
          return (
            chain()
              /* Remove previous node before seperator if it's empty */
              .command(({ tr, dispatch }) => {
                const { selection } = tr;
                const { empty, $anchor } = selection;
                const isEmptyTextBlock =
                  $anchor.parent.isTextblock &&
                  !$anchor.parent.type.spec.code &&
                  !$anchor.parent.textContent;

                if (!empty || !isEmptyTextBlock || !dispatch) {
                  return true;
                }

                const posBefore = $anchor.before();

                tr.deleteRange(posBefore, posBefore + 1);

                return true;
              })
              .insertContent({ type: this.name })
              /* Add a new node after seperator block */
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

  addInputRules() {
    return [nodeInputRule(/^(?:---|—-|___\s|\*\*\*\s)$/, this.type)];
  },
});

export default Seperator;
