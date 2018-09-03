// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import './assets/style/base.css'
import util from '../src/util/util.js'

Vue.config.productionTip = false
export const baseURL = 'http://192.168.3.101:8010/slbapi';
Vue.use(ElementUI);
Vue.prototype.$util = util
Vue.prototype.$axios=axios;
Vue.prototype.$baseURL=baseURL;

Vue.prototype.changeRole=function(role){
	     
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
