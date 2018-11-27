import axios from 'axios'
const Myserverhttp={}
Myserverhttp.install = function (Vue) {
    // 配置axios的基本url
    axios.defaults.baseURL='http://127.0.0.1:8888/api/private/v1'
    // 添加实例方法$http
    Vue.prototype.$http = axios
  }

  export default Myserverhttp