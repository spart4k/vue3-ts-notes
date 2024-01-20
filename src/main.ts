import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// import store from './store'
// import PortalVue from 'portal-vue'
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)
console.log(App)
// const app = App.use(router).mount('#app')
createApp(App).use(router).mount('#app')
// app.use(PortalVue)
