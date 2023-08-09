// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8x9b8vW8io3hXSPQhAaNOLn-3n6XnRyk",
  authDomain: "o-grimorio-do-mago.firebaseapp.com",
  projectId: "o-grimorio-do-mago",
  storageBucket: "o-grimorio-do-mago.appspot.com",
  messagingSenderId: "851492208878",
  appId: "1:851492208878:web:5d69b5eae26f9cf852b3ff",
  measurementId: "G-CB25C31KDF"
};

export const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
export const auth = getAuth(app)