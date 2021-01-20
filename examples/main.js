import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import msTemplateManage from '../packages/index'
// import '../lib/index/style.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(msTemplateManage)

new Vue({
  render: h => h(App),
}).$mount('#app')

/**
 * 兼容获取屏幕宽高
 * @returns {{width: number, height: number}}
 */
Vue.prototype.client = function () {
  if (window.innerHeight !== undefined) {
    return {
      "width": window.innerWidth,
      "height": window.innerHeight
    }
  } else if (document.compatMode === "CSS1Compat") {
    return {
      "width": document.documentElement.clientWidth,
      "height": document.documentElement.clientHeight
    }
  } else {
    return {
      "width": document.body.clientWidth,
      "height": document.body.clientHeight
    }
  }
}
