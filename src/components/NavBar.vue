<template>
  <nav>
    <div class="flex justify-between border-b border-slate-300 pb-3">
      <div>
        <p class="text-lg font-semibold">Hi, Paing Thu Htwe</p>
        <p class="text-slate-500 font-semibold">
          Login as ( paingthu@gmail.com )
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

export default {
  setup() {
    let { logout } = useLogout();
    return { logout };
  },
};
</script>

<style>
</style>