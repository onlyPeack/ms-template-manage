// 导入组件，组件必须声明 name
import msImg from './src/ms-img'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msImg.name, msImg)
}

// 为组件提供 install 安装方法，供按需引入
msImg.install = function (Vue) {
    Vue.component(msImg.name, msImg)
}

// 默认导出组件
export default msImg
