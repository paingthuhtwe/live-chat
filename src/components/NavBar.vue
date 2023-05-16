<template>
  <nav>
    <div
      class="flex justify-between border-b border-slate-300 pb-3"
      v-if="user"
    >
      <div>
        <p class="text-lg font-semibold">Hi, {{ user.displayName }}</p>
        <p class="text-slate-500 font-semibold">
          Login as ( {{ user.email }} )
        </p>
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