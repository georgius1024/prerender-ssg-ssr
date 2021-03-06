import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  mounted: () => setTimeout(() => document.dispatchEvent(new Event('x-app-rendered')), 1000),
  store: new Vuex.Store(store)
}).$mount('#app')
