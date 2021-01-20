<template>
    <div id="app">
        <!--    <ms-self-head ref="msHead"></ms-self-head>-->
        <!--&lt;!&ndash;    <el-button type="primary" style="margin-top: 120px;" @click="test">777</el-button>&ndash;&gt;-->
        <!--    <router-view/>-->

        <!--    <ms-self-footer ref="msFooter"></ms-self-footer>-->
        <!--    <ms-list-test-1></ms-list-test-1>-->
        <hj-head></hj-head>
<!--        <hj-banner></hj-banner>-->
<!--        <hj-index-1></hj-index-1>-->
<!--        <hj-index-2></hj-index-2>-->
<!--        <hj-index-3></hj-index-3>-->
<!--        <hj-index-4></hj-index-4>-->
<!--        <hj-index-5></hj-index-5>-->
<!--        <hj-footer></hj-footer>-->
<!--        <hj-news-detail @linkClick="testMethod"></hj-news-detail>-->
<!--        <hj-download></hj-download>-->
<!--        <hj-connect></hj-connect>-->
    </div>
</template>

<script>

    export default {
        name: 'App',
        created() {
            console.log(this.$router,this.$route,'路由信息',this)
        },
        mounted() {
            //console.log(this.$refs['msFooter'].getModule(),'test')
        },
        methods: {
            testMethod(params){
                console.log('方法传递成功!',params)
            }
        }
    }
</script>

<style>
    #app {
        /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
        /*-webkit-font-smoothing: antialiased;*/
        /*-moz-osx-font-smoothing: grayscale;*/
        /*color: #2c3e50;*/
        /*position: relative;*/
        /*min-height: 400px;*/

    }
    body{
        margin: 0;
        padding: 0;
    }
</style>
