import { initializeApp } from "firebase/app";

const cra = process.env;

const firebaseConfig = {
  apiKey: cra.REACT_APP_API_KEY,
  authDomain: cra.REACT_APP_AUTH_DOMAIN,
  projectId: cra.REACT_APP_PROJECT_ID,
  storageBucket: cra.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: cra.REACT_APP_MESSAGE_SENDER_ID,
  appId: cra.REACT_APP_APP_ID,
};

export default initializeApp(firebaseConfig);