<template>
  <nav>
    <div
      class="flex justify-between border-b border-slate-500 pb-3"
      v-if="user"
    >
      <div class="flex items-center">
        <router-link
          to="/profile"
          class="w-12 h-12 overflow-hidden rounded-full border-white border-4 mr-2 shadow cursor-pointer hover:shadow-indigo-400"
        >
          <img
            class="w-full h-auto"
            src="https://c8.alamy.com/comp/WP9AJE/side-profile-of-a-young-man-WP9AJE.jpg"
            alt=""
          />
        </router-link>
        <div>
          <router-link to="/profile" class="text-md font-semibold">{{
            user.displayName
          }}</router-link>
          <p class="text-slate-500 font-semibold text-sm">
            Login as ( {{ user.email }} )
          </p>
        </div>
      </div>
      <div>
        <button
          @click="logout"
          class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";

export default {
  setup() {
    let { logout } = useLogout();

    let { user } = getUser();

    return { logout, user };
  },
};
</script>

<style>
</style>