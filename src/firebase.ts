import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase, ref, remove } from "firebase/database";

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

export const deletePost = async (postId: any) => {
  try {
    const postRef = ref(dbRealtime, `posts/${postId}`); // Указываем путь к посту
    remove(postRef); // Удаляем пост
    console.log(` delete post ${postId}`);
  } catch (error) {
    console.error("Error deleting post:", error);
    // throw error; // Можно выбросить ошибку для обработки ее в вызывающем коде
  }
};
