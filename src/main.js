import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import vue3GoogleLogin from "vue3-google-login";
import { TOAST_VISIBILITY_DURATION, TOAST_THEME } from "./utils/constants";

import Vue3Toasity from "vue3-toastify";
import "vue3-toastify/dist/index.css";

createApp(App)
  .use(router)
  .use(store)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_GOOGLE_AUTH_CLIENT_ID,
  })
  .use(Vue3Toasity, {
    autoClose: TOAST_VISIBILITY_DURATION,
    theme: TOAST_THEME,
  })
  .mount("#app");
