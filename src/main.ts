import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { key, store } from "@/store";
import "@/style.css";
import "@/assets/simple-grid.scss";
import VueUniversalModal from "vue-universal-modal";
import { VueReCaptcha } from "vue-recaptcha-v3";

createApp(App)
  .use(store, key)
  .use(router)
  .use(VueUniversalModal, {
    teleportTarget: "#modals",
  })
  .use(VueReCaptcha, { siteKey: "6LclBZAiAAAAAJuX1n4i-lfWciUg5lcmglADGlIH" })
  .mount("#app");
