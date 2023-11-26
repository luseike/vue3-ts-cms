import { Store } from 'vuex'

/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

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
