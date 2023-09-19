import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJWPDozw1wedlbcq-AVg29-gdOgfM08Rw",
  authDomain: "paloma-sansores.firebaseapp.com",
  projectId: "paloma-sansores",
  storageBucket: "paloma-sansores.appspot.com",
  messagingSenderId: "636478822291",
  appId: "1:636478822291:web:0ec670e1621457ca62ba66"
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


