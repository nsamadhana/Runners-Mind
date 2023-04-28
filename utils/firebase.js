// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//const firebaseConfig = {
  //apiKey: process.env.NEXT_PUBLIC_API_KEY,
 // authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  //projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  //storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  //messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_I,
  //appId: process.env.NEXT_PUBLIC_APP_ID
//};
const firebaseConfig = {
  apiKey: "AIzaSyD3Doj2TEUlkejW0OPum7DmUCEt-kM0tvc",
  authDomain: "runners-mind.firebaseapp.com",
  projectId: "runners-mind",
  storageBucket: "runners-mind.appspot.com",
  messagingSenderId: "121060581075",
  appId: "1:121060581075:web:dcb0ed47ec4d48dc317e26"
};

//Adding appName gets past app already initialized error but now isn't reading the config correctly at all 
const app = initializeApp(firebaseConfig);
console.log("initialized firebase application with config");
export const auth = getAuth(app);
//export const db = getFirestore(app);