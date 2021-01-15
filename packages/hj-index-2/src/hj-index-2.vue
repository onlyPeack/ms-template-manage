<template>
    <div id="hj-index-2">
        <h2 id="hj-index-2-title">{{module.text[0].children[0].value}}<span>{{module.text[0].children[1].value}}</span>
        </h2>
        <div id="hj-index-2-content">
            <div>
                <img src="http://www.hejigy.com/Img/index/company.jpg" alt="">
                <p>
                    <span style="color: #0067BB;">{{module.text[1].children[0].value}}</span>
                    {{module.text[1].children[1].value}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {elementAnimate} from "../../../src/assets/js/elementAnimate";

    export default {
        name: "hj-index-2",
        data() {
            return {
                module: {
                    name: '和稷首页二号',
                    classId: 'hj-index-2',
                    type: 'default',
                    text: [
                        {
                            label: '标题文字',
                            type: 'default',
                            children: [
                                {
                                    label: '左侧文字',
                                    value: '公司简介/'
                                },
                                {
                                    label: '右侧文字',
                                    value: 'Company Profile'
                                },
                            ]
                        }, {
                            label: '右侧文字',
                            type: 'default',
                            children: [
                                {
                                    label: '公司名称',
                                    value: '和稷(上海)工业控制系统有限公司'
                                },
                                {
                                    label: '内容简介',
                                    value: '，是一家专业代理销售国内以及国外知名品牌电气元件的集成销售商，公司通过自己现有健全的销售平台，在线上线下构建起了自己的销售网为新老客户提供了一条全新的购买途径，和自动化设备以及元件的解决方案。我司着重追求产品的性能与质量，代理众多国内外知名品牌工业产品:施耐德、欧姆龙、西门子、ABB、明纬、正泰……'
                                }
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
                }
            }
        },
        mounted() {
            new elementAnimate([document.getElementById('hj-index-2-title')], 'titleTranslateNoVolume 1s forwards')
            new elementAnimate([document.getElementById('hj-index-2-content')], 'leftFormFlyIn 2s forwards')
        }
    }
</script>

<style scoped>
    #hj-index-2 {
        --leftColor: '';
        --leftFontSize: '';
        --rightColor: '';
        --rightFontSize: '';


        height: 390px;
        margin: 0 auto;

    }

    #hj-index-2 h2 {
        font-size: var(--leftFontSize);
        color: var(--leftColor);
        font-weight: normal;
        margin-bottom: 30px;
        margin-top: 30px;
        text-align: center;
    }

    #hj-index-2 h2 span {
        font-size: var(--rightFontSize);
        margin-left: 5px;
        color: var(--rightColor);
    }

    #hj-index-2 > div {
        height: 330px;
        background-color: rgb(224, 234, 246);

    }

    #hj-index-2 > div > div {
        width: 1200px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin: 0 auto;
        height: 100%;
    }

    #hj-index-2 > div img {
        width: 600px;
        height: 270px;
    }

    #hj-index-2 > div p {
        width: 400px;
        font-size: 14px;
        text-indent: 20px;
        line-height: 28px;
    }
</style>
