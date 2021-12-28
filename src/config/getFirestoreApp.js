import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC-iFMeksfSP43voso4CF67BmH3yj2ds28",
  authDomain: "do-nuts.firebaseapp.com",
  projectId: "do-nuts",
  storageBucket: "do-nuts.appspot.com",
  messagingSenderId: "397663549418",
  appId: "1:397663549418:web:44c996b70e537c32c2e493"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}