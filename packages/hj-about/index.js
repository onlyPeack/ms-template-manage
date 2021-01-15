// 导入组件，组件必须声明 name
import hjAbout from './src/hj-about'
import mixins from "../../src/mixins/default";
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjAbout.name, hjAbout)
}

// 为组件提供 install 安装方法，供按需引入
hjAbout.install = function (Vue) {
    Vue.component(hjAbout.name, hjAbout)
}

// 默认导出组件
export default hjAbout
