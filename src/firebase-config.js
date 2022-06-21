import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAgaHrSAbHqkF3JNjLj2fwUGR1MHDsoUHA",
    authDomain: "readerhousewebapp.firebaseapp.com",
    projectId: "readerhousewebapp",
    storageBucket: "readerhousewebapp.appspot.com",
    messagingSenderId: "95443137276",
    appId: "1:95443137276:web:c1c1c54f34276cfa869d79",
    measurementId: "G-753MHJGNQH"
  };


  const app = initializeApp(firebaseConfig);
// exporting means to access is on other js
  export const db = getFirestore(app);