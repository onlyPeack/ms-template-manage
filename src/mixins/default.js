
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
      let root=document.getElementById(this.module.classId)
      for (let i = 0; i <styleArr.length ; i++) {
        if(styleArr[i].name&&styleArr[i].name!==''){
          root.style.setProperty(styleArr[i].name,styleArr[i].value)
        }
      }
    },
    linkClick(params,flag){
      if(params&&params!==''){
        params=flag+'='+params
        this.$emit('linkClick',params)
      }

    }
  },
  mounted(){
    if(this.module.style.length>0){
      this.setStyle(this.module.style)
    }
  }
}
