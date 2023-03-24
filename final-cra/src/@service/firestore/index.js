import app from '../app';
import { getFirestore } from 'firebase/firestore';

export const db = getFirestore(app);

export * from './useCreateAuthUser';
export * from './useCreateData';
export * from './useDataState';