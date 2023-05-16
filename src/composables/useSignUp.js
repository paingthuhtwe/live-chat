import { ref } from "vue";
import { auth } from "../firebase/config";

let useSingUp = () => {
    let error = ref("");

    let createAccount = async( name, email, password ) => {
        try {
            let res = await auth.createUserWithEmailAndPassword(
              email,
              password
            );
    
            if (!res) {
              throw new Error("Could not create new user!");
            }
    
            // add name while sign up
            res.user.updateProfile({ displayName: name });
            return res;
          } catch (err) {
            error.value = err.message;
          }
    };

    return { error, createAccount };
}

export default useSingUp;