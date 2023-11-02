import { createApp } from "vue";
import App from "./App.vue";
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import router from "./router";
import VueEasyLightbox from "vue-easy-lightbox";

import hljs from "highlight.js/lib/core";
import gcode from "highlight.js/lib/languages/gcode";
import hljsVuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage("gcode", gcode);

createApp(App)
  .use(router)
  .use(Quasar, quasarUserOptions)
  .use(VueEasyLightbox)
  .use(hljsVuePlugin)
  .mount("#app");
