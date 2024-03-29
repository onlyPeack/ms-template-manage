// 导入组件，组件必须声明 name
import imgPreview from './src/img-preview'
import mixins from "../../src/mixins/default";
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.mixin(mixins)
    window.Vue.component(imgPreview.name, imgPreview)
}

// 为组件提供 install 安装方法，供按需引入
imgPreview.install = function (Vue) {
    Vue.component(imgPreview.name, imgPreview)
}

// 默认导出组件
export default imgPreview
