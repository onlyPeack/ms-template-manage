// 导入组件，组件必须声明 name
import hjIndex3 from './src/hj-index-3'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjIndex3.name, hjIndex3)
}

// 为组件提供 install 安装方法，供按需引入
hjIndex3.install = function (Vue) {
    Vue.component(hjIndex3.name, hjIndex3)
}

// 默认导出组件
export default hjIndex3
