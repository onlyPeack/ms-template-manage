<template>
  <nav class="nav" ref="ms-self-head" v-bind:style="navStyle">
    <a href="./index.html">
      <!--            <img src="../image/index/logo.png" alt="logo" class="logo"></a>-->
      <img :src="module.style[2].value" alt="logo" class="logo"></a>
    <ul class="nav_list">
      <li v-for="(item) in module.text[0].children" v-bind:key="item.label">
        <el-dropdown :show-timeout=0 v-if="item.children&&item.children.length>0">
                  <span class="el-dropdown-link">
                    {{item.label}}
                  </span>
          <el-dropdown-menu slot="dropdown">
            <a :href="child.link" v-for="child in item.children" v-bind:key="child.label">
              <el-dropdown-item>{{child.label}}</el-dropdown-item>
            </a>
          </el-dropdown-menu>
        </el-dropdown>
        <span v-else>
          <a :href="item.link">{{item.label}}</a>
        </span>
      </li>
    </ul>
    <i class="iconfont menuBtn" v-if="!isShow" @click="isShow=!isShow">&#xe653;</i>
    <i class="iconfont menuBtn" v-else @click="isShow=!isShow"
       style="font-size: 2em;margin-right: 5vw;">&#xe678;</i>
    <el-collapse-transition>
      <el-menu default-active="2"
               v-if="isShow"
               style="position: absolute;top: 15.42vw;width: 100%"
               class="el-menu-vertical-demo">
        <el-menu-item index="1">
          <a href="./index.html" slot="title">
            <div>首页</div>
          </a>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <span>产品</span>
          </template>
          <el-menu-item index="2-1">
            <a href="./goods-erp-1.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>云ERP</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="2-2">
            <a href="./goods-e-erp.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>云电商</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="2-3">
            <a href="./goods-cloud-classRoom.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>云课堂</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="2-4">
            <a href="./goods-wms.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>云仓储</li>
              </ul>
            </a>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>解决方案</span>
          </template>
          <el-menu-item index="3-1">
            <a href="./project-erp.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>电商ERP一体化</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="3-2">
            <a href="./project-saas.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>Saas协同云服务</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="3-3">
            <a href="./project-wms.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>WMS智能仓储</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="3-4">
            <a href="./project-make.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>生产制造ERP</li>
              </ul>
            </a>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>行业赋能</span>
          </template>
          <el-menu-item index="4-1">
            <a href="./industry-pim.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>PIM数据中台</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="4-2">
            <a href="./industry-wit.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>工业智库</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="4-3">
            <a href="./industry-integration.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>工业物联集成</li>
              </ul>
            </a>
          </el-menu-item>
          <el-menu-item index="4-4">
            <a href="./industry-operator.html" slot="title">
              <ul style="list-style-type:disc;">
                <li>工业电商代运营</li>
              </ul>
            </a>
          </el-menu-item>
        </el-submenu>

        <el-menu-item index="4">
          <a href="./about-us.html" slot="title">
            <div>关于我们</div>
          </a>
        </el-menu-item>
      </el-menu>
    </el-collapse-transition>
  </nav>
</template>

