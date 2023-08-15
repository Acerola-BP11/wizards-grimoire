// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import axios from "axios";
import { initializeApp } from "firebase/app";
import { beforeAuthStateChanged, getAuth } from "firebase/auth";
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

beforeAuthStateChanged(auth, async (user) => {
  let state
  if(user){
    const token = await user.getIdToken()
    const username = user.displayName
    const email = user.email
    let response
    await axios.post('http://localhost:3500/users/verifyUser', {
        userToken: token,
        email: email,
        username: username
    },  {
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(data => {
        response = data
    })
    .catch(() => {
        state = 'Erro'
    })
    if(response.validated === false){
        state = 'Erro'
    }
  }
  if(state === 'Erro'){
      throw 'O Login falhou, tente novamente'
  }
})