<template>
  <div class="login-account">
    <!--
      form 的rules
      form :model='account'获取表单里的最新的值，用来匹配规则
      form-item 的prop 自动匹配rules里的name规则
     -->
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password" showpassword>
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/account-config'
import { ElForm } from 'element-plus'

export default defineComponent({
  setup() {
    const account = reactive({
      name: '',
      password: ''
    })
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      console.log('真正登录的入口')
      formRef.value?.validate((valid) => {
        console.log(valid)
      })
    }

    return {
      account,
      formRef,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped></style>
