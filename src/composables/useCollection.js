import { ref } from "vue";
import { db } from "../firebase/config";

let useCollection = (name) => {
  let error = ref("");

  // add new document to firebase
  let addDoc = async (doc) => {
    try {
      let res = await db.collection(name).add(doc);
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
