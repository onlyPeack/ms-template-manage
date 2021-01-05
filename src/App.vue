<template>
  <div id="app">
<!--    <ms-self-head ref="msHead"></ms-self-head>-->
    <ms-list-genshin></ms-list-genshin>
<!--&lt;!&ndash;    <el-button type="primary" style="margin-top: 120px;" @click="test">777</el-button>&ndash;&gt;-->
<!--    <router-view/>-->

<!--    <ms-self-footer ref="msFooter"></ms-self-footer>-->
<!--    <ms-list-test-1></ms-list-test-1>-->
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    // msSelfHead: () => import(`./components/ms-self-head`),
    // msSelfFooter: () => import(`./components/ms-self-footer`),
  },
  created() {

  },
  mounted() {
    //console.log(this.$refs['msFooter'].getModule(),'test')
  },
  methods:{
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  min-height: 400px;
}
</style>
