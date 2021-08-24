/**
 * @description Compose new article page
 * @author ShadowCMS
 */

import * as Y from "yjs";
import loadable from "@loadable/component";
import NewsReducer from "../reducers/news.reducer";
import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import { Doc } from "yjs";
import { WebsocketProvider } from "y-websocket";
import { NewsModel } from "../models/news.model";
import { firestore } from "../services/firebase";

/* Dynamic Components */
const Layout = loadable(() => import("../ui/layout"));
const Header = loadable(() => import("../components/header"));
const Editor = loadable(() => import("../components/editor"));

const Compose: React.FC = () => {
  /**
   * Initialize new WebRTC provider with room name of the
   * new document ID.
   */
  const { id }: any = useParams();
  const document: Doc = new Y.Doc();
  const provider = new WebsocketProvider("wss://websocket.tiptap.dev", id, document);
  const [articleState, dispatch] = useReducer(NewsReducer, NewsModel);

  console.log(articleState);

  /* Fetch most recent data */
  useEffect(() => {
    firestore
      .collection("articles")
      .doc(id)
      .onSnapshot((doc) => {
        console.log(`From Firestore:`, doc.data());
        dispatch({
          type: "SET_HEADLINE",
          payload: {
            text: doc.data()?.doc?.header?.headline?.text,
          },
        });
      });
  }, []);

  /* Return */
  return (
    <Layout page={`Editing ${id} - Shadow`}>
      <Header />
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
