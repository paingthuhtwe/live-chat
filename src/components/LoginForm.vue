<template>
  <div class="my-12 w-[320px] md:w-[360px] mx-auto">
    <h2 class="text-center text-3xl font-semibold mb-4">Sign In</h2>
    <div v-if="error" class="text-center text-red-500 text-sm">
      {{ error }}
    </div>
    <form @submit.prevent="signIn">
      <label for="email" class="font-medium">Email</label>
      <input
        type="email"
        id="email"
        class="bg-white md:bg-slate-200 block w-full px-3 py-2 rounded-md mb-4"
        required
        v-model="email"
      />
      <label for="password" class="font-medium">Password</label>
      <input
        type="password"
        id="password"
        class="bg-white md:bg-slate-200 block w-full px-3 py-2 rounded-md mb-9"
        required
        v-model="password"
      />

      <button
        class="w-full text-md font-bold text-slate-100 bg-blue-500 py-2 rounded-lg block mb-4"
      >
        Sign In
      </button>
      <button
        @click.prevent="handleGoogle"
        class="w-full text-md font-bold text-slate-700 bg-blue-50 hover:bg-blue-100 border py-2 rounded-lg mb-4 flex items-center justify-center"
      >
        <img
          class="w-7 h-auto mr-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1176px-Google_%22G%22_Logo.svg.png?20230305195327"
          alt=""
        />
        Sign In with Google
      </button>
    </form>
    <div class="text-center my-4">
      Don't have an account?
      <span
        class="hover:underline underline-offset-4 cursor-pointer text-blue-600"
        @click="$emit('show')"
        >Sign Up</span
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import useSignIn from "../composables/useSignIn";
import {
  provider,
  getAuth,
  singInWithPopup,
  signInWithPopup,
} from "../firebase/config";
import { useRouter } from "vue-router";

export default {
  setup(props, context) {
    let email = ref("");
    let password = ref("");
    let router = useRouter();

    let { error, login } = useSignIn();

    let signIn = async () => {
      let res = await login(email.value, password.value);
      if (res) {
        context.emit("enterChatroom");
      }
    };

    let handleGoogle = () => {
      const auth = getAuth();
      signInWithPopup(auth, provider).then((result) => {
        if (result) {
          router.push("/chatroom");
          // let urlResult = result.user.photoURL.includes("http");
          // urlResult ? (result.user.photoURL = "") : false;
        }
      });
    };

    return { email, password, signIn, error, handleGoogle };
  },
};
</script>

<style>
</style>