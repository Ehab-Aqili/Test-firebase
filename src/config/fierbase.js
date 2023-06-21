import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// what we need to import from fire base
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYAYe5cKynRuIlwWIYV7c_R6Ki8UrJRVw",
  authDomain: "finance-test-bb2ed.firebaseapp.com",
  projectId: "finance-test-bb2ed",
  storageBucket: "finance-test-bb2ed.appspot.com",
  messagingSenderId: "197072984184",
  appId: "1:197072984184:web:c03ec630f275c6fe49358d",
  measurementId: "G-N56ZYFE0NQ",
};

// export db to use it anywhere we need
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
