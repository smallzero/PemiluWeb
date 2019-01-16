// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import SocialSharing from 'vue-social-sharing'
import Clipboard from 'v-clipboard'

import App from './components/App'
import router from './router'
import { http } from './services/http'
import store from '@/stores'

Vue.config.productionTip = false

Vue.use(SocialSharing)
Vue.use(Clipboard)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created() {
    http.init()
  }
})
