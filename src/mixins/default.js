export default {
  data(){
    return{
      module:{

      }
    }
  },
  created(){
    require('../assets/css/ms-template-manage.css')
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
