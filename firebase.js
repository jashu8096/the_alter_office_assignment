// Import required Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtS9QfTT7aemEZ2RYYqEiyq7qK3ZMFOyc",
  authDomain: "the-alter-office-assignment.firebaseapp.com",
  projectId: "the-alter-office-assignment",
  storageBucket: "the-alter-office-assignment.firebasestorage.app",
  messagingSenderId: "500607212800",
  appId: "1:500607212800:web:c7408d852369014236a7e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export the initialized modules
export { auth, db };
