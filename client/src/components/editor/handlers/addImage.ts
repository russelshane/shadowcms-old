/**
 * @description Using Google Cloud Storage (through Firebase) to store
 * newly uploaded images.
 * @author ShadowCMS
 */

import { TextSelection } from "prosemirror-state";

const AddArticleImage: any = ({
  editor,
  setEditorMenuActive,
  setIsShown,
  newImageUrl,
}) => {
  const url = newImageUrl;
  setEditorMenuActive(false);

  if (url) {
    editor?.chain().focus().setImage({ src: url }).run();

    editor
      ?.chain()
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
      .run();

    setIsShown(false);
  }
};

export default AddArticleImage;
