<template>
  <div class="list-genshin" id="list-genshin">
    <ul class="list-genshin-list">
      <li class="list-genshin-item" v-for="(item) in articleList" v-bind:key="item.title">
        <img :src="item.pic" alt="">
        <router-link :to="item.link">
          <h2>{{item.title}}</h2>
        </router-link>

        <div class="list-genshin-item-time">
          <span style="color: #999;margin-right: 60px;">{{item.releaseTime}}</span>
          <span style="color: #ffc000">新闻</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ms-list-genshin",
    data() {
      return {
        module: {
          name: 'genshin新闻',
          type: 'list',
          limit:3,
          classId:'list-genshin',
          article: [
            {
              title: '电商ERP一体化',
              pic: 'http://gxcl-shop.qiniu.520mro.com/mx76lh9xv1nr88roi3ej.jpg',
              description: '专业为工业品销售企业提供电商系统及服务，集成订单管理、供应链管理、商城运营、仓储管理、移动商城等按需定制系统，为企业快速构建..',
              releaseTime: '2020-12-25',
              link:'#'
            },
            {
              title: 'Saas协同云服务',
              pic: 'http://gxcl-shop.qiniu.520mro.com/mx76lh9xv1nr88roi3ej.jpg',
              description: '面向行业应用的新一代智能协同云，实现OA与ERP的完美融合，提供中台服务，连接生产管理、CRM、 项目管理、考勤管理等应用，支持云课堂...',
              releaseTime: '2020-12-25',
              link:'#'
            },
            {
              title: 'WMS智能仓储',
              pic: 'http://gxcl-shop.qiniu.520mro.com/mx76lh9xv1nr88roi3ej.jpg',
              description: '专业面向MRO工业品领域，针对仓储精细化管理需求，结合实物现场管理与物流执行过程场景，提供仓配一体化解决方案。',
              releaseTime: '2020-12-25',
              link:'#'
            },
            {
              title: '生产制造ERP',
              pic: 'http://gxcl-shop.qiniu.520mro.com/mx76lh9xv1nr88roi3ej.jpg',
              description: '打造生产全程信息化、一体化管理，工业领域最佳应用，解决企业成本高，效率低，过程不透明等问题..',
              releaseTime: '2020-12-25',
              link:'#'
            },
          ],
          style:[
            {
              label:'行高：',
              name:'--item-height',
              value:'140px'
            },
            {
              label:'背景色：',
              name:'--item-bg-color',
              value:'#ffffff',
              property:'color'
            },
          ],
          info: [
            '左侧图片：文章缩略图',
            '标题：文章标题',
            '下方时间：发布时间'
          ]
        }
      }
    },

  }
</script>

<style scoped>
  .list-genshin {
    --itemHeight:'';
    --itemBgColor:'';


    background-color: rgb(240, 240, 240);
    min-height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .list-genshin-list {
    width: 66.6%;
    margin: 0 auto;
  }
  .list-genshin-item{
    min-height: var(--itemHeight);
    background-color: var(--itemBgColor);
    padding: 20px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 10px;
  }
  .list-genshin-item img{
    width: 265px;
    height: 140px;
  }
  .list-genshin-item h2{
    display: inline-block;
    vertical-align: top;
    font-size: 24px;
    margin-top: 0;
    margin-left: 30px;
  }
  .list-genshin-item .list-genshin-item-time{
    position: absolute;
    bottom: 20px;
    right: 37px;
  }
</style>
