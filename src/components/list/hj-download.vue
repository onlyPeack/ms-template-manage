<template>
    <div id="hj-download">
        <div class="inside_banner_download">
            <div class="wrap posr">
                <!--<div class="news_seek">
                  <input type="text" id="k" name="k" value="" class="text" />
                  <img src="Picture/btn_search.png"
                  alt="和稷资讯搜索" onClick="search_news()" width="16" height="16" />
                </div>-->
            </div>
        </div>
        <div class="download_tab">
            <font>下载中心/ </font><font>download center</font>
        </div>
        <div class="download_list">
            <ul>
                <li>
                    <img src="http://www.hejigy.com/Img/download/group.jpg"
                         width="35" height="35"/>
                    <a>和稷--ERP (32位）</a>
                    <a class="download_btn" href="http://www.hejigy.com/DownloadPath/和稷ERP客户端-32位.exe">立即下载</a>

                </li>
                <li>
                    <img src="http://www.hejigy.com/Img/download/group.jpg"
                         width="35" height="35"/>
                    <a>和稷--ERP (64位）</a>
                    <a class="download_btn" href="http://www.hejigy.com/DownloadPath//和稷ERP客户端-64位.exe">立即下载</a>

                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hj-download",
        data(){
            return{
                module:{
                    name:'和稷下载',
                    classId:'hj-download',
                    type:'list',

                }
            }
        }
    }
</script>

<style scoped>
    .inside_banner_download{background: url("http://www.hejigy.com/Img/download/banner.jpg") no-repeat center;height: 400px;}
    /*下载中心*/
    .download_tab{
        text-align: center;
        margin: 32px auto 12px auto;
    }
    .download_tab font{
        font-size: 28px;
        color: #666666;
    }
    .download_tab font:last-child{
        color: #95D0FF;
    }
    .download_list{
        width: 1178px;
        margin: 0 auto;
        overflow: hidden;
        padding-bottom: 200px;
    }
    .download_list li{
        background: #f7f7f7;
        zoom: 1;
        margin-top: 18px;
        position: relative;
        min-height: 55px;
        display: flex;
        padding-left: 15px;
        flex-direction: row;
        align-items: center;

    }
    .download_list ul li a{
        font-size: 16px;
        margin-left :8px;
        color:rgba(51,51,51,1);
        font-weight:400;
        font-family:'SourceHanSansCN-Regular';
    }
    .download_btn{
        background: url("http://www.hejigy.com/Img/download/bg-button.jpg") no-repeat center;
        width: 133px;
        height: 33px;
        text-align: center;
        line-height: 33px;
        font-size: 16px;
        font-weight:500;
        color: #ffffff !important;
        position:absolute;
        right:36px;
        top:auto;
        border-radius:3px;

    }
</style>
