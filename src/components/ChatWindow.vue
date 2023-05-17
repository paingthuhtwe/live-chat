<template>
  <div
    class="w-[100%] h-[80vh] md:h-[65vh] overflow-y-auto bg-slate-50 border-b border-indigo-100"
    v-if="user"
    ref="chatWindow"
  >
    <div v-for="message in messages" :key="message">
      <ChatMessage :message="message" :user="user"></ChatMessage>
    </div>
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage";
import getMessages from "../composables/getMessages";
import getUser from "../composables/getUser";
import { onUpdated, ref } from "vue";

export default {
  components: { ChatMessage },
  setup() {
    let { messages } = getMessages();
    let { user } = getUser();
    let chatWindow = ref(null);

    // auto scrolling feature
    onUpdated(() => {
      if (chatWindow.value) {
        chatWindow.value.scrollTop = chatWindow.value.scrollHeight;
      }
    });

    return { messages, user, chatWindow };
  },
};
</script>

<style>
</style>