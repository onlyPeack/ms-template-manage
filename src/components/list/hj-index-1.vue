<template>
    <div id="hj-index-1">
        <h2 id="hj-index-1-title">{{module.text[0].children[0].value}}<span>{{module.text[0].children[1].value}}</span></h2>
        <el-carousel arrow="never" indicator-position="outside">
            <el-carousel-item v-for="(item,index) in articleList" :key="index">
                <div v-for="children in item" class="banner-item" v-bind:key="children.title">
                    <div class="img">
                        <img :src="children.pic" :alt="children.title">
                    </div>

                    <div class="text">
                        <h3>{{children.title}}</h3>
                        <p>{{children.description}}</p>
                    </div>

                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import {elementAnimate} from "../../assets/js/elementAnimate";
    export default {
        name: "hj-index-1",
        data() {
            return {
                module: {
                    name: '和稷首页一号模板',
                    classId: 'hj-index-1',
                    type: 'list',
                    article: [
                        {
                            pic: 'http://www.hejigy.com/Img/index/service1.jpg',
                            title: '供应链管理服务',
                            description: '实现一条贯穿供应商、企业与客户的价值链，各环节无缝对接，形成物流、信息流、单据流、商流和资金流五流合一的模式，从生产、交付、配送跟踪等过程全面管控。有效的服务于供应商及用户。'
                        },
                        {
                            pic: 'http://www.hejigy.com/Img/index/service2.jpg',
                            title: '一站式采购',
                            description: '为客户提供一全方位、多渠道的采购平台，它集合了众多供应商，客户进入平台后无需为采购费心，为客户提供一系列后续服务，满足采购需求、数据分析、配送、售后及节约管理成本等要求，解决客户所需。'
                        },
                        {
                            pic: 'http://www.hejigy.com/Img/index/service3.jpg',
                            title: '云仓储',
                            description: '随着互联网的高速发展，越来越多的行业正被云概念所覆盖和改造，云仓储正是将互联网与传统行业有机的结合起来，形成良性循环的生态圈。'
                        },
                        {
                            pic: 'http://www.hejigy.com/Img/index/service4.jpg',
                            title: '技术解决方案服务',
                            description: '售前为用户前期选型推荐，项目方案设计，负责与用户进行技术交流，了解用户的需求。售中为用户现场调试、编程、项目系统集成服务，满足用户的需求。售后为用户提供工业品及设备的维修、维护服务.解决用户的需求。'
                        },
                    ],
                    text:[
                        {
                            label:'标题文字',
                            type:'default',
                            children:[
                                {
                                    label: '左侧文字',
                                    value:'服务范围/'
                                },
                                {
                                    label: '右侧文字',
                                    value:'service scope'
                                },
                            ]
                        }
                    ],
                    info: [
                        '顶部图片：文章缩略图',
                        '中间标题：文章标题',
                        '下方文字：文字描述'
                    ]
                }
            }
        },
        computed:{
            articleList:function () {
                let pageLimit=3
                let loopTime=Math.floor(this.module.article.length/pageLimit)
                let arr=[]
                for (let i = 0; i <loopTime ; i++) {
                    arr[i]=[]
                    for (let j = 0; j <pageLimit ; j++) {
                        arr[i].push(this.module.article[i*pageLimit+j])
                    }
                }
                if(this.module.article.length%pageLimit!==0){
                    arr.push(this.module.article.slice(this.module.article.length-(this.module.article.length%pageLimit)))
                }

                return arr
            }
        },
        mounted() {
            new elementAnimate([document.getElementById('hj-index-1-title')],'titleTranslate 1s forwards')
        }
    }
</script>

<style scoped>
    #hj-index-1 {
        width: 1200px;
        height: 540px;
        margin: 0 auto;

    }
    #hj-index-1 h2{
        font-size: 20px;
        color: rgba(84,84,84,1);
        font-weight: normal;
        margin-bottom: 30px;
        margin-top: 30px;
        text-align: center;
    }
    #hj-index-1 h2 span{
        font-size: 24px;
        margin-left: 5px;
        color: rgba(149,208,255,1);
    }
    .banner-item{
        width: 370px;
        display: inline-block;
        border-bottom: 1px solid #B5B5B5;

    }
    .banner-item img{
        width: 370px;
        height: 230px;
        transition: 1s;
    }
    .banner-item .img{
        overflow: hidden;
    }
    .banner-item img:hover{
        transform: scale(1.3);
    }
    .banner-item h3{
        font-size: 18px;
        font-weight: normal;
        cursor: pointer;
        display: inline-block;
    }
    .banner-item h3:hover{
        color: #15909c;
    }
    .banner-item p{
        font-size: 12px;
        color: #5E5E5E;
        line-height: 24px;
        margin-top: 0;
    }
    .banner-item>.text{
        padding: 0 20px;
    }
</style>
<style>
    #hj-index-1 .el-carousel__item{
        display: flex;
        justify-content: space-between;
    }
    #hj-index-1 .el-carousel__container{
        max-height: 425px;
        overflow: hidden;
    }
    #hj-index-1 .el-carousel__button {
        width: 14px;
        height: 14px;
        opacity: 1;
        border-radius: 999px;
        border-color:rgba(104,171,250,1) ;
        border-width: 1px;
        border-style: solid;
        background-color: #fff;
        transform: translateY(18px);
    }

    #hj-index-1 .el-carousel__indicator.is-active button {
        background-color: rgba(104,171,250,1);
    }
    @keyframes titleTranslate {
        from {
            margin-bottom:-30px;
            transform: translateY(60px);
            opacity: 0;
        }
        to {
            margin-bottom: 30px;
            transform: translateY(0px);
            opacity: 1;
        }
    }
</style>
