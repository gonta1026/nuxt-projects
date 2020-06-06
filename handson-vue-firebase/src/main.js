import Vue from 'vue'
import App from './App.vue'
import router from './router'
import createStore from './store'
import Vuesax from 'vuesax'

import 'material-icons/iconfont/material-icons.css'
import 'vuesax/dist/vuesax.css'
Vue.use(Vuesax)
Vue.config.productionTip = false

;(async () => {
  const store = await createStore()
  setTimeout(() => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }, 600)
})()
