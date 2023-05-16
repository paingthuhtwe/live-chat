import { ref } from "vue";
import { auth } from "../firebase/config";
import { useRouter } from "vue-router";

let useLogout = () => {
    let error = ref('');
    let router = useRouter();   
    let logout = async () => {
        try {
            await auth.signOut();
            // router.push({name: 'WelcomePage'});
        } catch (err) {
            error.value = err.message;
        }
    };

    return { logout };
};

export default useLogout;