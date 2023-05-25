<template>
  <div
    class="w-full md:w-[720px] lg:w-[1080px] mx-auto bg-white md:mt-12 md:rounded-lg shadow-sm p-1 md:p-6"
  >
    <NavBar></NavBar>
    <ChatWindow></ChatWindow>
    <ChatFrom></ChatFrom>
  </div>
</template>

<script>
import ChatFrom from "../components/ChatFrom";
import { watch } from "vue";
import ChatWindow from "../components/ChatWindow";
import NavBar from "../components/NavBar";
import { useRouter } from "vue-router";
import getUser from "../composables/getUser";
export default {
  components: {
    ChatFrom,
    ChatWindow,
    NavBar,
  },
  setup() {
    let { user } = getUser();
    let router = useRouter();
    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style>
</style>