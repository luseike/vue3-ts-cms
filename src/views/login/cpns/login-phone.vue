<template>
  <div class="login-phone">
    <el-form>
      <el-form-item label="手机号">
        <el-input v-model="phone.num"></el-input>
      </el-form-item>
      <div class="code">
        <el-form-item label="验证码">
          <el-input v-model="phone.code"></el-input>
        </el-form-item>
        <el-button type="primary">获取验证码</el-button>
      </div>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })
    return {
      phone
    }
  }
})
</script>

<style scoped lang="less">
.code {
  display: flex;
  justify-content: space-between;
}
</style>
