import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([faStar, faComment, faHeart])
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  created(){
    this.$store.dispatch('fetchFeedbacks')
  },
  store,
  render: h => h(App)
}).$mount('#bl-feedback-app')
