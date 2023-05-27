<template>
  <div
    v-if="message"
    class="block px-6 py-3 text-white text-lg font-semibold rounded-md text-center absolute top-5 right-5"
    :class="{
      'bg-red-500': danger,
      'bg-green-500': !danger,
    }"
  >
    {{ message }}
  </div>

  <div
    v-if="user"
    class="w-full h-[100vh] md:w-[720px] lg:w-[1080px] mx-auto bg-white md:mt-12 md:rounded-lg shadow-sm"
  >
    <div class="w-full h-48 bg-indigo-300 md:rounded-t-lg"></div>
    <div class="p-3 relative">
      <div
        @click="profile = !profile"
        class="w-40 h-40 overflow-hidden rounded-full border-[5px] border-white absolute -top-20 left-3 cursor-pointer"
        :class="{
          'w-full h-auto border-[0px] rounded-sm left-[0px] top-[-192px] md:px-[200px] z-10 p-5':
            profile,
        }"
      >
        <img class="w-full h-auto" :src="img_url" alt="" v-if="img_url" />
        <img
          class="w-full h-auto"
          src="https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
          alt=""
          v-else
        />
      </div>
      <div class="mt-24">
        <h1 class="text-2xl font-semibold text-slate-600 flex items-center">
          {{ user.displayName }}
          <span
            class="inline-block w-3 ml-2 h-3 bg-green-600 rounded-full"
          ></span>
        </h1>
        <p class="text-slate-600 text-md mt-1">0 Followers</p>
        <!-- upload profile picture  -->
        <div class="mt-5">
          <label
            class="block mb-2 text-sm font-medium text-slate-600"
            for="file_input"
            >Upload Profile Picture</label
          >
          <div class="flex items-center h-7">
            <input
              class="block w-90 h-full text-sm text-gray-900 cursor-pointer bg-slate-200"
              id="file_input"
              ref="image"
              type="file"
            />
            <button
              @click="upload"
              class="bg-gray-500 text-white h-full font-semibold px-3 rounded-r-md hover:bg-gray-600"
            >
              Upload
            </button>
          </div>
        </div>
        <!-- action -->
        <div class="mt-5">
          <router-link
            to="/chatroom"
            class="border-2 px-3 py-1 rounded-md hover:border-blue-600 hover:bg-blue-600 hover:text-white"
            >Chat Room</router-link
          >
          <button
            class="border-2 border-blue-600 bg-blue-600 text-white px-4 py-1 rounded-md ml-2 opacity-50 cursor-not-allowed"
            disabled
          >
            Follow
          </button>
        </div>
        <div class="mt-5">
          <button
            @click="logout"
            class="border-2 border-red-500 bg-red-500 text-white px-3 py-1 rounded-md hover:border-red-600 hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
  <div
    class="opacity-[80%] w-full h-full bg-slate-900 block absolute top-0 left-0"
    v-if="profile"
    @click.self="profile = !profile"
  ></div>
</template>

<script>
import getUser from "@/composables/getUser";
import useLogout from "@/composables/useLogout";
import { onMounted, onUpdated, ref } from "vue";
import { db, storage } from "../firebase/config";
import {
  ref as storageReference,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import App from "@/App.vue";

export default {
  components: { App },
  setup() {
    var { user } = getUser();
    var image = ref(null);
    var message = ref(null);
    var img_url = ref(null);
    var danger = ref(null);
    var profile = ref(null);

    var upload = () => {
      if (image.value.files.length === 0) {
        message.value = "Please select an image.";
        danger.value = true;
        return;
      }

      const storageRef = storageReference(
        storage,
        `profile/${image.value.files[0].name}`
      );
      uploadBytes(storageRef, image.value.files[0])
        .then(() => {
          message.value = "Successfully uploaded profile picture!";
          danger.value = null;
          user.value.updateProfile({ photoURL: image.value.files[0].name });
          getDownloadURL(storageRef)
            .then((url) => {
              img_url.value = url;
              db.collection("users").map((user) => user.userId === user);
              // please write update code in here for img_url update in db.collection('users)
              // mark:: users.uid not equal to auth.uid, users.userId equal to auth.uid
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(() => {
      if (user.value.photoURL) {
        let url = user.value.photoURL.includes("http");
        console.log(url);
        if (url) {
          img_url.value = user.value.photoURL;
        } else {
          const storageRef = storageReference(
            storage,
            `profile/${user.value.photoURL}`
          );
          getDownloadURL(storageRef).then((url) => (img_url.value = url));
        }
      }
    });

    var { logout } = useLogout();

    onUpdated(() => {
      message.value &&
        setTimeout(() => {
          message.value = null;
        }, 5000);
    });

    return { user, logout, image, upload, message, img_url, danger, profile };
  },
};
</script>

<style>
</style>
