import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDRdwFM4BCK5b5Z8mzEmiRI63fVZ_TcNcw",
  authDomain: "bbc-clone-e1c3d.firebaseapp.com",
  projectId: "bbc-clone-e1c3d",
  storageBucket: "bbc-clone-e1c3d.firebasestorage.app",
  messagingSenderId: "542727981636",
  appId: "1:542727981636:web:b2fc7f5cc040fdbaf40a11"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const goggleProvider = new GoogleAuthProvider(app)