import { MentionList } from "../plugins/mentions";
import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

const MentionConfig = {
  HTMLAttributes: {
    class: "mention",
  },
  suggestion: {
    items: (query) => {
      return [
        "Lea Thompson",
        "Cyndi Lauper",
        "Tom Cruise",
        "Madonna",
        "Jerry Hall",
        "Joan Collins",
        "Winona Ryder",
        "Christina Applegate",
      ]
        .filter((item) => item.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, 5);
    },
    render: () => {
      let reactRenderer;
      let popup;

      return {
        onStart: (props) => {
          reactRenderer = new ReactRenderer(MentionList as any, {
            props,
            editor: props.editor as any,
          });

          popup = tippy("body", {
            getReferenceClientRect: props.clientRect,
            appendTo: () => document.body,
            content: reactRenderer.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom-start",
          });
        },
        onUpdate(props) {
          reactRenderer.updateProps(props);

          popup[0].setProps({
            getReferenceClientRect: props.clientRect,
          });
        },
        onKeyDown(props) {
          if (props.event.key === "Escape") {
            popup[0].hide();

            return true;
          }

          return reactRenderer.ref?.onKeyDown(props);
        },
        onExit() {
          popup[0].destroy();
          reactRenderer.destroy();
        },
      };
    },
  },
};

export default MentionConfig;
