<template>
  <div>Home page</div>
  <el-button type="primary">hello</el-button>

  <el-link type="primary" :underline="false">primary</el-link>

  <el-input></el-input>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
