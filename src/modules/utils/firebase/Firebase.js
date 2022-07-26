import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBzq8BoxtcdQ4kc9EM1UHJlx3qOpHD0xtw',
  authDomain: 'ecommerce-crwn-clothing-67d9f.firebaseapp.com',
  projectId: 'ecommerce-crwn-clothing-67d9f',
  storageBucket: 'ecommerce-crwn-clothing-67d9f.appspot.com',
  messagingSenderId: '435212443633',
  appId: '1:435212443633:web:5e50c126db70d9e9472e50',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
// Для вибору акаунту з якого зробиться вхід
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Підключаємося до бази данних цього стора, без цього не зможемо отримати або встановлювати дані
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  // doc(екземпляр бази данних, колекція, ідентифікатор)
  const userDocRef = doc(db, 'users', userAuth.uid);
  // Така Фігня, з допомогою якої ми зможемо дізнатися чи є в базі данних такий користувач
  const userSnapshot = await getDoc(userDocRef);

  // Якщо користувача в базі данних не знайдено, то..
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    const allData = {
      displayName,
      email,
      createdAt,
      ...additionalInfo,
    };

    try {
      // Створюємо документ, в userDocRef записуємо об'єкт з потрібними данними
      await setDoc(userDocRef, allData);
    } catch (err) {
      console.log('Error in creating the user', err.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};