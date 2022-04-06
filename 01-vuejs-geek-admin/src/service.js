import axios from "axios"
// import { useMsgbox, Message } from "element3"
import store from "@/store"
import { getToken } from "@/utils/auth"
console.log('api is ', import.meta.env)
const service = axios.create({
  // baseURL: import.meta.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // timeout: 5000, // request timeout
})

service.interceptors.request.use(
  config => {
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken()
    // }
    const token = getToken()
    // do something before request is sent
    if (token) {
      config.headers.gtoken = token
    }
    return config
  },
    error => {
      // do something with request error
      console.log(error) // for debug
      return Promise.reject(error)
    }


)
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.code !== 20000) {
      console.log("接口信息报错", res.message)

      return Promise.reject(new Error(res.message || "Error"))
    } else {
      return res
    }
  },
  error => {
    console.log("接口信息报错" + error)

    return Promise.reject(error)
  }
)
export default service
