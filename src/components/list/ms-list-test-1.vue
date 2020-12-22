<template>
  <section class="section_card">
    <el-row>
      <div v-bind:class="{section_first:index===0}" v-for="(item,index) in module.article" :key="index">
        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img :src="item.pic">
            <h1>{{item.title}}</h1>
            <h3>{{item.description}}</h3>
            <el-button type="text" class="button"><a href="project-erp.html">了解更多》</a></el-button>
          </el-card>
        </el-col>
      </div>
    </el-row>
  </section>
</template>

<script>
  import mixins from '../../mixins/default'
  export default {
    name: "ms-list-test-1",
    mixin:[mixins],
    data() {
      return {
        module: {
          name: '梅施列表模板测试初号机',
          type:'list',
          article:[
            {
              title:'电商ERP一体化',
              pic:'http://gxcl-shop.qiniu.520mro.com/po3cw0klbmu3o792x7gg.png',
              description:'专业为工业品销售企业提供电商系统及服务，集成订单管理、供应链管理、商城运营、仓储管理、移动商城等按需定制系统，为企业快速构建..',
            },
            {
              title:'Saas协同云服务',
              pic:'http://gxcl-shop.qiniu.520mro.com/161kq321z5l1ixgpkss7.png',
              description:'面向行业应用的新一代智能协同云，实现OA与ERP的完美融合，提供中台服务，连接生产管理、CRM、 项目管理、考勤管理等应用，支持云课堂...',
            },
            {
              title:'WMS智能仓储',
              pic:'http://gxcl-shop.qiniu.520mro.com/e1v9ba17uty97hnl6t34.png',
              description:'专业面向MRO工业品领域，针对仓储精细化管理需求，结合实物现场管理与物流执行过程场景，提供仓配一体化解决方案。',
            },
            {
              title:'生产制造ERP',
              pic:'http://gxcl-shop.qiniu.520mro.com/wldqdvn7ap11i8c273uh.png',
              description:'打造生产全程信息化、一体化管理，工业领域最佳应用，解决企业成本高，效率低，过程不透明等问题..',
            },
          ],
          info:[
            '顶部图片：文章缩略图',
            '中间标题：文章标题',
            '下方文字：文章描述'
          ]
        }
      }
    }
  }
</script>

<style scoped>

  /*H-sectionCard*/
  .section_card {
    margin-top: 52px;
  }

  .section_card div {
    text-align: center;
  }

  .section_card div img {
    margin-top: 2.44vw;
    width: 3.64vw;
  }

  .section_card div h1 {
    margin-top: 1.51vw;
    font-size: 1.25vw;
    color: #404040;
  }

  .section_card div .el-col-3 {
    width: 15.62% !important;
    height: 18.54vw !important;
  }

  .section_card .section_first .el-col-3 {
    margin-left: 16.14%;
  }

  .section_card div .el-col-3 {
    margin-right: 35px;
  }

  .section_card div .el-col-3 .el-card__body {
    height: 18.54vw !important;
  }

  .section_card div h3 {
    font-weight: normal;
    color: #AAAAAA;
    margin-top: 1.14vw;
    padding: 0 1.56vw;
    line-height: 20px;
    text-align: left;
    font-size: 0.72vw;
    height: 80px;
  }

  .section_card div .button {
    margin-top: 10px;
  }

  .section_card div .button a {
    color: #409eff;
  }

  @media screen and (max-width: 768px) {
    .section_card {
      margin-top: 30px;
    }

    .el-row div:after {
      content: '';
      clear: both;
      display: table;
    }

    .el-row div {
      width: 94.33%;
      position: relative;
      margin: 0 auto 20pt auto;
      height: 70.33vw !important;
    }

    .section_card div .el-col-3 {
      width: 100% !important;
    }

    .section_card .section_first .el-col-3 {
      margin-left: 0;
    }

    .section_card div .el-col-3 {
      margin-right: 0;
    }

    .section_card div img {
      margin-top: 6.66vw;
      width: 9.06vw;
    }

    .section_card div h1 {
      font-size: 16pt;
      margin-top: 15pt;
    }

    .section_card div h3 {
      font-size: 12pt;
      margin-top: 17pt;
      height: 80px;
    }

    .el-card {
      margin: 0 !important;
      width: 100% !important;
    }

    /*.section_card div .button{*/
    /*    position: absolute;*/
    /*    left: 40%;*/
    /*}*/
    /*.section_card div .el-col-3 .el-card__body{*/
    /*    height: 100%!important;*/
    /*}*/
  }


  /*E-sectionCard*/
</style>
