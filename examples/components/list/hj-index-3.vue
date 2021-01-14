<template>
    <div id="hj-index-3">
        <h2 id="hj-index-3-title">{{module.text[0].children[0].value}}<span>{{module.text[0].children[1].value}}</span>
        </h2>
        <div id="hj-index-3-content">
            <div>
                <div v-for="item in module.article" class="hj-index-3-item" v-bind:key="item.title">
                    <div>
                        <img :src="item.pic" alt="">
                        <span>{{item.releaseTime}}</span>
                        <h3>
                            {{item.title}}
                        </h3>
                        <p>
                            {{item.description}}
                        </p>
                    </div>



                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {elementAnimate} from "../../assets/js/elementAnimate";

    export default {
        name: "hj-index-3",
        data() {
            return {
                module: {
                    name: '和稷首页三号',
                    classId: 'hj-index-3',
                    type: 'list',
                    limit: 6,
                    text: [
                        {
                            label: '标题文字',
                            type: 'default',
                            children: [
                                {
                                    label: '左侧文字',
                                    value: '新闻动态/'
                                },
                                {
                                    label: '右侧文字',
                                    value: 'News'
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
                    article: [
                        {
                            title: '飞利浦LED植物生长灯进军俄罗斯市场',
                            pic: 'http://www.hejigy.com/Img/index/time.png',
                            releaseTime: '2021年1月9日 08:45:38',
                            description: '光机所在高亮度大模场光子晶体石英光纤制作方面取得进展 中国科学院上海光学精密机械研究所高功率激光单元技术研发中心石英光纤材料课题组在大模场有源光子晶体光纤的研制方面取得新进展，成功制备获得了纤芯直径大于50μm、NA小于0.03的大芯径光子晶体光纤'
                        },
                        {
                            title: '飞利浦LED植物生长灯进军俄罗斯市场2',
                            pic: 'http://www.hejigy.com/Img/index/time.png',
                            releaseTime: '2021年1月9日 08:45:37',
                            description: '光机所在高亮度大模场光子晶体石英光纤制作方面取得进展 中国科学院上海光学精密机械研究所高功率激光单元技术研发中心石英光纤材料课题组在大模场有源光子晶体光纤的研制方面取得新进展，成功制备获得了纤芯直径大于50μm、NA小于0.03的大芯径光子晶体光纤'
                        },
                        {
                            title: '飞利浦LED植物生长灯进军俄罗斯市场3',
                            pic: 'http://www.hejigy.com/Img/index/time.png',
                            releaseTime: '2021年1月9日 08:45:3',
                            description: '光机所在高亮度大模场光子晶体石英光纤制作方面取得进展 中国科学院上海光学精密机械研究所高功率激光单元技术研发中心石英光纤材料课题组在大模场有源光子晶体光纤的研制方面取得新进展，成功制备获得了纤芯直径大于50μm、NA小于0.03的大芯径光子晶体光纤'
                        },
                        {
                            title: '飞利浦LED植物生长灯进军俄罗斯市场4',
                            pic: 'http://www.hejigy.com/Img/index/time.png',
                            releaseTime: '2021年1月9日 08:45:38',
                            description: '光机所在高亮度大模场光子晶体石英光纤制作方面取得进展 中国科学院上海光学精密机械研究所高功率激光单元技术研发中心石英光纤材料课题组在大模场有源光子晶体光纤的研制方面取得新进展，成功制备获得了纤芯直径大于50μm、NA小于0.03的大芯径光子晶体光纤'
                        },
                        {
                            title: '飞利浦LED植物生长灯进军俄罗斯市场5',
                            pic: 'http://www.hejigy.com/Img/index/time.png',
                            releaseTime: '2021年1月9日 08:45:38',
                            description: '光机所在高亮度大模场光子晶体石英光纤制作方面取得进展 中国科学院上海光学精密机械研究所高功率激光单元技术研发中心石英光纤材料课题组在大模场有源光子晶体光纤的研制方面取得新进展，成功制备获得了纤芯直径大于50μm、NA小于0.03的大芯径光子晶体光纤'
                        },
                        {
                            title: '飞利浦LED植物生长灯进军俄罗斯市场6',
                            pic: 'http://www.hejigy.com/Img/index/time.png',
                            releaseTime: '2021年1月9日 08:45:38',
                            description: '光机所在高亮度大模场光子晶体石英光纤制作方面取得进展 中国科学院上海光学精密机械研究所高功率激光单元技术研发中心石英光纤材料课题组在大模场有源光子晶体光纤的研制方面取得新进展，成功制备获得了纤芯直径大于50μm、NA小于0.03的大芯径光子晶体光纤'
                        },
                    ]
                }
            }
        },
        mounted() {
            new elementAnimate([document.getElementById('hj-index-3-title')], 'titleTranslateNoVolume 1s forwards')
            new elementAnimate([document.getElementById('hj-index-3-content')], 'RightFormFlyIn 2s forwards')
        }
    }
</script>

<style scoped>
    #hj-index-3 {
        --leftColor: '';
        --leftFontSize: '';
        --rightColor: '';
        --rightFontSize: '';


        margin: 0 auto;

    }

    #hj-index-3 h2 {
        font-size: var(--leftFontSize);
        color: var(--leftColor);
        font-weight: normal;
        margin-bottom: 30px;
        margin-top: 30px;
        text-align: center;
    }

    #hj-index-3 h2 span {
        font-size: var(--rightFontSize);
        margin-left: 5px;
        color: var(--rightColor);
    }

    #hj-index-3 > div {
        height: 330px;
        background-color: rgb(224, 234, 246);
        background-image: url('http://www.hejigy.com/Img/index/news_bg_fixed.jpg');
        background-size: 100% 100%;
        padding: 45px 0;
    }

    #hj-index-3 > div > div {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        height: 100%;
    }

    #hj-index-3 .hj-index-3-item {
        width: 330px;
        height: 140px;
        background-color: #fff;
        text-align: center;
        cursor: pointer;
        display: inline-block;
        overflow: hidden;
        padding: 0 25px;
        transition: .5s;
        /*vertical-align: middle;*/
        /*margin-top: 30px;*/
    }
    .hj-index-3-item> div{
        transition: .5s;
    }

    .hj-index-3-item> div> img {
        margin-top: 20px;
        margin-bottom: 12px;
    }

    .hj-index-3-item>div > span ,.hj-index-3-item>div>p{
        display: block;
        color: #666;
        font-size: 12px;
        line-height: 24px;
    }
    .hj-index-3-item>div>p{
        text-align: left;
    }
    .hj-index-3-item>div > h3 {
        font-size: 18px;
        font-weight: normal;
    }
    #hj-index-3 .hj-index-3-item:hover {
        height: 160px;
        margin: -999px 0;
    }
    #hj-index-3 .hj-index-3-item:hover div {
        transform: translateY(-82px);
    }

    #hj-index-3 .hj-index-3-item:hover h3 {
        color: #2eafbb;
    }
</style>
