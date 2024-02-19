import { createApp } from "vue";
import App from "./App.vue";
import './style.scss';
import router from "./router/router.ts";
import BackButton from "./components/BackButton.vue";

const app = createApp(App);

app.component('base-button', BackButton)

app.use(router);
app.mount('#app');
