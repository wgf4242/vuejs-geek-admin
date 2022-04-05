<template>
  <el-form
    ref="formRef"
    :model="loginForm"
    label-width="120px"
    v-loading="loading"
    @keyup.enter="handleLogin(formRef)"
  >
    <el-form-item label="用户名">
      <el-input v-model="loginForm.username" />
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="loginForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin(formRef)">登录</el-button> 
      <el-button type="primary" @click="logout">Logout</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { Msgbox } from 'element3'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const router = useRouter()
const store = useStore()

const loading = ref(false)
const formRef = ref()
const loginForm = reactive({
  username: 'dasheng', password: ''
})

function handleLogin() {
  formRef.value.validate(async valid => {
    if (valid) {
      loading.value = true
      // const { code, message } = await store.dispatch('login', loginForm)
      const { code, message } = await store.dispatch('login', loginForm)

      loading.value = false
      if (code === 20000) {
        const accessRoutes = [
            { path: "/about", name: "About", component: () => import('@/pages/About.vue')}
        ]
        store.dispatch('addRoutes',{routes: accessRoutes, router})
        router.replace("/")
        // router.replace(toPath || "/")
      } else {
        message({
          message: "登录失败",
          type: "error"
        })
      }
    } else {
      console.log("error submit!!")

      return false
    }
  })
}

function logout() {
  store.dispatch('logout').then(res => {
    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code === 50008 || res.code === 50012) {
      // to re-login
      Msgbox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        confirmButtonText: 'Re-Login',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    }
    return Promise.reject(new Error(res.message || 'Error'))
  })
  router.replace("/login")
}
</script>