<script>
  export default {
    name: 'ms-self-head',
    data() {
      return {
        navStyle: '',
        isShow: false,
        module: {
          name: '梅施官网头部',
          type:'default',
          style: [
            {
              label: '静默时背景色',
              name: 'backgroundColor',
              value: 'rgba(0,0,0,0)',
              // value:'red',
              index: 0,
              type: 'style',
              property:'color'
            },
            {
              label: '激活时背景色',
              name: 'backgroundColor',
              value: '#1E2327',
              // value: 'red',
              index: 1,
              type: 'style',
              property:'color'
            },
            {
              label: 'logo',
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
        },
      }
    },
    created() {
      // console.log(this.$refs['ms-self-head'].style,'style')
      this.computedStyle()
      //require('../assets/css/ms-template-manage.css')
      // console.log(require('../assets/css/ms-template-manage.css'),'css')
      //console.log(this.getModule(), 'getModule')
    },
    mounted() {
      // console.log(window.screen.width,'width')
      //监听滚动条是否在最顶部,如果不是则给导航条黑色背景色
      window.onscroll = () => {
        let nav = document.getElementsByClassName("nav")[0];
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        if (window.screen.height >= scrollTop) {
          nav.style.top = scrollTop + 'px';
        }

        //console.log("这是在组件里的事件")
        if (window.screen.width >= 768) {
          nav.style.backgroundColor = scrollTop === 0 ? this.module.style[0].value : this.module.style[1].value
        }
      }
    },
    watch: {
      module: function () {
        this.computedStyle()
      }
    },
    methods: {
      getModule() {
        return this.module
      },
      setModule(module) {
        this.module = module
        this.computedStyle()
      },
      computedStyle() {
        let style = [{
          "backgroundColor": this.module.style[0].value,
          '--activeColor':this.module.style[1].value
        }]
        for (let i = 2; i < this.module.style.length; i++) {
          if (this.module.style.type === 'style') {
            style.push({
              [this.module.style[i].name]: this.module.style[i].value
            })
          }
        }
        this.navStyle = style
        //console.log(this.navStyle, 'style')
      }
    }
  }
</script>
<style scoped>
  @import "../assets/css/ms-template-manage.css";
  @import "../assets/css/reset.css";
  /*H-nav*/
  nav {
    position: absolute;
    top: 0;
    float: left;
    z-index: 666;
    width: 100%;
    height: 3.12vw;
  }

  nav:hover {
    background-color: var(--activeColor) !important;
  }

  nav .menuBtn {
    display: none;
  }

  .logo {
    margin-top: 13px;
    margin-left: 64px;
    width: 8.02vw;
  }

  .nav_list {
    color: white;
    display: inline-block;
    font-size: 0.83vw;
    font-weight: bold;
    text-align: center;
    position: absolute;
    top: 0.67vw;
    right: 3.33vw;
  }

  .nav_list li {
    float: left;
    width: 5.2vw;
    height: 1.77vw;
    margin-left: 2.08vw;
    line-height: 1.77vw;
    cursor: pointer;
    font-weight: 400;
  }

  .nav_list li a {
    color: white;
    font-weight: 400;
  }

  .nav_list li:hover span {
    color: rgba(255, 255, 255, .5);
  }

  .nav_list li:hover a {
    color: rgba(255, 255, 255, .5);
  }

  .nav_list li button, .nav_contain button {
    width: 100px;
    height: 1.77vw;
    background: rgba(0, 0, 0, 0);
    color: white;
    border-radius: 5px;
    border: 1px solid white;
  }

  /*H-element ui 样式*/
  .el-dropdown-link {
    cursor: pointer;
    color: white;
    font-size: 0.83vw;
  }

  .el-icon-arrow-down {
    font-size: 12px;
    line-height: 12px;
  }

  .nav_img {
    margin-left: 14px;
  }

  .el-dropdown-menu__item a {
    color: rgb(68, 68, 68);
  }


  @media screen and (max-width: 768px) {
    nav {
      background-color: black;
      height: 15.29vw;
    }

    nav .menuBtn {
      float: right;
      color: white;
      display: inline-block;
      font-size: 3em;
      line-height: 16.99vw;
      margin-right: 3vw;
    }

    .logo {
      width: 28.26vw;
      margin-left: 6.66vw;
      margin-top: 4.93vw;
    }

    .nav_list {
      display: none;
    }
  }

  /*E-nav*/
  /*H-header*/
  header {
    height: 697px;
    position: relative;
    background-position: center;
  }

  /*E-element ui 样式*/
  .header_contain {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 17.7vw;
  }

  .header_title {
    font-size: 4.06vw;
    color: white;
  }

  .header_contain h1 {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
  }

  .header_contain h2 {
    color: white;
    font-weight: 400;
    font-size: 2.80vw;
    margin-top: 28px;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);

  }

  .header_contain button {
    width: 200px;
    font-size: 17px;
    height: 54px;
    margin-top: 70px;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0);
    color: white;
    border-radius: 5px;
  }

  /*E-header*/
</style>
