// 导入组件，组件必须声明 name
import hjNewsDetail from './src/hj-news-detail'
import mixins from "../../src/mixins/default";

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjNewsDetail.name, hjNewsDetail)
}

// 为组件提供 install 安装方法，供按需引入
hjNewsDetail.install = function (Vue) {
    Vue.component(hjNewsDetail.name, hjNewsDetail)
}

// 默认导出组件
export default hjNewsDetail
