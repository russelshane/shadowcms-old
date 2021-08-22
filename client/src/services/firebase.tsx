/**
 * @description Using Google Cloud Storage for Assets and Realtime Database for Sync
 * @author ShadowCMS
 */

import firebase from "firebase/app";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyD-7VPpdpY242mJcSwVRiTTLxpG9BvtbgU",
  authDomain: "timesproject.firebaseapp.com",
  databaseURL: "https://timesproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "timesproject",
  storageBucket: "timesproject.appspot.com",
  messagingSenderId: "694644400493",
  appId: "1:694644400493:web:f556ac77104e99ec3fba64",
};

firebase.initializeApp(config);

const storageRef = firebase.storage();

export default storageRef;
