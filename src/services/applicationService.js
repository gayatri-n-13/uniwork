import { db, storage, auth } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function submitApplication(job, fullname, email, file) {

  // 1. upload resume
  const fileRef = ref(storage, `resumes/${auth.currentUser.uid}/${file.name}`);
  await uploadBytes(fileRef, file);
  const resumeURL = await getDownloadURL(fileRef);

  // 2. create application entry
  await addDoc(collection(db, "applications"), {
    jobId: job.id,
    ownerId: job.ownerId,        // employer
    applicantId: auth.currentUser.uid, 
    fullname,
    email,
    resumeURL,
    jobTitle: job.title,
    status: "pending",
    appliedAt: Date.now(),
  });
}
