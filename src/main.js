import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/scss/vendors/_icon.scss";
import router from './router'


createApp(App).use(router).mount("#app");
