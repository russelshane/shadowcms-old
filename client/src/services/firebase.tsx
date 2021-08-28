/**
 * @description Using Google Cloud Storage for Assets and Realtime Database for Sync
 * @author ShadowCMS
 */

import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCAd931AmyuM7KTcZ7vw3xa8Wv8bhDRcMQ",
  authDomain: "subictimes.firebaseapp.com",
  projectId: "subictimes",
  storageBucket: "assets.sbtx.cf",
  messagingSenderId: "50963397322",
  appId: "1:50963397322:web:eb2649a2bb9bc3bb45d233",
  measurementId: "G-GD0XW2CSD1",
};

firebase.initializeApp(config);

export const storageRef = firebase.storage();
export const firestore = firebase.firestore();

export default firebase;
