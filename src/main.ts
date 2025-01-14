import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import mdiVue from "mdi-vue/v3";
import {
  mdiBookmarkOutline,
  mdiPrinter,
  mdiOpenInNew,
  mdiAlertOutline,
  mdiCheckboxMultipleMarkedOutline,
  mdiCheckboxMultipleBlankOutline,
} from "@mdi/js";
import ClickToCopy from "@/components/ClickToCopy.vue";
import ToolTip from "@/components/ToolTip.vue";
import ErgoLogo from "@/components/ErgoLogo.vue";
import "windi.css";
import "@/assets/styles";

const navLang = navigator.language.split("-")[0];
const messages = {
  en: require("@/locales/en.json"),
  pt: require("@/locales/pt.json"),
  zh: require("@/locales/zh.json"),
};

const i18n = createI18n({
  locale: Object.keys(messages).includes(navLang) ? navLang : "en",
  fallbackLocale: "en",
  messages,
});

createApp(App)
  .use(i18n)
  .use(mdiVue, {
    icons: {
      mdiBookmarkOutline,
      mdiPrinter,
      mdiOpenInNew,
      mdiAlertOutline,
      mdiCheckboxMultipleBlankOutline,
      mdiCheckboxMultipleMarkedOutline,
    },
  })
  .component("ClickToCopy", ClickToCopy)
  .component("ToolTip", ToolTip)
  .component("ErgoLogo", ErgoLogo)
  .mount("#app");
