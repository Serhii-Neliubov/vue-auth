import { createRouter, createWebHistory } from "vue-router";
import Login from "../viewes/Login.vue";
import Signup from "../viewes/Signup.vue";
import ForgotPassword from "../viewes/ForgotPassword.vue";

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
  {
    path: '/forgot-password',
    component: ForgotPassword,
    name: "ForgotPassword",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;