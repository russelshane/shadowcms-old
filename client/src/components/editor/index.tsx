/**
 * @description Main document/article editor
 * @author ShadowCMS
 */

import { createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { PlusIcon } from "evergreen-ui";
import { EditorAdd, EditorHolder, EditorMenu } from "./styles";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import checkRegEx from "../../toolkit/editor/checkRegex";
import loadIframelyEmbedJs from "../../toolkit/editor/loadIframely";
import defaultState from "./default";

const Editor: React.FC = () => {
  /* Interactive State */
  const [addButtonActive, setAddButtonActive] = useState(false);
  const [editorMenuActive, setEditorMenuActive] = useState(false);

  /* Initialize New Editor Component Instance */
  const editor = useMemo(() => {
    const _editor = withHistory(withReact(createEditor() as ReactEditor));
    _editor.isVoid = (el: any) => el.type === "youtube";
    return _editor;
  }, []);

  /* Default Editor Content */
  const [body, setBody] = useState<Descendant[]>(defaultState);

  /* Load Handler for Embedded Elements (Iframely) */
  useEffect(() => {
    loadIframelyEmbedJs();
  });

  const renderElement = useCallback(({ attributes, children, element }) => {
    switch (element.type) {
      case "link":
        return (
          <a {...attributes} href={element.url} rel="noreferrer" target="_blank">
            {children}
          </a>
        );
      case "embed":
        return (
          <div className="iframely-embed" {...attributes} contentEditable={false}>
            <div className="iframely-responsive">
              <a data-iframely-url href={element.uri}></a>
              {children}
            </div>
          </div>
        );
      default:
        return (
          <p className="css-123" {...attributes}>
            {children}
          </p>
        );
    }
  }, []);

  /* Return */
  return (
    <EditorHolder>
      <Slate editor={editor} onChange={setBody} value={body}>
        <Editable
          spellCheck={true}
          autoFocus={false}
          placeholder={
            [
              <span style={{ color: "#222", opacity: 1 }}>
                Begin writing here.
                <br />
                <br />
                Some of the features of this editor may not work if you are using
                privacy-focused extensions such as uBlock Origin, Privacy Badger,
                clearURLs, etc.
              </span>,
            ] as unknown as string
          }
          className="editable"
          renderElement={renderElement}
          onClick={() => setAddButtonActive(true)}
          onKeyDown={() => {
            setAddButtonActive(false);
            setEditorMenuActive(false);
          }}
          onKeyPress={(e) => {
            setEditorMenuActive(false);
            if (e.key === "Enter") {
              setAddButtonActive(true);
            }
          }}
          onPaste={(e) => {
            checkRegEx(e, editor) as any;
            ReactEditor.focus(editor);
          }}
        />
        <EditorAdd
          className={`${addButtonActive && "show"}`}
          onClick={() => setEditorMenuActive(!editorMenuActive)}
        >
          <EditorMenu className={`${editorMenuActive && "show"}`}>jaksdjkasdj</EditorMenu>
          <PlusIcon className="icon" />
        </EditorAdd>
      </Slate>
    </EditorHolder>
  );
};

export default Editor;
