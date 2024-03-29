import { ref } from "vue";
import { db } from "../firebase/config";

const getMessages = () => {
  const error = ref("");
  const messages = ref();

  try {
    db.collection("messages")
      .orderBy("created_at", "asc")
      .onSnapshot((snap) => {
        messages.value = snap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });
  } catch (err) {
    error.messages = err.message;
  }

  return { messages };
};

export default getMessages;
