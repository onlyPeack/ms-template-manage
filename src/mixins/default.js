// import '../assets/css/ms-template-manage.css'
export default {
  data(){
    return{
      module:{
        classId:'',
        style:[]
      },
      isMobile:false
    }
  },
  created(){
    //let a=require('../assets/css/ms-template-manage.css')
    //require('../assets/css/ms-template-manage.css')
    //console.log('混入了CSS')
    this.isMobile=this.client().width<768
  },
  computed:{
    articleList:function(){
      if(this.module.type==='list'){
        return this.module.article.slice(0,this.module.limit||0)
      }
    }
  },
  methods:{
    getModule() {
      return this.module
    },
    setModule(module) {
      this.module = Object.assign(this.module,module)
      if(this.module.style.length>0){
        this.setStyle(this.module.style)
      }
    },
    client(){
      if (window.innerHeight !== undefined) {
        return {
          "width": window.innerWidth,
          "height": window.innerHeight
        }
      } else if (document.compatMode === "CSS1Compat") {
        return {
          "width": document.documentElement.clientWidth,
          "height": document.documentElement.clientHeight
        }
      } else {
        return {
          "width": document.body.clientWidth,
          "height": document.body.clientHeight
        }
      }
    },

    setStyle(styleArr){
      //console.log(this.module,'module')
      let root=document.getElementById(this.module.classId)
      for (let i = 0; i <styleArr.length ; i++) {
        if(styleArr[i].name&&styleArr[i].name!==''){
          root.style.setProperty(styleArr[i].name,styleArr[i].value)
        }
      }
    }
  },
  mounted(){
    if(this.module.style.length>0){
      this.setStyle(this.module.style)
    }
  }
}
