<template>
    <div id="hj-index-4">
        <h2 id="hj-index-4-title">{{module.text[0].children[0].value}}<span>{{module.text[0].children[1].value}}</span></h2>
        <div id="hj-index-4-content">
            <div>
                <div v-for="item in articleList" v-bind:key="item.title" class="hj-index-4-item">
                    <img :src="item.pic" :alt="item.title">
                    <div class="hidden-item">
                        <h3>{{item.description}}</h3>
                        <div v-html="item.content"></div>
                    </div>
                    <h3>{{item.title}}</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {elementAnimate} from "../../../src/assets/js/elementAnimate";

    export default {
        name: "hj-index-4",
        data(){
            return{
                module:{
                    name:'和稷首页4号',
                    classId:'hj-index-4',
                    type:'list',
                    limit:3,
                    text: [
                        {
                            label: '标题文字',
                            type: 'default',
                            children: [
                                {
                                    label: '左侧文字',
                                    value: '成功案例/'
                                },
                                {
                                    label: '右侧文字',
                                    value: 'Successful Cases'
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
                            title:'机器人系统解决方案',
                            pic:'http://www.hejigy.com/Img/index/case1.jpg',
                            description:'MIG焊接器人系统工作站',
                            content:'1、方案的配置--焊接工序、工作配置、工作站配置'
                        },
                        {
                            title:'机器人系统解决方案',
                            pic:'http://www.hejigy.com/Img/index/case1.jpg',
                            description:'MIG焊接器人系统工作站',
                            content:'1、方案的配置--焊接工序、工作配置、工作站配置'
                        },
                        {
                            title:'机器人系统解决方案',
                            pic:'http://www.hejigy.com/Img/index/case1.jpg',
                            description:'MIG焊接器人系统工作站',
                            content:'1、方案的配置--焊接工序、工作配置、工作站配置'
                        },
                    ]
                }
            }
        },
        mounted() {
            new elementAnimate([document.getElementById('hj-index-4-title')], 'titleTranslate 1s forwards')
        }
    }
</script>

<style scoped>
    #hj-index-4 {
        --leftColor: '';
        --leftFontSize: '';
        --rightColor: '';
        --rightFontSize: '';


        margin: 0 auto;

    }

    #hj-index-4 h2 {
        font-size: var(--leftFontSize);
        color: var(--leftColor);
        font-weight: normal;
        margin-bottom: 30px;
        margin-top: 30px;
        text-align: center;
    }

    #hj-index-4 h2 span {
        font-size: var(--rightFontSize);
        margin-left: 5px;
        color: var(--rightColor);
    }

    #hj-index-4-content{
        background-color: rgb(224,241,246);
        padding: 80px 0;
    }
    #hj-index-4-content>div{
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .hj-index-4-item{
        width: 370px;
        position: relative;
        cursor: pointer;
    }
    .hj-index-4-item img{
        vertical-align: bottom;
        width: 370px;
        height: 300px;
    }
    .hj-index-4-item .hidden-item{
        width: 370px;
        height: 300px;
        background-color: rgba(0,0,0,.5);
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        text-align: center;
    }
    .hidden-item h3{
        display: inline-block;
        background-color: #fff;
        margin: 50px auto 35px auto;
        height: 28px;
        line-height: 28px;
        font-size: 16px;
        border-radius: 10px;
        padding: 0 10px;
        font-weight: normal;
    }
    .hidden-item>div{
        font-size: 14px;
        color: white;
    }
    .hj-index-4-item>h3{
        background-color: #fff;
        margin-top: 0;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        font-weight: normal;
        color: #535353;
        cursor: pointer;
    }
    .hj-index-4-item:hover>.hidden-item{
        display: block;
    }
    .hj-index-4-item:hover>h3{
        background-color: #2eafbb;
    }
</style>
