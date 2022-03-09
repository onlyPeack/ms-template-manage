// 导入组件

/*列表*/
import msSelfScroll from './ms-self-scroll'
import hjBanner from './hj-banner'
import msListGenshin from './ms-list-genshin'
import hjBrand from './hj-brand'
import hjIndex1 from './hj-index-1'
import hjIndex3 from './hj-index-3'
import hjIndex4 from './hj-index-4'
import hjIndex5 from './hj-index-5'
import hjService from './hj-service'
import hjDownload from './hj-download'
import hjNews from './hj-news'
import hjJoinUs from './hj-join-us'
import msSelfIndex2 from './ms-self-index-2'

/*详情*/
import msSelfIndex1 from './ms-self-index-1'
import hjIndex2 from './hj-index-2'
import hjAbout from './hj-about'
import hjConnect from './hj-connect'
import msImg from './ms-img'
import hjNewsDetail from './hj-news-detail'
import hjGoodsDetail from './hj-goods-detail'


/*基础*/
import msDetailGenshin from './ms-detail-genshin'
import hjHead from './hj-head'
import hjFooter from './hj-footer'

import msSelfHead from './ms-self-head'
import msSelfFooter from './ms-self-footer'
import msSelfAside from './ms-self-aside'


/*组件*/
import imgPreview from './img-preview'

//导入组件公共方法
import mixins from "../src/mixins/default";

// 存储组件列表
const components = [
    hjHead,
    hjFooter,
    msSelfHead,
    hjAbout,
    hjConnect,
    hjIndex2,
    msImg,
    msSelfIndex1,
    hjNewsDetail,
    msDetailGenshin,
    msSelfFooter,
    msListGenshin,
    msSelfIndex2,
    hjService,
    msSelfAside,
    hjJoinUs,
    hjNews,
    hjDownload,
    hjIndex5,
    hjIndex4,
    hjIndex3,
    hjIndex1,
    hjBrand,
    hjBanner,
    msSelfScroll,
    hjGoodsDetail,
    imgPreview
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return

    //全局混入组件公共方法
    Vue.mixin(mixins)

    // 遍历注册全局组件
    components.map(component => Vue.component(component.name, component))
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    install,
    // 以下是具体的组件列表
    ...components
}
