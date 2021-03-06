import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import './assets/reset.css'


import fastClick from 'fastclick'
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
