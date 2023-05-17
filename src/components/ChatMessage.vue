<template>
  <!-- message for sender start  -->
  <div class="mt-2 flex justify-end" v-if="message.userId === user.uid">
    <div class="w-72 md:w-96 lg:w-[540px] mr-2">
      <span class="float-right">
        <div>
          <span
            class="block px-4 py-[5.5px] bg-indigo-500 text-white font-medium rounded-md float-right"
            >{{ message.message }}</span
          >
        </div>
        <div>
          <span class="block text-sm font-medium text-slate-400 float-right">
            {{ formatDate(message.created_at) }}
          </span>
        </div>
      </span>
    </div>
    <div
      class="w-9 h-9 rounded-lg bg-red-300 flex justify-center items-center font-bold text-lg text-slate-600 cursor-pointer"
    >
      {{ message.userName.charAt(0) }}
    </div>
  </div>
  <!-- message for receivers start  -->
  <div class="mt-4 flex" v-else>
    <div
      class="w-9 h-9 rounded-lg bg-violet-400 mr-2 flex justify-center items-center font-bold text-lg text-slate-600 cursor-pointer"
    >
      {{ message.userName.charAt(0) }}
    </div>
    <div class="w-72 md:w-96 lg:w-[540px]">
      <p
        class="inline-block px-4 py-[5.5px] bg-indigo-500 text-white font-medium rounded-md"
      >
        {{ message.message }}
      </p>
      <span class="block text-sm font-medium text-slate-400">
        {{ formatDate(message.created_at) }}
      </span>
    </div>
  </div>
</template>

<script>
import getDate from "../composables/getDate";
export default {
  props: ["message", "user"],
  setup() {
    let { formatDate } = getDate();

    return { formatDate };
  },
};
</script>

<style>
</style>