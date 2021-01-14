<template>
  <article>
    <h1>核心解决方案</h1>
    <h3 class="hidden-sm-and-down">大道至简、颠覆重构，梅施云围绕工业品领域，为行业客户提供从进销存、</h3>
    <h3 class="hidden-sm-and-down">客户管理、生产管理、项目管理、供应链协同、电子商务、在线学习等互联网+解决方案，</h3>
    <h3 class="hidden-sm-and-down">基于saas化业务协同和数据中台，构建产品链与服务链，打通上下游两端需求对接,形成产业生态服务平台。</h3>
    <h3 class="hidden-sm-and-up">大道至简、颠覆重构，梅施云围绕工业品领域，为行业客户提供从进销存，客户管理、生产管理、项目管理、供应链协同、电子商务、在线学习等互联网+解决方案，基于saas化业务协同和数据中台，构建产品链与服务链，打通上下游两端需求对接,形成产业生态服务平台。</h3>
  </article>
</template>

<script>
    export default {
        name: "ms-self-index-1",
        data(){
          return{
            module: {
              name:'梅施官网首页一号模块'
            }
          }
        }
    }
</script>

<style scoped>
  /*H-article*/
  article {
    margin-top: 5.1vw;
    text-align: center;
  }

  article h1 {
    font-size: 2.34vw;
    margin-bottom: 37px;
  }

  article h3 {
    font-size: 1.25vw;
    font-family: 微软雅黑;
    font-weight: normal;
    margin-bottom: 20px;
    color: #404040;
  }

  @media screen and (max-width: 768px) {
    article{
      margin-top: 40pt;
    }
    article h1 {
      font-size: 24pt;
      margin-bottom: 22pt;
    }
    article h3 {
      font-size: 12pt;
      line-height: 21pt;
      width: 90%;
      text-align: left;
      margin: 0 auto;
    }
  }
  /*E-article*/
</style>
