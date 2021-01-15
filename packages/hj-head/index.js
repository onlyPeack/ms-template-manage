// 导入组件，组件必须声明 name
import hjHead from './src/hj-head'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjHead.name, hjHead)
}

// 为组件提供 install 安装方法，供按需引入
hjHead.install = function (Vue) {
    Vue.component(hjHead.name, hjHead)
}

// 默认导出组件
export default hjHead
