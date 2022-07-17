import { createApp } from 'vue'
import pinia from './plugins/pinia.js'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { registerSW } from 'virtual:pwa-register'

// 註冊 service worker 觸發更新
registerSW({
  onNeedRefresh() { },
  onOfflineReady() { }
})()

loadFonts()

createApp(App)
  .use(pinia)
  .use(router)
  .use(vuetify)
  .mount('#app')
