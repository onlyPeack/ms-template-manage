import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/css/ms-template-manage.css'
// import './assets/css/reset.css'
import mixins from './mixins/default'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.mixin(mixins)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
