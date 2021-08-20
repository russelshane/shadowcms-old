import { mergeAttributes, Node } from "@tiptap/core";
import { TextSelection } from "prosemirror-state";

export interface IframelyOptions {
  HTMLAttributes: Record<string, any>;
  divTwo: any;
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    Iframely: {
      /**
       * Add a horizontal rule
       */
      setIframely: (options: { href: string }) => ReturnType;
    };
  }
}

const Iframely = Node.create<IframelyOptions>({
  name: "embed",

  defaultOptions: {
    HTMLAttributes: {
      "data-iframely-url": "",
      href: {
        default: "null",
      },
    },
    divTwo: {
      class: "iframely-embed",
      style: "margin-block-start: 1em;margin-block-end: 1em;",
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
    return [{ tag: "div" }, { tag: "a[href]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(this.options.divTwo),
      ["a", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)],
    ];
  },

  addCommands() {
    return {
      setIframely:
        (options) =>
        ({ commands, chain }) => {
          return (
            commands.insertContent({
              type: this.name,
              attrs: options,
            }) &&
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

export default Iframely;
