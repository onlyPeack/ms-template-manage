<template>
    <!--底部-->
    <footer class="footer" id="hj-head">
        <div class="contact">

            <div class="left-one">
                <ul>
                    <li v-if="module.text[0].children[0].value*1!==0">地址：{{module.text[0].children[0].value}}</li>
                    <li v-if="module.text[0].children[1].value*1!==0">邮编：{{module.text[0].children[1].value}}</li>
                    <li v-if="module.text[0].children[2].value*1!==0">电话：{{module.text[0].children[2].value}}</li>
                </ul>
            </div>

            <div class="left-two">
                <ul>
                    <li v-if="module.text[0].children[3].value*1!==0">邮箱：{{module.text[0].children[3].value}}</li>
                    <li>相关链接：
                        <el-link v-for="item in module.article" v-bind:key="item.title" :href="item.description" target="_blank" style="vertical-align: baseline;margin-right: 15px;">{{item.title}}</el-link>
                    </li>
                </ul>
            </div>

            <div class="right-one" v-if="module.text[0].children[4].value*1!==0">
                <img :src="module.style[0].value"
                     width="98" height="98" :alt="module.text[0].children[4].value"/>
                <ul>
                    <li>{{module.text[0].children[4].value}}</li>
                </ul>
            </div>

            <div class="right-two" v-if="module.text[0].children[5].value*1!==0">
                <img :src="module.style[1].value"
                     width="98" height="98" :alt="module.text[0].children[5].value"/>
                <ul>
                    <li>{{module.text[0].children[5].value}}</li>
                </ul>
            </div>

        </div>
        <div class="copyright">
            <div v-if="module.text[0].children[6].value*1!==0">
                {{module.text[0].children[6].value}}
            </div>
            <div v-if="module.text[0].children[7].value*1!==0">{{module.text[0].children[7].value}}</div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "hj-footer",
        data(){
            return{
                module:{
                    name:'和稷尾部',
                    classId:'hj-footer',
                    text:[
                        {
                            label:'企业信息文字组：',
                            children:[
                                {
                                    label: '地址：',
                                    value:'上海市嘉定区江桥镇金园六路319号B栋'
                                },{
                                    label: '邮编：',
                                    value:'201800'
                                },{
                                    label: '电话：',
                                    value:'021-69974155'
                                },{
                                    label: '邮箱：',
                                    value:'417022660@qq.com'
                                },{
                                    label: '公众号1：',
                                    value:'工享创联公众号'
                                },{
                                    label: '公众号2：',
                                    value:'和稷工业公众号'
                                },{
                                    label: '版权信息1：',
                                    value:'© 2010-2018 和稷(上海)工业控制系统有限公司 All Rights Reserved'
                                },{
                                    label: '版权信息2：',
                                    value:'经营许可证编号：沪ICP备16009044号-1'
                                },
                            ]
                        }
                    ],
                    style:[
                        {
                            label: '公众号1',
                            value: 'http://www.hejigy.com/Img/index/gxcl.jpg',
                            type: 'default',
                            property:'img'
                        },{
                            label: '公众号2',
                            value: 'http://www.hejigy.com/Img/index/hjgy.png',
                            type: 'default',
                            property:'img'
                        },
                    ],
                    article:[
                        {
                            title:'工享创联',
                            description:'http://www.520mro.com'
                        },{
                            title:'梅施云',
                            description:'http://cloud.msebc.com/#/'
                        },
                    ],
                    info:['字段内容设置为0时此字段隐藏','相关链接关联文章二级栏目,文章标题：链接名,文章描述：链接地址(完整地址)']
                }
            }
        }
    }
</script>

<style scoped>
    /* index 2016-pro1-14 */
    html,body,dl,dd,img,form,div,ul,ol,li,h1,h2,h3,h4,h5,h6,p{margin:0;padding:0;border:0;}
    body{font-size:12px;font-family:'微软雅黑',Arial;min-width: 1423px;top:0px!important;}
    ul,ol,li{ list-style-type:none;}
    img{border:0;vertical-align:middle}
    select,input,select{vertical-align:middle;outline: none;}
    table{border-collapse:collapse;border-spacing:0}
    iframe{border:none;}
    a:link{color:#666666;text-decoration:none;}
    a:visited{color:#666666;text-decoration:none;}
    a:hover{color:#0093ff;text-decoration:none;}
    a:active{color:#0093ff;text-decoration:none;}
    .c{clear:both;font-size:0;line-height:0;height:0;visibility:visible;}
    .h{display:none;visibility:visible;}
    .wrap{border:0;padding:0;width:1200px;margin:0 auto;*zoom:1;}
    .wrap:after{clear:both;content:"";display:table;}
    .fix{*zoom:1;}
    .fix:after{clear:both;content:"";display:table;}
    .fl{float:left;}
    .fr{float:right;}
    a img{
        border: none;
    }
    /* footer */
    .footer {background:#EEEEEE;width:100%}
    /*height:172px;*/
    .contact{background:#EEEEEE;margin:auto;margin-top:40px;padding-top: 38px;width:964px;color: #7A7A7A;font-size: 14px;}
    .left-one {font-size: 14px;width:380px;float:left;}
    .left-two {font-size: 14px;;width:310px;float:left;}
    .right-one {font-size: 14px;width:100px;display: inline-block;margin-bottom: 40px;}
    .right-two {width:100px;float:right;margin-bottom: 40px;}
    .left-one li,.left-two li{
        list-style-type:none;
        padding-bottom: 17px;
        padding-right: 15px;
    }
    .right-one li,.right-two li{
        list-style-type:none;
        padding-top: 20px;
        font-size: 12px;
        text-align: center;
    }
    /*height: 72px;*/
    .copyright{width:1200px;border-top: 1px solid #A0A0A0;margin: auto;padding-top: 18px;}
    .copyright div{font-size: 12px;color: #7A7A7A;line-height: 24px;text-align: center;}
    .copyright div:nth-child(2){padding-bottom: 24px;}
</style>
