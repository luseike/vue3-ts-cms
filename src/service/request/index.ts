import axios from 'axios'
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { JYLRequestConfig, JYLRequestInterceptors } from './type'

class JYLRequest {
  instance: AxiosInstance
  interceptors?: JYLRequestInterceptors

  constructor(config: JYLRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 从config中取出的拦截器，是对应的request实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        console.log('全局请求拦截')
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  requeset<T>(config: JYLRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          return resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: JYLRequestConfig): Promise<T> {
    return this.requeset<T>({ ...config, method: 'get' })
  }
  post<T>(config: JYLRequestConfig): Promise<T> {
    return this.requeset<T>({ ...config, method: 'post' })
  }
  put<T>(config: JYLRequestConfig): Promise<T> {
    return this.requeset<T>({ ...config, method: 'put' })
  }
  delete<T>(config: JYLRequestConfig): Promise<T> {
    return this.requeset<T>({ ...config, method: 'delete' })
  }
}

export default JYLRequest
