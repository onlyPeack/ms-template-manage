<template>
    <div id="ms-img" :style="`background-image:url(${module.style[0].value})`">

    </div>
</template>

<script>
    export default {
        name: "ms-img",
        props:['imgUrl'],
        data(){
            return{
                module:{
                    name:'梅施图片',
                    classId:'ms-img',
                    type:'default',
                    style:[
                        {
                            label: '顶部图片',
                            value: 'http://www.hejigy.com/Img/download/banner.jpg',
                            property:'img'
                        },
                        {
                            label:'图片高度',
                            name:'--height',
                            value:'400px'
                        },
                        {
                            label:'图片宽度',
                            name:'--width',
                            value:'100%'
                        },
                    ]
                }
            }
        },
        created() {
            if(this.imgUrl&&this.imgUrl!==''){
                this.module.style[0].value=this.imgUrl
            }
        }
    }
</script>

<style scoped>
#ms-img{
    --height:'';
    --width:'';

    height: var(--height);
    width: var(--width);
    margin: 0 auto;
    background-position: center;
}
</style>
