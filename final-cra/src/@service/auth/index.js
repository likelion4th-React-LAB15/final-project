import { getAuth } from "firebase/auth";
import app  from "@service/app";
import { getFirestore } from 'firebase/firestore';


export const db = getFirestore(app);
export const auth = getAuth(app);
auth.useDeviceLanguage();


export * from './useSignUp';
export * from './useSignIn';
export * from './useSignOut';
export * from './useAuthState';