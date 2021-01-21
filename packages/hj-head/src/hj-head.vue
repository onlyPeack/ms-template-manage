<template>
    <header class="header" id="hj-head">
        <div class="wrap" style="width: auto;min-width: 1200px;text-align: center;">
            <div style="display: inline-block;min-width: 135px;">
                <h1 class="fl">
                    <a href="#" class="fl logo">
                        <img :src="module.style[1].value"
                             alt="TI Alliance" width="135" height="43"/>
                    </a>
                </h1>
                <div class="fl logo_text">
                    <div>{{module.text[1].children[0].value}}</div>
                    <div id="choiceLanguage"><a href="javascript:void(0)">
                        <span class="languageChinese">中</span>
                        <img src="http://www.hejigy.com/Img/language/line.png" alt="">
                        <span class="languageEnglish">EN</span></a></div>
                </div>
            </div>
            <div class="frr">
                <nav class="nav">
                    <ul class="fix">
                        <li v-for="(item,index) in module.text[0].children" v-bind:key="item.label" @click="clickIndex=index">
                            <a :href="item.link" :style="`color:${clickIndex===index?module.style[0].value:'unset'} `">
                                {{item.label}}
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "hj-head",
        data() {
            return {
                clickIndex:0,
                module: {
                    name: '和稷头部',
                    id: 'hj-head',
                    style:[
                        {
                            label:'列表点击后颜色',
                            value:'rgb(23, 114, 189)',
                            property:'color'
                        },
                        {
                            label: 'logo',
                            value: 'http://www.hejigy.com/Img/index/logo.png',
                            index: 2,
                            type: 'default',
                            property:'img'
                        },
                    ],
                    text: [
                        {
                            label: '文字组合1',
                            children: [
                                {
                                    label: '首页',
                                    link: '#'
                                },
                                {
                                    label: '品牌专区',
                                    link: '#',
                                }, {
                                    label: '产品与服务',
                                    link: '#',
                                }, {
                                    label: '关于我们',
                                    link: '#',
                                }, {
                                    label: '新闻资讯',
                                    link: '#'
                                }, {
                                    label: '英才招聘',
                                    link: '#'
                                }, {
                                    label: '联系我们',
                                    link: '#'
                                }, {
                                    label: '下载中心',
                                    link: '#'
                                }
                            ]
                        },{
                            label: '文字组合2',
                            children: [
                                {
                                    label: 'logo副标题',
                                    value:'懂你所需，做你所想',
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
    html, body, dl, dd, img, form, div, ul, ol, li, h1, h2, h3, h4, h5, h6, p {
        margin: 0;
        padding: 0;
        border: 0;
    }

    body {
        font-size: 12px;
        font-family: '微软雅黑', Arial;
        min-width: 1423px;
        top: 0px !important;
    }

    ul, ol, li {
        list-style-type: none;
    }

    img {
        border: 0;
        vertical-align: middle
    }

    select, input, select {
        vertical-align: middle;
        outline: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    iframe {
        border: none;
    }

    a:link {
        color: #666666;
        text-decoration: none;
    }

    a:visited {
        color: #666666;
        text-decoration: none;
    }

    a:hover {
        color: #0093ff;
        text-decoration: none;
    }

    a:active {
        color: #0093ff;
        text-decoration: none;
    }

    .c {
        clear: both;
        font-size: 0;
        line-height: 0;
        height: 0;
        visibility: visible;
    }

    .h {
        display: none;
        visibility: visible;
    }

    .wrap {
        border: 0;
        padding: 0;
        width: 1200px;
        margin: 0 auto;
        *zoom: 1;
    }

    .wrap:after {
        clear: both;
        content: "";
        display: table;
    }

    .fix {
        *zoom: 1;
    }

    .fix:after {
        clear: both;
        content: "";
        display: table;
    }

    .fl {
        float: left;
    }

    .fr {
        float: right;
    }

    a img {
        border: none;
    }

    /* header */
    .section {
        overflow: hidden;
        position: relative !important;
    }

    .header {
        min-height: 80px;
        overflow: hidden;
    }

    .header h1 {
        width: 135px;
    }

    .logo {
        padding-top: 18px;
    }

    .fl {
        float: left;
    }

    /*.header .logo_text{width:140px;margin-top:24px;padding-left:5px;}*/
    /*.header .fr{position: absolute;margin-left: 300px;text-align: right;min-width: 900px;}*/
    /*.header .fr .nav .fix{position: relative;min-width: 900px;}*/
    .header .logo_text {
        margin-top: 24px;
        padding-left: 14px;
        height: 34px;
        color: #7D7D7D;
        border-left: 1px solid #7D7D7D;
        font-size: 14px;
    }

    .header .frr {
        display: inline-block;
        text-align: right;
        min-width: 900px;
        vertical-align: top;
    }

    /*margin-top:35px;*/
    .nav {
        position: relative;
        line-height: 80px;
    }

    .nav li {
        display: inline-block;
        padding-left: 40px;
    }

    .nav li a {
        font-size: 14px;
        color: #565656;
        line-height: 14px;
        display: inline-block;
    }

    .nav li a:hover {
        color: #0067B7;
    }

    .nav .nav_icon {
        background: #15909c;
        height: 1px;
        line-height: 1px;
        display: inline-block;
        position: relative;
        top: -6px;
        *top: 0px;
    }

    #choiceLanguage {
        text-align: left;
        cursor: pointer;
    }

    #choiceLanguage a {
        color: #0066b1;
        font-size: 14px;
    }

    #choiceLanguage a img {
        margin: -2px 5px 0px 5px;
    }

    #choiceLanguage1 {
        position: absolute;
        top: 25px;
        right: 25px;
        z-index: 2000;
        opacity: 0.7;
        background-color: #fff;
        border: 1px solid #d5d5d5;
        border-top: 1px solid #9b9b9b;
        border-bottom: 1px solid #e8e8e8;
        font-size: 10pt;
        display: inline-block;
        padding: 2px 5px;
        cursor: pointer;
        zoom: 1;
    }

    #choiceLanguage1 a {
        color: #565656;
    }
</style>
