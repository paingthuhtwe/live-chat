import { ref } from "vue";
import { auth } from "../firebase/config";
import useCollection from "./useCollection";

const useSignUp = () => {
  const error = ref("");

  const { addDoc } = useCollection("users");

  const createAccount = async (name, email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Could not create new account!");
      }
      await res.user.updateProfile({ displayName: name });
      const userInfo = {
        name: name,
        email: email,
        photoURL: null,
        userId: res.user.uid,
      };
      await addDoc(userInfo);
      return res;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, createAccount };
};

export default useSignUp;
