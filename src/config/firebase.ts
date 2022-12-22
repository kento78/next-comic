import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2M7qbHJFEzyCbL55wpXy48qsYhRFQG3E",
  authDomain: "manga-60070.firebaseapp.com",
  projectId: "manga-60070",
  storageBucket: "manga-60070.appspot.com",
  messagingSenderId: "334396807307",
  appId: "1:334396807307:web:4507efa6a5f9cb7f215c8e",
  measurementId: "G-1KS2XY9Q51",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const githubProvider = new GithubAuthProvider();
