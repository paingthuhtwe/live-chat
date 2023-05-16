<template>
  <div
    class="w-full md:w-[720px] lg:w-[1080px] mx-auto md:bg-white md:mt-12 rounded-lg md:shadow-sm p-3"
  >
    <div v-if="show">
      <LoginForm
        @show="show = !show"
        @enterChatroom="enterChatroom"
      ></LoginForm>
    </div>
    <div v-else>
      <SignupForm
        @show="show = !show"
        @enterChatroom="enterChatroom"
      ></SignupForm>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../firebase/config";
export default {
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    let show = ref(true);
    let router = useRouter();

    if (auth.currentUser) {
      router.push({ name: "ChatRoom" });
    }

    let enterChatroom = () => {
      router.push({ name: "ChatRoom" });
    };

    return { show, enterChatroom };
  },
};
</script>

<style>
</style>