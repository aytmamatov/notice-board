import firebase from "firebase/compat/app";
import "firebase/compat/auth/";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_CONFIG_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_CONFIG_APP_ID,
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
