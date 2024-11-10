// firebaseConfig.js or firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: "AIzaSyAlTdLh30w4wX9JVbYV3U1iwLa7Aw_mf2w",
  // authDomain: "safenet-bdbd9.firebaseapp.com",
  // projectId: "safenet-bdbd9",
  // storageBucket: "safenet-bdbd9.appspot.com",
  // messagingSenderId: "235045164542",
  // appId: "1:235045164542:web:7bee50b36e2bc2866bdcaf",
  apiKey: "AIzaSyBL-qoLONSBQgrXemscykcqUnnMjxG5Ors",
  authDomain: "acme-735a8.firebaseapp.com",
  projectId: "acme-735a8",
  storageBucket: "acme-735a8.appspot.com",
  messagingSenderId: "94456368206",
  appId: "1:94456368206:web:15fa3e0ffea253eefac71f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth and Storage
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
