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
          <img class="w-full h-auto" :src="img_url" alt="" v-if="img_url" />
          <img
            class="w-full h-auto"
            src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
            alt=""
            v-else
          />
        </router-link>
        <div>
          <router-link to="/profile" class="text-md font-semibold">{{
            user.displayName
          }}</router-link>
          <p class="text-slate-500 font-semibold text-sm">
            <span class="hidden"> Login as </span>{{ user.email }}
          </p>
        </div>
      </div>
      <div class="flex items-center">
        <button
          @click="logout"
          class="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md font-semibold text-sm md:text-lg"
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
import { onMounted, ref } from "vue";
import { ref as storageReference, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config";

export default {
  setup() {
    let { logout } = useLogout();

    let { user } = getUser();

    let img_url = ref(null);

    onMounted(() => {
      if (user.value.photoURL) {
        let url = user.value.photoURL.includes("http");
        if (url) {
          img_url.value = user.value.photoURL;
        } else {
          const storageRef = storageReference(
            storage,
            `profile/${user.value.photoURL}`
          );
          try {
            getDownloadURL(storageRef).then((url) => {
              img_url.value = url;
              return url;
            });
          } catch (err) {
            console.log(err);
          }
        }
      }
    });

    return { logout, user, img_url };
  },
};
</script>

<style>
</style>