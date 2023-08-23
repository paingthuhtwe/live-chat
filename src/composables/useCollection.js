import { ref } from "vue";
import { db } from "../firebase/config";

const useCollection = (name) => {
  const error = ref("");

  // add new document to firebase
  const addDoc = async (doc) => {
    try {
      const res = await db.collection(name).add(doc);
      if (!res) {
        throw new Error("Sorry, Can't reach your process!");
      }
      return res;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addDoc };
};

export default useCollection;
