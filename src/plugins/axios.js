import Vue from 'vue'
import axios from 'axios'

axios.default.baseURL = "htpp://localhost:8080/api/"

Vue.use({
    install(Vue){
        Vue.prototype.$axios = axios
    }
})