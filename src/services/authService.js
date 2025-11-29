import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export async function registerUser(name, email, password) {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);

  // add display name
  await updateProfile(userCred.user, { displayName: name });

  // store user details in Firestore
  await setDoc(doc(db, "users", userCred.user.uid), {
    name,
    email,
    createdAt: Date.now(),
  });

  return userCred.user;
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
