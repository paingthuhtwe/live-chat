<template>
  <div class="mt-6 flex">
    <div class="mr-2 w-full">
      <form>
        <input
          type="text"
          class="bg-indigo-100 w-full rounded-md px-3 py-2 text-slate-900"
          placeholder="Hit enter to send"
          v-model="message"
          @keydown.enter.prevent="send"
        />
      </form>
    </div>
  </div>
</template>

<script>
import getUser from "../composables/getUser";
import { ref } from "vue";
import { timestamp } from "../firebase/config";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    let message = ref("");

    let { user } = getUser();

    let { error, addDoc } = useCollection("messages");

    let send = async () => {
      let chat = {
        message: message.value,
        userName: user.value.displayName,
        userId: user.value.uid,
        fav: false,
        favUsers: null,
        created_at: timestamp(),
      };
      message.value && (await addDoc(chat));
      message.value = "";
    };

    return { message, send };
  },
};
</script>

<style>
</style>