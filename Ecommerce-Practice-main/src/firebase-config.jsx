import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTT7pASnWi8KgY-YCAkMxypDQS24yv5-4",
  authDomain: "ecommerce-f8b65.firebaseapp.com",
  projectId: "ecommerce-f8b65",
  storageBucket: "ecommerce-f8b65.appspot.com",
  messagingSenderId: "437745738342",
  appId: "1:437745738342:web:06dec29c817d88f0d2c3a7",
  measurementId: "G-9GDL070PH5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
