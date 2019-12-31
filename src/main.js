// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import App from './App.vue'
import router from './router'


Vue.config.productionTip = false;

Vue.use(ElementUI)

new Vue({
  el: '#app',
  /* 创建和挂载根实例 */
  router,
  render: h => h(App),     //此处是vue2.0的写法,而以前vue1.0的写法是components: { App }
  template: '<App/>'
})


