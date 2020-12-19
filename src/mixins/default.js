// import '../assets/css/ms-template-manage.css'
export default {
  data(){
    return{
      module:{

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
  methods:{
    getModule() {
      return this.module
    },
    setModule(module) {
      this.module = module
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
    }
  }
}
