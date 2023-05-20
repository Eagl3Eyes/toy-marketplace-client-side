// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGdNEC61cs_LuGC-MiDCDuj34mm5bwYEo",
  authDomain: "toyshop-ab938.firebaseapp.com",
  projectId: "toyshop-ab938",
  storageBucket: "toyshop-ab938.appspot.com",
  messagingSenderId: "351229495847",
  appId: "1:351229495847:web:8a2f45590c700cd9941c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;