<template>
  <div class="my-12 w-[360px] mx-auto">
    <h2 class="text-center text-3xl font-semibold mb-4">Sing In</h2>
    <div v-if="error" class="text-center text-red-500 text-sm">
      {{ error }}
    </div>
    <form @submit.prevent="signIn">
      <label for="email" class="font-medium">Email</label>
      <input
        type="email"
        id="email"
        class="bg-slate-200 block w-full px-3 py-2 rounded-md mb-4"
        required
        v-model="email"
      />
      <label for="password" class="font-medium">Password</label>
      <input
        type="password"
        id="password"
        class="bg-slate-200 block w-full px-3 py-2 rounded-md mb-9"
        required
        v-model="password"
      />

      <button
        class="w-full text-md font-bold text-slate-100 bg-blue-500 py-2 rounded-lg block mb-4"
      >
        Sign In
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
export default {
  setup(props, context) {
    let email = ref("");
    let password = ref("");

    let { error, login } = useSignIn();

    let signIn = async () => {
      let res = await login(email.value, password.value);
      if (res) {
        context.emit("enterChatroom");
      }
    };

    return { email, password, signIn, error };
  },
};
</script>

<style>
</style>