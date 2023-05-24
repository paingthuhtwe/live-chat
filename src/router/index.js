import { createRouter, createWebHistory, useRouter } from "vue-router";
import WelcomePage from "../views/WelcomePage";
import ChatRoom from "../views/ChatRoom";
import UserProfile from "../views/UserProfile";
import { auth } from "../firebase/config";

const routes = [
  {
    path: "/",
    name: "WelcomePage",
    component: WelcomePage,
    beforeEnter(to, from, next) {
      if (!auth.currentUser) {
        next();
      } else {
        next({ name: "ChatRoom" });
      }
    },
  },
  {
    path: "/chatroom",
    name: "ChatRoom",
    component: ChatRoom,
    beforeEnter(to, from, next) {
      if (auth.currentUser) {
        next();
      } else {
        next({ name: "WelcomePage" });
      }
    },
  },
  {
    path: "/profile",
    name: "UserProfile",
    component: UserProfile,
    beforeEnter(to, from, next) {
      if (auth.currentUser) {
        next();
      } else {
        next({ name: "WelcomePage" });
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
