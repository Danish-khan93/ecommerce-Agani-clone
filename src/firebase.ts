// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";   //auth function import
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw6ghWhKhxQcYrCjhghBRopcu2bx5fM8o",
  authDomain: "ecommerce-4e45e.firebaseapp.com",
  projectId: "ecommerce-4e45e",
  storageBucket: "ecommerce-4e45e.appspot.com",
  messagingSenderId: "189753411348",
  appId: "1:189753411348:web:c3d83682d3f70e872de401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;