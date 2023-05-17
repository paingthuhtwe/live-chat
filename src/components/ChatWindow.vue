<template>
  <div
    class="w-[100%] h-[80vh] md:h-[65vh] overflow-y-auto scroll-hide"
    v-if="user"
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

export default {
  components: { ChatMessage },
  setup() {
    let { messages } = getMessages();
    let { user } = getUser();

    return { messages, user };
  },
};
</script>

<style>
</style>