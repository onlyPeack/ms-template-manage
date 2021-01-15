// 导入组件，组件必须声明 name
import hjIndex5 from './src/hj-index-5'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjIndex5.name, hjIndex5)
}

// 为组件提供 install 安装方法，供按需引入
hjIndex5.install = function (Vue) {
    Vue.component(hjIndex5.name, hjIndex5)
}

// 默认导出组件
export default hjIndex5
