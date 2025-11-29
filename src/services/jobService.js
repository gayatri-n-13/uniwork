import { db, auth } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addJob(job) {
  await addDoc(collection(db, "jobs"), {
    ...job,
    ownerId: auth.currentUser.uid,
    createdAt: Date.now(),
  });
}

export async function getAllJobs() {
  const snap = await getDocs(collection(db, "jobs"));
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
