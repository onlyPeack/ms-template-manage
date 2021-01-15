// 导入组件，组件必须声明 name
import hjBrand from './src/hj-brand'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjBrand.name, hjBrand)
}

// 为组件提供 install 安装方法，供按需引入
hjBrand.install = function (Vue) {
    Vue.component(hjBrand.name, hjBrand)
}

// 默认导出组件
export default hjBrand
