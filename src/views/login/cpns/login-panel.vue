<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>

    <div class="login-control">
      <el-checkbox v-model="isRemindPwd">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const isRemindPwd = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLoginClick = () => {
      accountRef.value?.loginAction()
    }
    return {
      isRemindPwd,
      accountRef,
      handleLoginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 400px;
  .title {
    text-align: center;
  }

  .login-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }

  .login-btn {
    width: 100%;
    height: 40px;
    margin-top: 10px;
  }
}
</style>
