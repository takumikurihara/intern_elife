import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

export class FirebaseService {
  static s_firebaseApp = firebase.initializeApp({
    apiKey:
      process.env.VUE_APP_IS_LECTURE === "true"
        ? process.env.VUE_APP_LECTURE_FIREBASE_API_KEY
        : process.env.VUE_APP_FIREBASE_API_KEY,
    authDomain:
      process.env.VUE_APP_IS_LECTURE === "true"
        ? process.env.VUE_APP_LECTURE_FIREBASE_AUTH_DOMAIN
        : process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL:
      process.env.VUE_APP_IS_LECTURE === "true"
        ? process.env.VUE_APP_LECTURE_FIREBASE_DATABASE_URL
        : process.env.VUE_APP_FIREBASE_DATABASE_URL,
    projectId:
      process.env.VUE_APP_IS_LECTURE === "true"
        ? process.env.VUE_APP_LECTURE_FIREBASE_PROJECT_ID
        : process.env.VUE_APP_FIREBASE_PROJECT_ID,
    storageBucket:
      process.env.VUE_APP_IS_LECTURE === "true"
        ? process.env.VUE_APP_LECTURE_FIREBASE_STORAGE_BUCKET
        : process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:
      process.env.VUE_APP_IS_LECTURE === "true"
        ? process.env.VUE_APP_LECTURE_FIREBASE_MESSAGING_SENDER_ID
        : process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId:
      process.env.VUE_APP_IS_LECTURE === "true"
        ? process.env.VUE_APP_LECTURE_FIREBASE_APP_ID
        : process.env.VUE_APP_FIREBASE_APP_ID,
  });

  constructor() {
    this.auth = FirebaseService.s_firebaseApp.auth();
    this.database = FirebaseService.s_firebaseApp.database();
    this.storage = FirebaseService.s_firebaseApp.storage();
  }
}
