import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBcv8w2n_zixOx0hnFi8rXtzC39L0yF8xM",
  authDomain: "fundingapp-27516.firebaseapp.com",
  databaseURL: "https://fundingapp-27516-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fundingapp-27516",
  storageBucket: "fundingapp-27516.firebasestorage.app",
  messagingSenderId: "640075994683",
  appId: "1:640075994683:web:630b6b97ac0fff8de7ae1e",
  measurementId: "G-MC2N52MYN2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage = getStorage(app);