import { ref } from "vue";
import { auth } from "../firebase/config";

let useSignIn = () => {
  let error = ref("");

  let login = async (email, password) => {
    try {
      let res = await auth.signInWithEmailAndPassword(email, password);
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
