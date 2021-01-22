// 导入组件，组件必须声明 name
import hjGoodsDetail from './src/hj-goods-detail'
import mixins from "../../src/mixins/default";
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(hjGoodsDetail.name, hjGoodsDetail)
}

// 为组件提供 install 安装方法，供按需引入
hjGoodsDetail.install = function (Vue) {
    Vue.component(hjGoodsDetail.name, hjGoodsDetail)
}

// 默认导出组件
export default hjGoodsDetail
