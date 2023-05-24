<template>
  <div class="mt-6 flex">
    <div class="mr-2 w-full">
      <form>
        <label
          for="search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
          >Search</label
        >
        <div class="relative">
          <input
            type="search"
            id="search"
            class="block w-full p-3 text-sm text-slate-900 rounded-md bg-indigo-100 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Hit enter to send message"
            v-model="message"
            @keydown.enter.prevent="send"
            required
          />
          <button
            @click.prevent="send"
            class="text-white absolute right-1 bottom-1 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
          >
            Send
          </button>
        </div>
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