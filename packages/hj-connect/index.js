// 导入组件，组件必须声明 name
import hjConnect from './src/hj-connect'
import mixins from "../../src/mixins/default";
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjConnect.name, hjConnect)
}

// 为组件提供 install 安装方法，供按需引入
hjConnect.install = function (Vue) {
    Vue.component(hjConnect.name, hjConnect)
}

// 默认导出组件
export default hjConnect
