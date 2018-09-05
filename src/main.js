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
Vue.prototype.changeSex=function(sex){
   if (sex=="男") {
	     	  sex="男"
	     }
	     else if (sex=="女") {
	     	 sex="女"
	     }
	     else{
	     	 sex=""
	     }
	     return sex;
};
Vue.prototype.changeRole=function(role){
	     if (role=="ROLE_ADMIN") {
	     	  role="管理员"
	     }
	     else if (role=="ROLE_XIAO_SHOU") {
	     	 role="销售"
	     }
	     else{
	     	 role=""
	     }
	     return role;
};
Vue.prototype.changeArea=function(area){
	     if (area=="柳州") {
	     	  area="柳州"
	     }
	     else if (area=="贺州") {
	     	 area="贺州"
	     }
	     else{
	     	 area=""
	     }
	     return area;
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
