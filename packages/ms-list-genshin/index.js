// 导入组件，组件必须声明 name
import msListGenshin from './src/ms-list-genshin'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(msListGenshin.name, msListGenshin)
}

// 为组件提供 install 安装方法，供按需引入
msListGenshin.install = function (Vue) {
    Vue.component(msListGenshin.name, msListGenshin)
}

// 默认导出组件
export default msListGenshin
