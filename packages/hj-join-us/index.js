// 导入组件，组件必须声明 name
import hjJoinUs from './src/hj-join-us'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjJoinUs.name, hjJoinUs)
}

// 为组件提供 install 安装方法，供按需引入
hjJoinUs.install = function (Vue) {
    Vue.component(hjJoinUs.name, hjJoinUs)
}

// 默认导出组件
export default hjJoinUs
