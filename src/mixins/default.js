// import '../assets/css/ms-template-manage.css'
export default {
  data(){
    return{
      module:{

      }
    }
  },
  created(){
    //let a=require('../assets/css/ms-template-manage.css')
    //require('../assets/css/ms-template-manage.css')
    //console.log('混入了CSS')
  },
  methods:{
    getModule() {
      return this.module
    },
    setModule(module) {
      this.module = module
    },
  }
}
