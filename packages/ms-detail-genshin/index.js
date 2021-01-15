// 导入组件，组件必须声明 name
import msDetailGenshin from './src/ms-detail-genshin'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msDetailGenshin.name, msDetailGenshin)
}

// 为组件提供 install 安装方法，供按需引入
msDetailGenshin.install = function (Vue) {
    Vue.component(msDetailGenshin.name, msDetailGenshin)
}

// 默认导出组件
export default msDetailGenshin
