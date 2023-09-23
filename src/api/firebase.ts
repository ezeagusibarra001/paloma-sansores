import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBCjvxG6p_QSpOEBNGsFo71iKaBOw-FD40",
  authDomain: "paloma-c8fa9.firebaseapp.com",
  projectId: "paloma-c8fa9",
  storageBucket: "paloma-c8fa9.appspot.com",
  messagingSenderId: "1073293763150",
  appId: "1:1073293763150:web:694d9b56f2bb1d72f8d91f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
};

export const authState = (callback: (arg0: any) => void) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);
    } else {
      callback(null);
    }
  });
};

export { auth };


