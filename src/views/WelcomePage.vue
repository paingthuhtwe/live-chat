<template>
  <div
    class="w-full md:w-[720px] lg:w-[1080px] mx-auto bg-white mt-12 rounded-lg shadow-sm p-3"
  >
    <div v-if="show">
      <LoginForm @show="show = !show"></LoginForm>
    </div>
    <div v-else>
      <SignupForm @show="show = !show"></SignupForm>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { ref } from "vue";
export default {
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    let show = ref(false);

    return { show };
  },
};
</script>

<style>
</style>