import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store, key } from "@/store";
import "@/style.css";
import "@/assets/simple-grid.scss";
import VueUniversalModal from "vue-universal-modal";

createApp(App)
  .use(store, key)
  .use(router)
  .use(VueUniversalModal, {
    teleportTarget: "#modals",
  })
  .mount("#app");
