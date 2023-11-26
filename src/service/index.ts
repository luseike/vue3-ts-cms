// service 统一出口
import JYLRequest from './request'

import { BASE_URL } from './request/config'
// const jylRequest = new JYLRequest()
export default new JYLRequest({
  baseURL: BASE_URL,
  timeout: 3000,

  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功的拦截')

      const token = ''
      if (token) {
        config.headers.Authorization = token
      }
      return config
    },
    requestInterceptorCatch: (error) => {
      console.log('请求失败的拦截')
      console.log(error)
      return error
    }
  }
})
