import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
// import GoogleAuth from '@/config/google.js'

Vue.config.productionTip = false

// const gauthOption = {
//   clientId: '643638695088-abgs8j26a2s3so67gnroh5606g2lp8je.apps.googleusercontent.com',
//   scope: 'profile email',
//   prompt: 'select_account'
// }
// Vue.use(GoogleAuth, gauthOption)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
