// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from '../api.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import BootstrapVue, { BootstrapVueIcons } from 'bootstrap-vue'
Vue.config.productionTip = false
Vue.prototype.$http = api
Vue.use(VueAxios, axios)
Vue.use(Bootstrap)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
