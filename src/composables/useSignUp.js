import { ref } from "vue";
import { auth } from "../firebase/config";

let useSignUp = () => {
    let error = ref('');

    let createAccount = async (name, email, password) => {
        try {
            let res = await auth.createUserWithEmailAndPassword(email, password);
            if (!res) {
                throw new Error("Could not create new account!");
            }
            res.user.updateProfile({ displayName: name });
            return res;
        } catch (err) {
            error.value = err.message;
        }
    }

    return { error, createAccount };
}

export default useSignUp;