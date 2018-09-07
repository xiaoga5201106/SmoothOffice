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
Vue.prototype.changeDate=function(date, fmt){
      date = date == undefined ? new Date() : date;
		    date = typeof date == 'number' ? new Date(date) : date;
		    fmt = fmt || 'yyyy-MM-dd HH:mm:ss';
		    var obj =
		    {
		        'y': date.getFullYear(), // 年份，注意必须用getFullYear
		        'M': date.getMonth() + 1, // 月份，注意是从0-11
		        'd': date.getDate(), // 日期
		        'q': Math.floor((date.getMonth() + 3) / 3), // 季度
		        'w': date.getDay(), // 星期，注意是0-6
		        'H': date.getHours(), // 24小时制
		        'h': date.getHours() % 12 == 0 ? 12 : date.getHours() % 12, // 12小时制
		        'm': date.getMinutes(), // 分钟
		        's': date.getSeconds(), // 秒
		        'S': date.getMilliseconds() // 毫秒
		    };
		    var week = ['天', '一', '二', '三', '四', '五', '六'];
		    for(var i in obj)
		    {
		        fmt = fmt.replace(new RegExp(i+'+', 'g'), function(m)
		        {
		            var val = obj[i] + '';
		            if(i == 'w') return (m.length > 2 ? '星期' : '周') + week[val];
		            for(var j = 0, len = val.length; j < m.length - len; j++) val = '0' + val;
		            return m.length == 1 ? val : val.substring(val.length - m.length);
		        });
		    }
		    return fmt;
};
  Vue.prototype.changeSex=function(sex){
           if(sex=="男"){
                sex="男"
           }
           else if(sex=="女"){
                sex="女"
           }
           else{
           	sex=""
           }
           return sex
  };
Vue.prototype.changeRole=function(role){
	     if (role=="ROLE_ADMIN") {
	     	  role="管理员"
	     }
	     else if (role=="ROLE_XIAO_SHOU") {
	     	 role="销售"
	     }
	      else if (role=="ROLE_NEI_WU") {
	     	 role="内务"
	     }
	      else if (role=="ROLE_CAI_WU") {
	     	 role="财务"
	     }
	      else if (role=="ROLE_GAO_GUAN") {
	     	 role="高管"
	     }
	      else if (role=="ROLE_SHEN_HE") {
	     	 role="审核"
	     }
	      else if (role=="ROLE_WAI_QING") {
	     	 role="外勤"
	     }
	      else if (role=="ROLE_YE_WU_KUAI_JI_QING") {
	     	 role="业务会计"
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
