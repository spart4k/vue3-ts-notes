import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'

const app = (App).use(store).use(router).mount('#app')
app.use(PortalVue)
