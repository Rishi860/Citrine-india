import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import GoogleAuth from '@/config/google_oAuth.js'
import Admin from './components/Admin'
import Dashboard from './views/user/Dashboard.vue'
import AdminUserView from './views/admin/Users/ViewUser.vue'
import {sync} from 'vuex-router-sync'
import store from './store/store'
import Vuelidate from 'vuelidate'
// import ScrollAnimation from './directives/scrollanimation'

Vue.config.productionTip = false

// Vue.directive('scrollanimation', ScrollAnimation)
Vue.component('admin', Admin)
Vue.component('dashboard', Dashboard)
Vue.component('adminuser', AdminUserView)
sync(store, router)
Vue.use(Vuelidate)

const gauthOption = {
  clientId: '643638695088-abgs8j26a2s3so67gnroh5606g2lp8je.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GoogleAuth, gauthOption)

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
