import { useContext } from 'react';
import { FirebaseAuthContext } from '../context';

export default function useFirebaseAuth() {
  return useContext(FirebaseAuthContext);
}
