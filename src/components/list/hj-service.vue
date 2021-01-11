<template>
    <div id="hj-service">
        <div class="hj-service-banner"></div>
        <h2 id="hj-service-title">{{module.text[0].children[0].value}}<span>{{module.text[0].children[1].value}}</span>
        </h2>
    </div>
</template>

<script>
    import {elementAnimate} from "../../assets/js/elementAnimate";

    export default {
        name: "hj-service",
        data() {
            return {
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
</style>
