import '@firebase/firestore';
import { db } from '../lib/firebase.dev';

const createUserData = () => {
  return {
    profile: { name: '', picture: null, bio: '' },
    notes: [],
    deleted: [],
  };
};

export const initUser = async (id) => {
   db.collection('users').doc(id).set(createUserData());
};

export const getDoc = async (id) => {
  const doc = await db.collection('users').doc(id).get();
  return doc.exist ? doc : null;
};

export const get = async (id) => {
  const doc = await getDoc(id);
  return doc ? doc.data() : null;
};
