import { createRouter, createWebHistory } from "vue-router";
import Login from "../viewes/Login.vue";
import Signup from "../viewes/Signup.vue";

const routes = [
  {
    path: '/',
    component: Login,
    name: "Login",
  },
  {
    path: '/signup',
    component: Signup,
    name: "Signup",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;