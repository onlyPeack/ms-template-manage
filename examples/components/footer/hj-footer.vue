<template>
    <!--底部-->
    <footer class="footer" id="hj-head">
        <div class="contact">

            <div class="left-one">
                <ul>
                    <li>地址：上海市嘉定区江桥镇金园六路319号B栋</li>
                    <li>邮编：201800</li>
                    <li>电话：021-69974155</li>
                </ul>
            </div>

            <div class="left-two">
                <ul>
                    <li>邮箱： 417022660@qq.com</li>
                    <li>相关链接：工享创联 <a href="https://www.520mro.com" target="_blank">www.520mro.com</a></li>
                </ul>
            </div>

            <div class="right-one">
                <img src="http://www.hejigy.com/Img/index/gxcl.jpg"
                     width="98" height="98" alt="工享创联公众号"/>
                <ul>
                    <li>工享创联公众号</li>
                </ul>
            </div>

            <div class="right-two">
                <img src="http://www.hejigy.com/Img/index/hjgy.png"
                     width="98" height="98" alt="和稷工业公众号"/>
                <ul>
                    <li>和稷工业公众号</li>
                </ul>
            </div>

        </div>
        <div class="copyright">
            <div>
                © 2010-2018 和稷(上海)工业控制系统有限公司 All Rights Reserved
            </div>
            <div>经营许可证编号：沪ICP备16009044号-1</div>
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
                    id:'hj-footer'
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
