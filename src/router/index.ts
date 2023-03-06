import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Chat from "../views/Chat.vue";

const history = createWebHistory("/GymBookSystem/");

const routes = [
  { path: "/", component: Login },
  { path: "/chat", component: Chat },
];

const router = createRouter({
  history,
  routes,
});

export default router;
