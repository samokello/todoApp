import {initializeApp} from "firebase";
import {getDatabase} from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBg1gpo2EMraLmUQcB4yYXgV9a3b8he020",
    authDomain: "todoapp-b5659.firebaseapp.com",
    projectId: "todoapp-b5659",
    storageBucket: "todoapp-b5659.appspot.com",
    messagingSenderId: "431637879546",
    appId: "1:431637879546:web:3d789190aad1c025230743"
  };

  const app=initializeApp(firebaseConfig);
  export const db =getDatabase(app);
  