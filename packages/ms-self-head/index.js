// 导入组件，组件必须声明 name
import msSelfHead from './src/ms-self-head'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msSelfHead.name, msSelfHead)
}

// 为组件提供 install 安装方法，供按需引入
msSelfHead.install = function (Vue) {
    Vue.component(msSelfHead.name, msSelfHead)
}

// 默认导出组件
export default msSelfHead
