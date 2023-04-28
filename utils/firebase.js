// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const testing = {
  appName: "Runners-Mind",
  apiKey: "AIzaSyD3Doj2TEUlkejW0OPum7DmUCEt-kM0tvc",
  authDomain: "runners-mind.firebaseapp.com",
  projectId: "runners-mind",
  storageBucket: "runners-mind.appspot.com",
  messagingSenderId: "121060581075",
  appId: "1:121060581075:web:dcb0ed47ec4d48dc317e26"
};

//Adding appName gets past app already initialized error but now isn't reading the config correctly at all 
const app = initializeApp(testing);
console.log(app.appName);
export const auth = getAuth(app);
export const db = getFirestore(app);