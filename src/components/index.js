import msSelfHead from './ms-self-head'
import msSelfFooter from './ms-self-footer'
import msSelfAside from './ms-self-aside'
import msSelfScroll from './ms-self-scroll'
import msSelfIndex1 from './default/ms-self-index-1'
import msListTest1 from './list/ms-list-test-1'
import msListGenshin from './list/ms-list-genshin'
import msDetailGenshin from './detail/ms-detail-genshin'
import hjHead from './head/hj-head'
import hjFooter from './footer/hj-footer'
import hjIndex from './page/hj-index'
import hjBrand from './page/hj-brand'

import mixins from '../mixins/default'
let Ms={}
Ms.install=function (Vue) {
Vue.mixin(mixins)
Vue.component(msSelfHead.name,msSelfHead)
Vue.component(msSelfFooter.name,msSelfFooter)
Vue.component(msSelfAside.name,msSelfAside)
Vue.component(msSelfScroll.name,msSelfScroll)
Vue.component(msSelfIndex1.name,msSelfIndex1)
Vue.component(msListTest1.name,msListTest1)
Vue.component(msListGenshin.name,msListGenshin)
Vue.component(msDetailGenshin.name,msDetailGenshin)
Vue.component(hjHead.name,hjHead)
Vue.component(hjFooter.name,hjFooter)
Vue.component(hjIndex.name,hjIndex)
Vue.component(hjBrand.name,hjBrand)
}
export default  Ms
