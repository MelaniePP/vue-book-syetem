import Vue from 'vue'
import FastClick from 'fastclick'
import 'lib-flexible'
import App from './App'
import router from './router'
import store from './store'
// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入echarts
import echarts from 'echarts'
// 使用elementUI
Vue.use(ElementUI);

// 使用echarts
Vue.prototype.$echarts = echarts 

/*
 * 定义常量
 */
let DOMAIN_NAME = ''
let SERVER_NAME = ''
let API_PREFIX = ''
/**
 * 开发环境和发布环境变量
 */
if (process.env.NODE_ENV === 'development') {
  DOMAIN_NAME = ''
  SERVER_NAME = ''
  API_PREFIX = ''
  console.log('开发环境')
} else {
  console.log('发布环境')
  DOMAIN_NAME = ''
  SERVER_NAME = ''
  API_PREFIX = ''
}
Vue.prototype.DOMAIN_NAME = DOMAIN_NAME
Vue.prototype.SERVER_NAME = SERVER_NAME
Vue.prototype.API_PREFIX = API_PREFIX
/**
 *  日志输出开关
 */
Vue.config.productionTip = false
/**
 *  点击延迟
 */
FastClick.attach(document.body)
/**
 *  创建实例
 */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

