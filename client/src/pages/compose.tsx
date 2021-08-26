/**
 * @description Compose new article page
 * @author ShadowCMS
 */

import * as Y from "yjs";
import loadable from "@loadable/component";
import NewsReducer from "../reducers/news.reducer";
import useNewsArticle from "../handlers/useNewsArticle";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Doc } from "yjs";
import { WebsocketProvider } from "y-websocket";
import { NewsModel } from "../models/news.model";

/* Dynamic Components */
const Layout = loadable(() => import("../ui/layout"));
const Editor = loadable(() => import("../components/editor"));

const Compose: React.FC = () => {
  /**
   * Initialize new WebRTC provider with room name of the
   * new document ID.
   */
  const { id }: any = useParams();
  const document: Doc = new Y.Doc();
  const provider = new WebsocketProvider("wss://shadow-websockets.herokuapp.com", id, document);
  const [articleState, dispatch] = useReducer(NewsReducer, NewsModel);

  /**
   * Fetch the blank or the initial news article data
   * upon creating new article.
   */
  useEffect(() => {
    useNewsArticle(id, dispatch);
  }, []);

  /* Return */
  return (
    <Layout page={`Editing ${id} - Shadow`}>
      <Editor
        id={id}
        doc={document}
        provider={provider}
        articleState={articleState}
        dispatch={dispatch}
      />
    </Layout>
  );
};

export default Compose;
