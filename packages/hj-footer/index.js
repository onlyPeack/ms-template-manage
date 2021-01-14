// 导入组件，组件必须声明 name
import hjFooter from './src/hj-footer'
import mixins from "../../src/mixins/default";

// 为组件提供 install 安装方法，供按需引入
hjFooter.install = function (Vue) {
    Vue.mixin(mixins)
    Vue.component(hjFooter.name, hjFooter)
}

// 默认导出组件
export default hjFooter
