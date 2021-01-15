// 导入组件，组件必须声明 name
import hjHead from './src/hj-head'

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('hj-head', hjHead)
}

// 为组件提供 install 安装方法，供按需引入
hjHead.install = function (Vue) {
    Vue.component(hjHead.name, hjHead)
}

// 默认导出组件
export default hjHead
