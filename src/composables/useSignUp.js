import { ref } from "vue";
import { auth } from "../firebase/config";
import useCollection from "./useCollection";

let useSignUp = () => {
  let error = ref("");

  let { addDoc } = useCollection("users");

  let createAccount = async (name, email, password) => {
    try {
      let res = await auth.createUserWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Could not create new account!");
      }
      await res.user.updateProfile({ displayName: name });
      let userInfo = {
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
