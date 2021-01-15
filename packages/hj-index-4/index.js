// 导入组件，组件必须声明 name
import hjIndex4 from './src/hj-index-4'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjIndex4.name, hjIndex4)
}

// 为组件提供 install 安装方法，供按需引入
hjIndex4.install = function (Vue) {
    Vue.component(hjIndex4.name, hjIndex4)
}

// 默认导出组件
export default hjIndex4
