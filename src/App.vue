<template>
  <div id="app">
    <ms-self-head ref="msHead"></ms-self-head>
<!--    <el-button type="primary" style="margin-top: 120px;" @click="test">777</el-button>-->
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
    //console.log(window.location.host)
  },
  methods:{
    test(){
      let module= {
        name: '梅施官网头部',
          style: [
          {
            label: '静默时背景色',
            name: 'backgroundColor',
            // value: 'rgba(0,0,0,0)',
            value:'red',
            index: 0,
            type: 'style',
            property:'color'
          },
          {
            label: '激活时背景色',
            name: 'backgroundColor',
            value: '#1E2327',
            index: 1,
            type: 'style',
            property:'color'
          },
          {
            label: 'logo地址',
            value: 'http://gxcl-shop.qiniu.520mro.com/3le3x83dr036q266qw9q.png',
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
                link: './index.html'
              },
              {
                label: '产品介绍',
                link: '#',
                children: [
                  {
                    label: '云ERP',
                    link: '#'
                  }, {
                    label: '云电商',
                    link: '#'
                  }, {
                    label: '云课堂',
                    link: '#'
                  }, {
                    label: '云仓储',
                    link: '#'
                  }
                ]
              }, {
                label: '解决方案',
                link: '#',
                children: [
                  {
                    label: '电商ERP一体化',
                    link: '#'
                  }, {
                    label: 'Saas协同云服务',
                    link: '#'
                  }, {
                    label: 'WMS智能仓储',
                    link: '#'
                  }, {
                    label: '生产制造ERP',
                    link: '#'
                  }
                ]
              }, {
                label: '行业赋能',
                link: '#',
                children: [
                  {
                    label: 'PIM数据中台',
                    link: '#'
                  }, {
                    label: '工业智库',
                    link: '#'
                  }, {
                    label: '工业物联集成',
                    link: '#'
                  }, {
                    label: '工业电商代运营',
                    link: '#'
                  }
                ]
              }, {
                label: '关于我们',
                link: '#'
              }
            ]
          }
        ]
      }
      this.$refs['msHead'].setModule(module)
    }
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
