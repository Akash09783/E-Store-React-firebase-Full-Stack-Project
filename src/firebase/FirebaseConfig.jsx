
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCo8YSZgbHzh1nrxX3iiHJcT8xLFAD2xpE",
  authDomain: "e-store-9909c.firebaseapp.com",
  projectId: "e-store-9909c",
  storageBucket: "e-store-9909c.appspot.com",
  messagingSenderId: "472029866185",
  appId: "1:472029866185:web:d6a2ab63585f441122c518"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app)
const auth = getAuth(app)

export {fireDb,auth}
