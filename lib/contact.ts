import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

interface ContactData {
  email: string;
  content: string;
  contactType: string;
  name: string;
}

export const submitContact = async (contactData: ContactData) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      ...contactData,
      submittedAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Failed to submit contact");
  }
};
