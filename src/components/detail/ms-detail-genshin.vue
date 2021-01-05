<template>
  <div class="detail-genshin">
    <div class="detail-genshin-body">
      <h3>{{module.detail.title}}</h3>
      <h4>{{module.detail.releaseTime}}</h4>
      <div  v-html="module.detail.content"></div>
      <div class="detail-genshin-page">
        <router-link to="#">
          <span style="transform: rotate(180deg);">

          </span>
        </router-link>
        <router-link to="#">
          <span style="float: right">

          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ms-detail-genshin",
    data() {
      return {
        module: {
          name: 'genshin新闻详情',
          detail:{
            title:'这是文章标题',
            releaseTime:'这是文章发布时间',
            content:'这是文章内容',
          }
        }
      }
    }
  }
</script>

<style scoped>
  .detail-genshin {
    min-height: 100vh;
    background-image: url('http://gxcl-shop.qiniu.520mro.com/wmjyadys6k0k9rtzz8i2.jpg');
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .detail-genshin-body{
    margin-top: 90px;
    background-color: #f0f0f0;
    padding: 40px 90px 115px;
    border-top: #e8cba7 solid 6px;
    width: 720px;
  }
  .detail-genshin-body h3{
    font-size: 40px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  .detail-genshin-body h4{
    font-weight: normal;
  }
  .detail-genshin-page{
    margin-top:50px;
  }
  .detail-genshin-page span{
    width: 70px;
    height: 44px;
    background-color: #393b40;
    background-image: url('http://gxcl-shop.qiniu.520mro.com/ol293e36e1hejdpgtjew.png');
    display: inline-block;
    background-repeat: no-repeat;
    background-position: center;
    opacity: .8;
    cursor: pointer;
    background-size: 14px 23px;
    border-radius: 5px;
  }
</style>
