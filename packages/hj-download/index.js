// 导入组件，组件必须声明 name
import hjDownload from './src/hj-download'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjDownload.name, hjDownload)
}

// 为组件提供 install 安装方法，供按需引入
hjDownload.install = function (Vue) {
    Vue.component(hjDownload.name, hjDownload)
}

// 默认导出组件
export default hjDownload
