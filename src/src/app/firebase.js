import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgC86a1ErYC1GwhS97xTK5SGpTGcL5n3U",
    authDomain: "projectmain1-79c8f.firebaseapp.com",
    projectId: "projectmain1-79c8f",
    storageBucket: "projectmain1-79c8f.appspot.com",
    messagingSenderId: "234773732433",
    appId: "1:234773732433:web:849d0eac20dc2bb44d6c70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); /* Инициализация firebase хранилища с определенным id конфига */
const auth = getAuth(app); /* Информация об аутентификации пользователя */
const analytics = getAnalytics(app); /* Аналитика, она пока нам не нужна */
const provider = new GoogleAuthProvider(); /* Авторизация через google */
const providerFacebook = new FacebookAuthProvider(); /* Авторизация через Facebook */
const database = getFirestore(app); /* Информация об хранилище */

export {auth, provider, database, providerFacebook} /* Экспортируем нужные нам функции для проекта */


