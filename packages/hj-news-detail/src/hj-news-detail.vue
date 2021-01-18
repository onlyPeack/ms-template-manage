<template>
    <div id="hj-news-detail">
        <h2>{{module.detail.mid.title}}</h2>
        <span>发表日期：{{module.detail.mid.releaseTime}}</span>
        <span style="margin-left: 10px;">文章编辑：{{module.detail.mid.publisher}}</span>
        <span style="margin-left: 10px;">浏览次数：{{module.detail.mid.publisher}}</span>
        <div class="divider"></div>
        <div v-html="module.detail.mid.content" class="content"></div>
        <div class="footer-divider"></div>
        <div class="footer-content">
            <span @click="linkClick(module.detail.before.id,'article')">上一篇：{{module.detail.before.name||'没有了'}}</span>
            <span @click="linkClick(module.detail.after.id,'article')" style="float: right">下一篇：{{module.detail.after.name||'没有了'}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "hj-news-detail",
        data() {
            return {
                module: {
                    name: '和稷新闻详情',
                    classId: 'hj-news-detail',
                    detail: {
                        before:{
                            id:'7',
                            name:'全新工业网络协议标准CC-Link IE TSN发布会召开'
                        },
                        mid:{
                            title: '倍加福大力投资工业通讯领域 加快布局“工业4.0”',
                            releaseTime:'2021年1月14日 09:06:25',
                            publisher:'和稷工业',
                            pageviews:'10',
                            content:'　　作为工业自动化技术的领先研发者，德国倍加福集团Pepperl+Fuchs于2019年2月，正式开启对Comtrol公司的业务收购。Comtrol公司，是美国工业以太网通讯和IO-Link网关产品的先驱者，以其RocketPort产品系列而闻名。',
                        },
                        after:{}
                    },
                    info:['']
                }
            }
        },
        created() {
            // console.log(this.module,'module')
            // this.setModule({
            //     detail: {
            //         mid:{},
            //         before: {}
            //     }
            // })
            // console.log(this.module,'before')
        }
    }
</script>

<style scoped>
    #hj-news-detail {
        width: 1200px;
        margin: 0 auto;
    }

    #hj-news-detail h2 {
        font-size: 1.5em;
    }

    #hj-news-detail>span{
        font-size: 12px;
    }
    #hj-news-detail .divider{
        height: 1px;
        background-color: black;
        margin-top: 20px;
        margin-bottom: 40px;
    }
    #hj-news-detail>.content{
        font-size: 14px;
    }
    #hj-news-detail>.footer-divider{
        border-top: 1px solid #a09a9a;
        border-bottom: 3px dashed #C0C0C0;
        margin-top: 40px;
        width: 85%;
        margin-left: auto;
        margin-right: auto;
    }
    #hj-news-detail>.footer-content{
        width: 80%;
        margin: 0 auto;
        font-size: 12px;
        color: #666;
        padding-top: 5px;
    }
    #hj-news-detail>.footer-content>span{
        cursor: pointer;
    }
    #hj-news-detail>.footer-content>span:hover{
        color: #0093ff;
    }
</style>
