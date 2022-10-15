import { createPinia } from "pinia";
import { createApp } from "vue";

import "animate.css";
import "tw-elements";
import App from "./App.vue";
import router from "./router";
// import "./assets/main.css";
import "./index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
