// Import the functions you need from the SDKs you need
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
  getDoc,
} from "firebase/firestore";
import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  deleteObject,
  StorageReference,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "paloma-c8fa9.firebaseapp.com",
  projectId: "paloma-c8fa9",
  storageBucket: "paloma-c8fa9.appspot.com",
  messagingSenderId: "1073293763150",
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();
const db = getFirestore(app);

const auth = getAuth(app);

export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
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

// GET ALL

export const getAll = async (col: string) => {
  const ref = collection(db, col);
  const snapshot = await getDocs(ref);
  const list = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return list;
};

// GET ONE BY ID BY COLLECTION

export const getById = async (col: string, id: any) => {
  const docRef = doc(db, col, id);
  const data = await getDoc(docRef);
  return data.data();
};

// DELETE ONE BY ID BY COLLECTION
export const deleteById = async (col: string, id: string) => {
  await deleteDoc(doc(db, col, id));
};

// ADD ONE BY COLLECTION

export const addData = async (col: string, data: any) => {
  const docRef = await addDoc(collection(db, col), data);
  return docRef.id;
};

// IMAGE UPLOAD

export const uploadImage = async (col: any, file: any) => {
  try {
    const storageRef = ref(storage, `${col}/id=${uniqueId()}`);
    await uploadBytes(storageRef, file);
    return getImageUrl(storageRef);
  } catch (error) {
    console.error(error);
  }
};

const getImageUrl = async (storageRef: StorageReference) => {
  const imageUrl = await getDownloadURL(storageRef);
  return imageUrl;
};

const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

export const deleteImage = async (url: string | undefined) => {
  const storageRef = ref(storage, url);
  try {
    await deleteObject(storageRef);
  } catch (error) {
    console.error(error);
  }
};

export { auth };
