<template>
  <div id="app">
    <ms-self-head></ms-self-head>
    <router-view/>
    <ms-self-footer></ms-self-footer>
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    msSelfHead: () => import(`./components/ms-self-head`),
    msSelfFooter: () => import(`./components/ms-self-footer`),
  },
  created() {
    console.log(window.location.host)
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
}
</style>
