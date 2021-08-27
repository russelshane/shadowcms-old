/**
 * @description Using Google Cloud Storage for Assets and Realtime Database for Sync
 * @author ShadowCMS
 */

import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY as string,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN as string,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID as string,
  storageBucket: "timesproject.appspot.com", // Replace with your own
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_ID as string,
  appId: process.env.REACT_APP_FIREBASE_APP_ID as string,
};

firebase.initializeApp(config);

export const storageRef = firebase.storage();
export const firestore = firebase.firestore();

export default firebase;
