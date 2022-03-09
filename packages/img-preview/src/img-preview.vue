<template>
    <div>
        <el-image :src="showImage" style="width: 120px; height: 80px;cursor: pointer" @click="doShowImageViewer(src)"></el-image>
        <el-image-viewer :url-list="srcList" v-if="showImageViewer" :on-close="closeImageViewer"/>
    </div>

</template>

<script>
    import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
    export default {
        name: "img-preview",
        props:{
            src:{
                type:[String,Array],
                required:true
            }
        },
        data(){
            return{
                showImageViewer:false,//是否展示图片预览
                srcList: ['http://gxcl-shop.qiniu.520mro.com/5snm6e6lxrkaysv6w2gj.jpg'],//图片预览数组
            }
        },
        computed:{
          showImage(){
              if(Object.prototype.toString.call(this.src) === '[object Array]'&&this.src.length>0){
                  return this.src[0]
              }else{
                  return  this.src
              }
          }
        },
        components: {
            ElImageViewer
        },
        methods:{
            /**
             * 展示图片大图预览
             * @param img 图片地址
             */
            doShowImageViewer(img){
                this.$set(this.srcList,0,img)
                this.showImageViewer=true
            },

            /**
             * 关闭图片预览
             */
            closeImageViewer(){
                this.showImageViewer=false
            }
        }
    }
</script>

<style scoped>

</style>
