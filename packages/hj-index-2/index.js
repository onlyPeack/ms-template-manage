// 导入组件，组件必须声明 name
import hjIndex2 from './src/hj-index-2'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjIndex2.name, hjIndex2)
}

// 为组件提供 install 安装方法，供按需引入
hjIndex2.install = function (Vue) {
    Vue.component(hjIndex2.name, hjIndex2)
}

// 默认导出组件
export default hjIndex2
