import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import Card from "@/components/global/card"
import Checkbox from "@/components/global/checkbox"
import "./scss/main.scss"

createApp(App)
  .component("Card", Card)
  .component("Checkbox", Checkbox)
  .use(router)
  .mount('#app')
