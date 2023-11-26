import { createApp } from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import jylRequest from './service/index'
import 'normalize.css'
import './assets/css/index.less'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component) // 注册全局组件，供其他组件使用，如：<el-icon-loading />
}
app.use(store).use(router).mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

jylRequest
  .requeset<DataType>({
    url: '/home/multidata',
    method: 'get'
  })
  .then((res) => {
    console.log(res)
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
