// 导入组件，组件必须声明 name
import msSelfScroll from './src/ms-self-scroll'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msSelfScroll.name, msSelfScroll)
}

// 为组件提供 install 安装方法，供按需引入
msSelfScroll.install = function (Vue) {
    Vue.component(msSelfScroll.name, msSelfScroll)
}

// 默认导出组件
export default msSelfScroll
