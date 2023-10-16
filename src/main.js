import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import router from "./router";
import VueEasyLightbox from "vue-easy-lightbox";

createApp(App)
  .use(router)
  .use(Quasar, quasarUserOptions)
  .use(VueEasyLightbox)
  .mount("#app");
