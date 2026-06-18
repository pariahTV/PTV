// firebase.js
// PariahTV — Firebase Core Setup (Restored Full Version)

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// --------------------------------------------------
//  IMPORTANT:
//  Replace ALL values below with your actual Firebase
//  config from Firebase Console → Project Settings → 
//  "Your apps" → Web App → SDK setup & config
// --------------------------------------------------

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// --------------------------------------------------
//  INITIALISE APP + DATABASE
// --------------------------------------------------

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
