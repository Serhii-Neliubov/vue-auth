import { createRouter, createWebHistory } from "vue-router";
import Splash from "../viewes/Splash.vue";

const routes = [
  { path: '/', component: Splash },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
