import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "@fortawesome/fontawesome-free/css/all.css"; // Import Font Awesome CSS

const app = createApp(App);

app.use(router);
app.mount("#app");
