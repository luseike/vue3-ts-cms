import { Store } from 'vuex'

/* eslint-disable */
declare module '*.vue' {
  // Vue3 使用自定义组件 Could not find a declaration file for module './login-account.vue' implicitly has an 'any' type.

  // 这个文件的目的是让TS能够更好的理解.vue文件，并把他们作为Vue组件处理
  // 这样ts就知道任何.vue结尾的文件都是Vue组件，并把他们都当做DefineComponent类型处理
  // 其中DefineComponent是Vue3提供的类型，这样之后就不会收到关于缺少声明类型文件的错误

  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明自己定义的一些类型
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    [x: string]: any
  }

  // 为 this.$store 提供声明类型
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
