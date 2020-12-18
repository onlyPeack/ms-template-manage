<template>
  <header>
    <el-carousel :arrow="arrow">
      <el-carousel-item v-for="(item,index) in module.text" :key="index" :style="`background-image:url(${module.style[index].value})`">
        <hgroup>
          <h2>{{ item.children[0].label }}</h2>
          <h2>{{ item.children[1].label }}</h2>
        </hgroup>
      </el-carousel-item>
    </el-carousel>
  </header>

</template>

<script>

  export default {
    name: "ms-self-scroll",
    data: function () {
      return {
        visible: false,
        tabPosition: 'left',
        timeout: 100,
        arrow: 'hover',
        // slide: [{
        //   first: "用匠心和智慧打造软件精品",
        //   second: ""
        // }, {
        //   first: "可靠的技术架构、流畅的用户体验、",
        //   second: "贴心的客户服务"
        // },
        //   {first: "践行梅花精神，不畏艰难，", second: "撬动浩瀚的IT宇宙"}],
        module: {
          name: '梅施官网轮播',
          style:[
            {
              label: '轮播1',
              value: 'http://gxcl-shop.qiniu.520mro.com/fmol52kmnfawuut4r7oz.png',
              index: 0,
              type: 'default',
              property:'img'
            },
            {
              label: '轮播2',
              value: 'http://gxcl-shop.qiniu.520mro.com/aoecdmsq1tuzhgqnu9v6.png',
              index: 1,
              type: 'default',
              property:'img'
            },
            {
              label: '轮播3',
              value: 'http://gxcl-shop.qiniu.520mro.com/yew83t7cdf6d9o9r6mfa.png',
              index: 2,
              type: 'default',
              property:'img'
            },
          ],
          text:[
            {
              label:'轮播1',
              children:[
                {
                  label:'用匠心和智慧打造软件精品'
                },
                {
                  label:''
                },
              ]
            },
            {
              label:'轮播2',
              children:[
                {
                  label:'可靠的技术架构、流畅的用户体验、'
                },
                {
                  label:'贴心的客户服务'
                },
              ]
            },
            {
              label:'轮播3',
              children:[
                {
                  label:'践行梅花精神，不畏艰难，'
                },
                {
                  label:'撬动浩瀚的IT宇宙'
                },
              ]
            }
          ]
        },
        // imgUrl:['./image/index/e-erp.png','./image/index/Saas.png','./image/index/WMS.png','./image/index/erp.png']
      }
    },
    created() {
      this.arrow = window.window.screen.width >= 768 ? 'hover' : 'never'
      this.tabPosition = window.window.screen.width >= 768 ? 'left' : 'top'
      // console.log(this.getModule())
    },
    mounted() {
      let h = document.documentElement.clientHeight || document.body.clientHeight;
      let header = document.getElementsByTagName('header')[0];
      header.style.height = h + 'px';
    },
    methods:{
      getModule() {
        return this.module
      },
    }
  }
</script>

<style>
  /*H-header*/
  @media screen and (max-width: 768px) {
    .PC {
      display: none;
    }

    .Phone {
      display: inline-block;
    }
  }

  #app {
    overflow: hidden;
  }

  /*.el-carousel__item:nth-child(2n-1) {*/
  /*  background-image: url('http://gxcl-shop.qiniu.520mro.com/yew83t7cdf6d9o9r6mfa.png');*/
  /*  !*background-size: contain;*!*/
  /*  background-repeat: no-repeat;*/
  /*  background-position: center;*/
  /*}*/

  /*.el-carousel__item:nth-child(2n) {*/
  /*  background-image: url('http://gxcl-shop.qiniu.520mro.com/aoecdmsq1tuzhgqnu9v6.png');*/
  /*  !*background-size: contain;*!*/
  /*  background-repeat: no-repeat;*/
  /*  background-position: center;*/
  /*}*/

  /*.el-carousel__item:nth-child(3) {*/
  /*  background-image: url('http://gxcl-shop.qiniu.520mro.com/fmol52kmnfawuut4r7oz.png');*/
  /*  !*background-size: contain;*!*/
  /*  background-repeat: no-repeat;*/
  /*  background-position: center;*/
  /*}*/

  .el-carousel__item{
    /*background-size: contain;*/
    background-repeat: no-repeat;
    background-position: center;
  }

  .el-carousel__item h2 {
    color: white;
    text-align: center;
    /*font-size: 80px;*/
    font-size: 4.16vw;
    margin-bottom: 30px;
  }

  .el-carousel__item hgroup {
    padding-top: 19.27vw;
  }

  .el-carousel__item hgroup h2 {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  }

  .el-carousel--horizontal {
    overflow-x: inherit;
    height: 100%;
  }

  .el-carousel__container {
    height: 100%;
  }

  .el-carousel__indicators {
    margin-bottom: 40px;
  }

  .el-carousel__button {
    height: 7px;
    border-radius: 7px;
  }

  @media screen and (max-width: 768px) {
    .el-carousel__item hgroup {
      padding-top: 77.27vw;
    }

    .el-carousel__item h2 {
      font-size: 32pt;
      line-height: 64pt;
      text-align: center;
    }
  }


  /*E-header*/
</style>
