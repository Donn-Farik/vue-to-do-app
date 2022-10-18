import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDJIUj1slAarwLxy51NhEejiG102LbApwQ",
  authDomain: "todo-app-b6c79.firebaseapp.com",
  projectId: "todo-app-b6c79",
  storageBucket: "todo-app-b6c79.appspot.com",
  messagingSenderId: "285225976161",
  appId: "1:285225976161:web:c04976ab71b119c64ec520",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
