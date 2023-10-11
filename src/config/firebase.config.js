import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZP7xDk8op_DIZ0XiBAmFIWGEr-El3Bmw",
  authDomain: "portfolio-8967c.firebaseapp.com",
  projectId: "portfolio-8967c",
  storageBucket: "portfolio-8967c.appspot.com",
  messagingSenderId: "28813750678",
  appId: "1:28813750678:web:aca59702bd8deed5d7adb7"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    app,
    db
}