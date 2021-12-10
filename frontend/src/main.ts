import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

declare global {
    interface Window { sdk: any }
}

const app = createApp(App)

app.use(ElementPlus)
.use(store)
.use(router)
.mount('#app')
