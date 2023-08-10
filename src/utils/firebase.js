// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8x9b8vW8io3hXSPQhAaNOLn-3n6XnRyk",
  authDomain: "o-grimorio-do-mago.firebaseapp.com",
  projectId: "o-grimorio-do-mago",
  storageBucket: "o-grimorio-do-mago.appspot.com",
  messagingSenderId: "851492208878",
  appId: "1:851492208878:web:9a122704b4fa231552b3ff",
  measurementId: "G-HL1S0WS8BB"
};

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)
export const auth = getAuth(app)