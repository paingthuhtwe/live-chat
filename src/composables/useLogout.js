import { ref } from "vue";
import { auth } from "../firebase/config";
import { useRouter } from "vue-router";

const useLogout = () => {
  const error = ref("");
  const router = useRouter();
  const logout = async () => {
    try {
      await auth.signOut();
      router.push({ name: "WelcomePage" });
    } catch (err) {
      error.value = err.message;
    }
  };

  return { logout };
};

export default useLogout;
