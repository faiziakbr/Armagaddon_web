import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import Axios from 'axios'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
});

Vue.prototype.$http = Axios;
const token = localStorage.getItem('token');

var config = {
  apiKey: 'AIzaSyBXSQ2Hc_0VpPxzvHblgxiUtl1LHRbukBM',
  authDomain: 'fir-demo-ede73.firebaseapp.com',
  databaseURL: 'https://fir-demo-ede73.firebaseio.com',
  projectId: 'fir-demo-ede73',
  storageBucket: 'fir-demo-ede73.appspot.com',
  messagingSenderId: '638667263227'
}

firebase.initializeApp(config)
export const db = firebase.database()
export const signalRefrance = db.ref('signals')

if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = "Bearer "+token;
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
