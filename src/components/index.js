import msSelfHead from './head/ms-self-head'
import msSelfFooter from './footer/ms-self-footer'
import msSelfAside from './ms-self-aside'

import msSelfScroll from './list/banner/ms-self-scroll'
import hjBanner from './list/banner/hj-banner'
import msListTest1 from './list/ms-list-test-1'
import msListGenshin from './list/ms-list-genshin'
import hjBrand from './list/hj-brand'
import hjIndex1 from './list/hj-index-1'
import hjIndex3 from './list/hj-index-3'
import hjIndex4 from './list/hj-index-4'
import hjIndex5 from './list/hj-index-5'
import hjService from './list/hj-service'
import hjDownload from './list/hj-download'
import hjNews from './list/hj-news'


import msSelfIndex1 from './default/ms-self-index-1'
import hjIndex2 from './default/hj-index-2'
import hjAbout from './default/hj-about'
import hjConnect from './default/hj-connect'



import msDetailGenshin from './detail/ms-detail-genshin'
import hjHead from './head/hj-head'
import hjFooter from './footer/hj-footer'
import hjIndex from './page/hj-index'



import mixins from '../mixins/default'

let Ms = {}
Ms.install = function (Vue) {
    Vue.mixin(mixins)
    Vue.component(msSelfHead.name, msSelfHead)
    Vue.component(msSelfFooter.name, msSelfFooter)
    Vue.component(msSelfAside.name, msSelfAside)


    Vue.component(msSelfScroll.name, msSelfScroll)
    Vue.component(hjBanner.name, hjBanner)
    Vue.component(msListTest1.name, msListTest1)
    Vue.component(msListGenshin.name, msListGenshin)
    Vue.component(hjBrand.name, hjBrand)
    Vue.component(hjIndex1.name, hjIndex1)
    Vue.component(hjIndex3.name, hjIndex3)
    Vue.component(hjIndex4.name, hjIndex4)
    Vue.component(hjIndex5.name, hjIndex5)
    Vue.component(hjService.name, hjService)
    Vue.component(hjDownload.name, hjDownload)
    Vue.component(hjNews.name, hjNews)


    Vue.component(msSelfIndex1.name, msSelfIndex1)
    Vue.component(hjIndex2.name, hjIndex2)
    Vue.component(hjAbout.name, hjAbout)
    Vue.component(hjConnect.name, hjConnect)



    Vue.component(msDetailGenshin.name, msDetailGenshin)
    Vue.component(hjHead.name, hjHead)
    Vue.component(hjFooter.name, hjFooter)
    Vue.component(hjIndex.name, hjIndex)


}
export default Ms
