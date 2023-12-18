import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import VueSweetalert2 from 'vue-sweetalert2';

import AOS from 'aos'
import 'aos/dist/aos.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

AOS.init()
Vue.use(VueAxios, axios)
// Vue.use(VueSweetalert2)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
