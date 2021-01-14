<template>
    <div id="hj-index-5">
        <h2 id="hj-index-5-title">{{module.text[0].children[0].value}}<span>{{module.text[0].children[1].value}}</span></h2>
        <div>
            <div v-for="item in module.article" v-bind:key="item.title" class="hj-index-5-item">
                <img :src="item.pic" :alt="item.title">
            </div>
        </div>
    </div>
</template>

<script>
    import {elementAnimate} from "../../assets/js/elementAnimate";

    export default {
        name: "hj-index-5",
        data(){
            return{
                module:{
                    name:'和稷首页五号',
                    classId:'hj-index-5',
                    type:'list',
                    limit: 8,
                    text: [
                        {
                            label: '标题文字',
                            type: 'default',
                            children: [
                                {
                                    label: '左侧文字',
                                    value: '合作品牌/'
                                },
                                {
                                    label: '右侧文字',
                                    value: 'Brand Cooperation'
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
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                        {
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                        {
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                        {
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                        {
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                        {
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                        {
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                        {
                            title:'施耐德',
                            pic:'http://www.hejigy.com/Picture/p1.png'
                        },
                    ]
                }
            }
        },
        mounted() {
            new elementAnimate([document.getElementById('hj-index-5-title')], 'titleTranslateNoVolume 1s forwards')
        }
    }
</script>

<style scoped>
    #hj-index-5 {
        --leftColor: '';
        --leftFontSize: '';
        --rightColor: '';
        --rightFontSize: '';


        margin: 0 auto;

    }

    #hj-index-5 h2 {
        font-size: var(--leftFontSize);
        color: var(--leftColor);
        font-weight: normal;
        margin-bottom: 30px;
        margin-top: 30px;
        text-align: center;
    }

    #hj-index-5 h2 span {
        font-size: var(--rightFontSize);
        margin-left: 5px;
        color: var(--rightColor);
    }
    #hj-index-5>div{
        display: flex;
        width: 985px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
    }
    .hj-index-5-item{
        border:1px solid #e6e6e6;
        width: 238px;
        height: 138px;
        margin-bottom: 8px;
        text-align: center;
        line-height: 165px;
    }
</style>
