import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from '@/plugins/i18n';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faLinkedin)
library.add(faGithub)
library.add(faLink)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
