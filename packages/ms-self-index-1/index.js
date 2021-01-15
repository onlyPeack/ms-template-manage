// 导入组件，组件必须声明 name
import msSelfIndex1 from './src/ms-self-index-1'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msSelfIndex1.name, msSelfIndex1)
}

// 为组件提供 install 安装方法，供按需引入
msSelfIndex1.install = function (Vue) {
    Vue.component(msSelfIndex1.name, msSelfIndex1)
}

// 默认导出组件
export default msSelfIndex1
