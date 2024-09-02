<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form">
          <h1>你好</h1>
          <h2>欢迎来到英明甄选</h2>

          <el-form-item>
            <el-input v-model="loginForm.username" :prefix-icon="User"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" :prefix-icon="Lock" show-password type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" style="width: 100%" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
import userUserStore from '@/store/modules/user.ts';
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus';
import { getTime } from '@/utils/time.ts';

const $router = useRouter();

const loading = ref(false);

const userStore = userUserStore();
const loginForm = reactive({ username: 'admin', password: '123456' });

const login = async () => {
  loading.value = true;
  try {
    await userStore.userLogin(loginForm);
    $router.push('/');
    loading.value = false;
    ElNotification({ type: 'success', title: getTime() + '好', message: '登录成功' });
  } catch (error) {
    loading.value = false;
    ElNotification({ type: 'error', message: (error as Error).message });
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100vh;
  // background: url('@/assets/login/bg1.jpg') no-repeat;
  background: url('@/assets/login/bg2.png') no-repeat;
  background-size: cover;

  .login-form {
    position: relative;
    width: 80%;
    top: 30vh;
    padding: 10px 20px;
    text-align: center;
    color: #fff;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.5);
  }
}
</style>
