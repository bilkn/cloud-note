import { useContext } from 'react';
import { FirebaseContext } from '../context';

export default function useFirebase() {
  return useContext(FirebaseContext);
}
