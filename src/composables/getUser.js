import { ref } from "vue";
import { auth } from "../firebase/config";

const getUser = () => {
  const user = ref(auth.currentUser);

  auth.onAuthStateChanged((_user) => {
    user.value = _user;
  });

  return { user };
};

export default getUser;
