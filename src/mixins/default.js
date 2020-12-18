import '../assets/css/ms-template-manage.css'
export default {
  data(){
    return{
      module:{

      }
    }
  },
  created(){

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
