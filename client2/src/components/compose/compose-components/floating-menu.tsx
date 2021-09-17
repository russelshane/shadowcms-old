/**
 * @description Editor Floating Menu (Add "+" button on the side)
 * @author ShadowCMS
 */

import {
  Button,
  CodeIcon,
  HeaderIcon,
  Heading,
  ListIcon,
  MediaIcon,
  Pane,
  Paragraph,
  PlusIcon,
  SideSheet,
  ApplicationIcon,
  TextInput,
  FilePicker,
  StatusIndicator,
} from "evergreen-ui";
import React, { useState } from "react";
import { EditorAdd, EditorMenu } from "../styles/interactive";
import { FloatingMenu } from "@tiptap/react";
import { TextSelection } from "prosemirror-state";
import { storageRef } from "../../../services/firebase";

/**
 * TypeScript Properties: editor is the main editor component,
 * setEditorMenuActive and editorMenuActive are the state of the
 * component where the add "+" button is clicked.
 */
type FloatingProps = {
  editor?: any;
  setEditorMenuActive?: any;
  editorMenuActive?: any;
  allowEmbeds?: boolean;
};

const EditorFloatingMenu: React.FC<FloatingProps> = ({
  editor,
  editorMenuActive,
  setEditorMenuActive,
  allowEmbeds,
}) => {
  const [newImageUrl, setNewImageUrl] = useState();
  const [newMediaFile, setNewMediaFile] = useState<any>();
  const [uploading, setUploading] = useState<boolean>(false);
  const [isShown, setIsShown] = useState(false);

  /**
   * Using Google Cloud Storage (through Firebase) to
   * store newly uploaded images. Add new paragraph after
   * the image node.
   */
  const addImage = () => {
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

  const uploadImage = async () => {
    setUploading(true);
    const file = newMediaFile[0];
    console.log(file);
    setEditorMenuActive(false);

    const fbStorageRef = storageRef.ref();
    const imagesRef = fbStorageRef.child("2021").child(file.name);

    // Type of file will be set to 'image' no need to set 'jpeg/png/etc.'
    const metadata = {
      contentType: "image",
    };

    const uploadTask = await imagesRef.put(file, metadata);
    console.log("Uploaded successfully!", uploadTask);

    const url = await uploadTask.ref.getDownloadURL();

    console.log(url);

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
      setUploading(false);
    }
  };

  /**
   * Function to embed content in the article "setIframely"
   * is a prosemirror/tiptap plugin created by the ShadowCMS
   * team.
   */
  const setEmbed = () => {
    const url = window.prompt("URL");

    if (url) {
      editor
        ?.chain()
        .focus()
        .setEmbed({ href: url as string })
        .run();
    }

    setEditorMenuActive(false);
  };

  return (
    <React.Fragment>
      <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
        <Pane gridGap="10" padding="50px">
          <Heading>Add New Image</Heading>
          <br />
          <Pane display="flex" gridColumnGap="12px">
            <TextInput
              onChange={(e) => setNewImageUrl(e.target.value)}
              value={newImageUrl}
              placeholder="Enter new image URL..."
              padding="18px"
              width="100%"
              marginBottom="10px"
              fontSize="14px"
            />
            <Button onClick={addImage} padding="18px" fontSize="12px">
              Insert Image
            </Button>
          </Pane>
          <br />

          <Pane display="flex" gridColumnGap="12px">
            <FilePicker
              width="100%"
              height={38}
              placeholder="Upload a file..."
              onChange={(files) => setNewMediaFile(files)}
            />
            <Button
              onClick={uploadImage}
              padding="18px"
              fontSize="12px"
              disabled={newMediaFile ? false : true}
            >
              Upload Image
            </Button>
          </Pane>
          {uploading && <StatusIndicator color="warning">Uploading...</StatusIndicator>}
          <br />
          <Paragraph>
            You can either upload an image from your computer, or select one and grab the link from
            our media library. Make sure you have the license for these images.
          </Paragraph>
        </Pane>
      </SideSheet>
      {editor && (
        <FloatingMenu
          className="floating-menu"
          pluginKey="floatingMenuOne"
          shouldShow={null}
          tippyOptions={{ duration: 100 }}
          editor={editor}
        >
          <EditorMenu className={`${editorMenuActive && "show"}`}>
            <button
              onClick={() => {
                editor.chain().focus().toggleHeading({ level: 2 }).run();

                setEditorMenuActive(false);
              }}
              className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
            >
              <HeaderIcon />
              Subheading
            </button>
            <button
              onClick={() => {
                setIsShown(!isShown);
              }}
              className={editor.isActive("image") ? "is-active" : ""}
            >
              <MediaIcon />
              Image
            </button>
            {allowEmbeds && (
              <button onClick={setEmbed}>
                <ApplicationIcon />
                Embed
              </button>
            )}
            <span className="menuSeperator" />
            <button
              onClick={() => {
                editor.chain().focus().toggleBulletList().run();
                setEditorMenuActive(false);
              }}
              className={editor.isActive("bulletList") ? "is-active" : ""}
            >
              <ListIcon />
              Bullet List
            </button>

            <button
              className={editor.isActive("codeBlock") ? "is-active" : ""}
              onClick={async () => {
                editor.chain().focus().toggleCodeBlock().run();
                setEditorMenuActive(false);
                await editor?.chain().insertContent(`<p></p>`).run();
              }}
            >
              <CodeIcon />
              HTML Code
            </button>
          </EditorMenu>
          <EditorAdd onClick={() => setEditorMenuActive(!editorMenuActive)}>
            <PlusIcon size={20} />
          </EditorAdd>
        </FloatingMenu>
      )}
    </React.Fragment>
  );
};

export default EditorFloatingMenu;
