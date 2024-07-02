import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAE38InVm6Y4q0SygQiCibKMvyCuf1XG0",
  authDomain: "chat-app-c9852.firebaseapp.com",
  projectId: "chat-app-c9852",
  storageBucket: "chat-app-c9852.appspot.com",
  messagingSenderId: "768750861257",
  appId: "1:768750861257:web:f3ebd623fcf219042ac618",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
