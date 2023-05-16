<template>
  <div class="my-12 w-[360px] mx-auto">
    <h2 class="text-center text-3xl font-semibold mb-4">Sign Up</h2>
    <form @submit.prevent="signUp">
      <label for="name" class="font-medium">Name</label>
      <input
        type="text"
        id="name"
        class="bg-slate-200 block w-full px-3 py-2 rounded-md mb-4"
        required
        v-model="name"
      />
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
        type="submit"
        class="w-full text-md font-bold text-slate-100 bg-blue-500 py-2 rounded-lg block mb-4"
      >
        Sign Up
      </button>
    </form>
    <div class="text-center my-4">
      Already have an account?
      <span
        class="hover:underline underline-offset-4 cursor-pointer text-blue-600"
        @click="$emit('show')"
        >Sign In</span
      >
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let name = ref("");
    let email = ref("");
    let password = ref("");
    let signUp = () => {
      console.log(name.value, email.value, password.value);
    };

    return { name, email, password, signUp };
  },
};
</script>

<style>
</style>