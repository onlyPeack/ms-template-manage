<template>
    <div id="hj-goods-detail">
        <div class="hj-goods-detail-position">
            <span>您当前的位置：首页 > {{module.detail.mid.title}}</span>
        </div>

        <div class="hj-goods-detail-title">
            <div class="img-content">
                <img :src="module.detail.mid.pic" :alt="module.detail.mid.title">
                <span>产品图片仅供参考，以右边产品信息为准。</span>
            </div>
            <div class="goods-title">
                <h2>{{module.detail.mid.title}}</h2>
            </div>
        </div>
        <div class="hj-goods-detail-annex">
            <div>
                <div v-for="item in module.detail.mid.annexList" v-bind:key="item.name">
                    <i class="el-icon-document"></i>
                    <span style="cursor: pointer" @click="downLoadAnnex(item.path)">{{item.name}}</span>
                </div>
            </div>
        </div>
        <div class="hj-goods-detail-info">
            <div>
                <span>产品特性</span>
            </div>
        </div>
        <div style="min-height: 50px;width: 1200px;margin: 0 auto" v-html="module.detail.mid.content"></div>
    </div>
</template>

<script>
    export default {
        name: "hj-goods-detail",
        data() {
            return {
                module: {
                    name: '和稷商品详情',
                    classId: 'hj-goods-detail',
                    detail:{
                        mid:{
                            title:'施耐德 A9 iC65 微型断路器 IC65N 3P C32A',
                            pic:'http://product-center.qiniu.520mro.com/pic/product/A9F18216_0.jpg-gxcl',
                            annexList:[
                                {
                                    name:'资料表',
                                    path:'http://product-center.qiniu.520mro.com/pic/product/A9F18216_0.jpg-gxcl'
                                },{
                                    name:'资料表2',
                                    path:'http://product-center.qiniu.520mro.com/pic/product/A9F18216_0.jpg-gxcl'
                                },
                            ]
                        }
                    },
                    info:['图片：文章缩略图','商品标题：文章标题','附件：文章附件','产品特性：文章内容']
                }
            }
        },
        methods:{
            downLoadAnnex(url){
                window.open(url,'_blank')
            }
        }
    }
</script>

<style scoped>
    #hj-goods-detail {

    }

    #hj-goods-detail .hj-goods-detail-title,.hj-goods-detail-position {
        width: 1200px;
        margin: 0 auto;
    }
    .hj-goods-detail-position{
        font-size: 14px;
        color: rgb(170, 170, 170);
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .hj-goods-detail-title{
        display: flex;
    }
    .hj-goods-detail-title img{
        width: 286px;
        height: 290px;
    }
    .hj-goods-detail-title .img-content{
        width: 415px;
        height: 415px;
        border: 1px solid #e5e5e5;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .hj-goods-detail-title .img-content span{
        position: absolute;
        bottom: 3px;
        left: 7px;
        font-size: 14px;
        color: rgb(170, 170, 170);
    }
    .goods-title h2{
        margin-left: 30px;
    }
    .hj-goods-detail-annex{
        margin-top: 180px;
        background-color: rgb(244,244,244);
        height: 50px;
    }
    .hj-goods-detail-annex>div{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }
    .hj-goods-detail-annex i{
        color: #F56C6C;
        font-size: 22px;
        vertical-align: text-top;
    }
    .hj-goods-detail-info{
        border-top: 1px solid rgba(0, 0, 0, .04);
        box-shadow: 0 11px 13px -10px rgba(0, 0, 0, .12);
        margin-top: 50px;
    }
    .hj-goods-detail-info div{
        width: 1200px;
        margin: 0 auto;
    }
    .hj-goods-detail-info div span{
        color: rgb(61,205,88);
        border-bottom: 3px solid rgb(61,205,88);
        padding: 28px 10px;
        display: inline-block;
    }
</style>
