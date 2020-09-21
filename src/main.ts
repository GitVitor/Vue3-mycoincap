import { createApp } from "vue";
import "bulma";

import { router } from "./router/router";
import App from "./App.vue";

createApp(App)
  .use(router)
  .mount("#app");
