import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";
import vue3GoogleLogin from "vue3-google-login";

createApp(App)
  .use(router)
  .use(store)
  .use(vue3GoogleLogin, {
    clientId: process.env.VUE_APP_GOOGLE_AUTH_CLIENT_ID,
  })
  .mount("#app");
