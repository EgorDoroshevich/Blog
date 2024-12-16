import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { get, getDatabase, ref, remove } from "firebase/database";
import {
  getDatabase,
  ref as dbRef,
  remove,
  ref,
  update,
} from "firebase/database";
import { getStorage } from "firebase/storage";

console.log(process.env);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export default app;

export { app };
export const auth = getAuth(app);
export const database = getFirestore(app);
export const dbRealtime = getDatabase(app);
export const storage = getStorage(app);

export const deletePost = async (postKey: string): Promise<boolean> => {
  try {
    const postRef = ref(dbRealtime, `posts/${postKey}`);
    await remove(postRef);
    console.log(`Deleted post with key: ${postKey}`);
    return true; // Успех
  } catch (error) {
    console.error("Error deleting post:", error);
    return false; // Ошибка
  }
};

export const likeNum = async (
  postKey: string,
  like: number,
  likeStatus: boolean
): Promise<boolean> => {
  try {
    await update(ref(dbRealtime, `posts/${postKey}`), { like, likeStatus });
    return true;
  } catch (error) {
    console.error("Error updating like data:", error);
    return false;
  }
};

export const updatePost = async (
  postKey: string,
  updatedData: Partial<{
    title: string;
    text: string;
    image: string;
    date: string;
    name: string;
  }>
): Promise<boolean> => {
  try {
    const postRef = ref(dbRealtime, `posts/${postKey}`);
    await update(postRef, updatedData);
    console.log(`Updated post with key: ${postKey}`);
    return true; // Успех
  } catch (error) {
    console.error("Error updating post:", error);
    return false; // Ошибка
  }
};
