import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import Card from "@/components/global/card"
import Checkbox from "@/components/global/checkbox"
import Popup from "@/components/global/popup"
import FormErrors from "@/components/global/form-errors"
import "./scss/main.scss"

createApp(App)
  .component("Card", Card)
  .component("Checkbox", Checkbox)
  .component("Popup", Popup)
  .component("FormErrors", FormErrors)
  .use(router)
  .use(store)
  .mount('#app')
