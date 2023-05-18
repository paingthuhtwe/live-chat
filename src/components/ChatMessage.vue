<template>
  <!-- message for sender start  -->
  <div class="mt-2 flex justify-end" v-if="message.userId === user.uid">
    <div class="w-72 md:w-96 lg:w-[540px] mr-2">
      <span class="float-right">
        <div>
          <span
            @dblclick="Fav(message)"
            class="block px-3 py-[5.5px] bg-indigo-500 text-white font-medium rounded-md float-right relative"
            >{{ message.message }}
            <!-- start for fav icon  -->
            <span
              v-if="message.fav"
              class="flex bg-slate-50 rounded-full p-[2px] shadow absolute -bottom-2 -left-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="red"
                class="w-[13px]"
              >
                <path
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
              <span
                v-if="message.favUsers.length > 1"
                class="text-xs w-[13px] flex justify-center items-center text-slate-800"
              >
                {{ message.favUsers.length }}
              </span>
            </span>
            <!-- end for fav icon  -->
          </span>
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
        @dblclick="Fav(message)"
        class="inline-block px-3 py-[5.5px] bg-indigo-500 text-white font-medium rounded-md relative"
      >
        {{ message.message }}
        <!-- start for fav icon  -->
        <span
          v-if="message.fav"
          class="flex justify-center items-center bg-slate-50 rounded-full p-[2px] shadow absolute -bottom-2 -right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="red"
            class="w-[13px]"
          >
            <path
              d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
            />
          </svg>
          <span
            v-if="message.favUsers.length > 1"
            class="text-xs w-[13px] flex justify-center items-center text-slate-800"
          >
            {{ message.favUsers.length }}
          </span>
        </span>
        <!-- end for fav icon  -->
      </p>

      <span class="block text-sm font-medium text-slate-400">
        {{ formatDate(message.created_at) }}
      </span>
    </div>
  </div>
</template>

<script>
import getDate from "../composables/getDate";
import addFav from "../composables/addFav";
export default {
  props: ["message", "user"],
  setup() {
    let { formatDate } = getDate();

    let { Fav } = addFav();

    return { formatDate, Fav };
  },
};
</script>

<style>
</style>