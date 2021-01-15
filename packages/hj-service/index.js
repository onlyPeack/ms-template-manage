// 导入组件，组件必须声明 name
import hjService from './src/hj-service'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjService.name, hjService)
}

// 为组件提供 install 安装方法，供按需引入
hjService.install = function (Vue) {
    Vue.component(hjService.name, hjService)
}

// 默认导出组件
export default hjService
