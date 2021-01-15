// 导入组件，组件必须声明 name
import hjBanner from './src/hj-banner'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjBanner.name, hjBanner)
}

// 为组件提供 install 安装方法，供按需引入
hjBanner.install = function (Vue) {
    Vue.component(hjBanner.name, hjBanner)
}

// 默认导出组件
export default hjBanner
