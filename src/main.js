import Vue from 'vue'
import VueRouter from 'vue-router' ;
import App from './App.vue'
import router from './routes';
import VueFire from 'vuefire';
import store from './store/index';
 Vue.use(VueFire);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
