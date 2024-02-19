import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router/router.ts";
import './style.scss';

const app = createApp(App);
export const API_URL = 'http://localhost:5000';

app.use(router);

app.mount('#app');
