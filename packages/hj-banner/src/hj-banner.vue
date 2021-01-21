<template>
    <div id="hj-banner">
        <el-carousel arrow="never">
            <el-carousel-item v-for="item in module.article" :key="item.pic">
                <div :style="`background-image:url(${item.pic})`" class="banner-item"></div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "hj-banner",
        data() {
            return {
                module: {
                    name: '和稷轮播',
                    classId: 'hj-banner',
                    type: 'list',
                    article: [
                        {
                            pic: 'http://www.hejigy.com/Img/index/banner1.jpg',
                        },
                        {
                            pic: 'http://www.hejigy.com/Img/index/banner2.jpg',
                        },
                    ],
                    style: [
                        {
                            label: '指示器默认背景色',
                            name:'--defaultColor',
                            value: '#ffffff',
                            property: 'color',
                            type:'style'
                        },
                        {
                            label: '指示器激活背景色',
                            name:'--activeColor',
                            value: '#2eafbb',
                            property: 'color',
                            type:'style'
                        },
                        {
                            label: '轮播整体高度',
                            name:'--boxHeight',
                            value: '540px',
                            type:'style'
                        }
                    ],
                    info: [
                        '图片:网页缩略图',
                        '轮播整体高度设置为1时为一整屏高度'
                    ]
                }
            }
        },
        methods:{
            setStyle(styleArr){
                let root=document.getElementById(this.module.classId)
                for (let i = 0; i <styleArr.length ; i++) {
                    if(styleArr[i].name&&styleArr[i].name!==''){
                        if(styleArr[i].value*1===1){
                            let h = document.documentElement.clientHeight || document.body.clientHeight;
                            root.style.setProperty(styleArr[i].name,h+'px')
                        }else{
                            root.style.setProperty(styleArr[i].name,styleArr[i].value)
                        }

                    }
                }
            },
        }
    }
</script>

<style scoped>
    #hj-banner {
        --activeColor: '';
        --defaultColor: '';
        --boxHeight:'';

        height: var(--boxHeight);
    }

    #hj-banner .banner-item {
        width: 100%;
        height: 100%;
    }

</style>
<style>
    #hj-banner .el-carousel__button {
        width: 50px;
        height: 2px;
        opacity: 1;
        background-color: var(--defaultColor);
    }

    #hj-banner .el-carousel__indicator.is-active button {
        background-color: var(--activeColor);
    }
    #hj-banner .banner-item{
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
</style>
