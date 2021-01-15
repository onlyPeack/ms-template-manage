// 导入组件，组件必须声明 name
import hjIndex1 from './src/hj-index-1'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjIndex1.name, hjIndex1)
}

// 为组件提供 install 安装方法，供按需引入
hjIndex1.install = function (Vue) {
    Vue.component(hjIndex1.name, hjIndex1)
}

// 默认导出组件
export default hjIndex1
