<template>
  <section class="section_card">
    <el-row>
      <div class="section_first">
        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/po3cw0klbmu3o792x7gg.png">
            <h1>电商ERP一体化</h1>
            <h3>专业为工业品销售企业提供电商系统及
              服务，集成订单管理、供应链管理、商
              城运营、仓储管理、移动商城等按需定
              制系统，为企业快速构建..
            </h3>
            <el-button type="text" class="button"><a href="project-erp.html">了解更多》</a></el-button>
          </el-card>
        </el-col>
      </div>
      <div>
        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/161kq321z5l1ixgpkss7.png">
            <h1>Saas协同云服务</h1>
            <h3>面向行业应用的新一代智能协同云，实
              现OA与ERP的完美融合，提供中台服务，
              连接生产管理、CRM、 项目管理、考勤
              管理等应用，支持云课堂...
            </h3>
            <el-button type="text" class="button"><a href="project-saas.html">了解更多》</a></el-button>
          </el-card>
        </el-col>
      </div>
      <div>
        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/e1v9ba17uty97hnl6t34.png">
            <h1>WMS智能仓储</h1>
            <h3>专业面向MRO工业品领域，针对仓储
              精细化管理需求，结合实物现场管理与
              物流执行过程场景，提供仓配一体化解
              决方案。
            </h3>
            <el-button type="text" class="button"><a href="project-wms.html">了解更多》</a></el-button>
          </el-card>
        </el-col>
      </div>
      <div>
        <el-col :span="3">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="http://gxcl-shop.qiniu.520mro.com/wldqdvn7ap11i8c273uh.png">
            <h1>生产制造ERP</h1>
            <h3>打造生产全程信息化、一体化管理，工
              业领域最佳应用，解决企业成本高，效
              率低，过程不透明等问题..　　　　
              　　　　　 　　　
            </h3>
            <el-button type="text" class="button"><a href="project-make.html">了解更多》</a></el-button>
          </el-card>
        </el-col>
      </div>
    </el-row>
  </section>
</template>

<script>
  export default {
    name: "ms-self-index-2",
    data() {
      return {
        module: {
          name: '梅施官网首页二号模块',
          type:'list'
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
