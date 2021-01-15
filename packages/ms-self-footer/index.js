// 导入组件，组件必须声明 name
import msSelfFooter from './src/ms-self-footer'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msSelfFooter.name, msSelfFooter)
}

// 为组件提供 install 安装方法，供按需引入
msSelfFooter.install = function (Vue) {
    Vue.component(msSelfFooter.name, msSelfFooter)
}

// 默认导出组件
export default msSelfFooter
