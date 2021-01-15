// 导入组件，组件必须声明 name
import msSelfIndex2 from './src/ms-self-index-2'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msSelfIndex2.name, msSelfIndex2)
}

// 为组件提供 install 安装方法，供按需引入
msSelfIndex2.install = function (Vue) {
    Vue.component(msSelfIndex2.name, msSelfIndex2)
}

// 默认导出组件
export default msSelfIndex2
