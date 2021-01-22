<template>
    <div id="hj-service">
        <h2 id="hj-service-title">{{module.text[0].children[0].value}}<span>{{module.text[0].children[1].value}}</span>
        </h2>
        <div class="hj-service-content">
            <div class="hj-service-content-title">
                <span v-for="(item,index) in module.article" v-bind:key="item.name" :class="{'active-title':index===activeIndex}" @click="activeIndex=index">{{item.name}}</span>
            </div>
            <div class="hj-service-content-main">
                <div v-for="item in module.article[activeIndex].children" v-bind:key="item.title" @click="linkClick(item.id,'article')">
                    <img :src="item.pic" :alt="item.title">
                    <h3>{{item.title}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {elementAnimate} from "../../../src/assets/js/elementAnimate";

    export default {
        name: "hj-service",
        data() {
            return {
                activeIndex:0,
                module: {
                    name: '和稷服务',
                    classId: 'hj-service',
                    type: 'list',
                    text: [
                        {
                            label: '标题文字',
                            type: 'default',
                            children: [
                                {
                                    label: '左侧文字',
                                    value: '产品展示/'
                                },
                                {
                                    label: '右侧文字',
                                    value: 'Product Show'
                                },
                            ]
                        }
                    ],
                    style: [
                        {
                            label: '左侧文字颜色',
                            name: '--leftColor',
                            value: 'rgba(84,84,84,1)',
                            property: 'color'
                        },
                        {
                            label: '左侧文字大小',
                            name: '--leftFontSize',
                            value: '20px',
                        },
                        {
                            label: '右侧文字颜色',
                            name: '--rightColor',
                            value: 'rgba(149,208,255,1)',
                            property: 'color'
                        },
                        {
                            label: '右侧文字大小',
                            name: '--rightFontSize',
                            value: '24px',
                        },
                    ],
                    article:[
                        {
                            name:'工业自动化',
                            children: [
                                {
                                    title:'自动化一号',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                }
                            ]
                        },
                        {
                            name:'机器人',
                            children: [
                                {
                                    title: '机器人一号',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                },
                                {
                                    title: 'EVA',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                },
                                {
                                    title: '02',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                },
                                {
                                    title: '03',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                },
                                {
                                    title: '04',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                },
                                {
                                    title: '05',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                },
                            ]
                        },
                        {
                            name:'物联网',
                            children: [
                                {
                                    title:'智能家居',
                                    pic:'http://www.hejigy.com/Img/products/product/pro5/HH130L.png'
                                }
                            ]
                        }
                    ],
                    info:['需要关联三级栏目','图片：文章缩略图','下方标题：文章标题']
                }
            }
        },
        mounted() {
            new elementAnimate([document.getElementById('hj-service-title')], 'titleTranslateNoVolume 1s forwards')
        }
    }
</script>

<style scoped>
    #hj-service {
        --leftColor: '';
        --leftFontSize: '';
        --rightColor: '';
        --rightFontSize: '';


        margin: 0 auto;

    }

    #hj-service h2 {
        font-size: var(--leftFontSize);
        color: var(--leftColor);
        font-weight: normal;
        margin-bottom: 30px;
        margin-top: 30px;
        text-align: center;
    }

    #hj-service h2 span {
        font-size: var(--rightFontSize);
        margin-left: 5px;
        color: var(--rightColor);
    }

    .hj-service-banner {
        background-image: url('http://www.hejigy.com/Img/products/banner.jpg');
        height: 400px;
    }
    .hj-service-content{
        width: 1200px;
        margin: 0 auto;
    }
    .hj-service-content-title{
        display: flex;
        justify-content: space-evenly;
    }
    .hj-service-content-title >span{
        font-size: 16px;
        color: #949494;
        cursor: pointer;
        transition: .1s;
    }
    .hj-service-content-title>.active-title{
        color: #68ABFA;
        padding-bottom: 8px;
        border-bottom: 4px #68ABFA solid;
    }
    .hj-service-content-main{
        margin-top: 20px;
    }
    .hj-service-content-main div{
        height: 300px;
        width: 280px;
        border: 1px solid rgba(190,190,190,1);
        overflow: hidden;
        text-align: center;
        cursor: pointer;
        display: inline-block;
        margin-right: 15px;
        margin-bottom: 15px;
    }

    .hj-service-content-main div img{
        width: 260px;
        height: 230px;
        /*border-bottom: 1px solid rgba(190,190,190,1);*/
        margin: 10px;
    }
    .hj-service-content-main div h3{
        border-top:1px solid rgba(190,190,190,1) ;
        margin: 0;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: #565656;
        font-weight: normal;
    }
    .hj-service-content-main div:hover h3{
        background-color: rgb(135,190,255);
        color: white;
    }
</style>
