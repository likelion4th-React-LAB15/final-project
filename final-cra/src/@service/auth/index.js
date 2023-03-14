import { getAuth } from "firebase/auth";
import app  from "@service/app";

export const auth = getAuth(app);
auth.useDeviceLanguage();

export * from './useSignUp';
export * from './useSignIn';
export * from './useSignOut';
export * from './useAuthState';