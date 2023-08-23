import { ref } from "vue";
import { auth } from "../firebase/config";

const useSignIn = () => {
  const error = ref("");

  const login = async (email, password) => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Can't login with your account!");
      }
      return res;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, login };
};

export default useSignIn;
