<template>
  <el-button type="primary" size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button type="primary" size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button type="primary" size="small" icon="Setting" circle></el-button>
  <!-- <img src="/public/logo.svg" alt="" style="width: 24px; margin: 10px" /> -->
  <img :src="userStore.avatar" alt="" style="width: 24px; margin: 10px" />

  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon><ArrowDown /></el-icon>
    </span>

    <template #dropdown>
      <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      <el-dropdown-item>ABC</el-dropdown-item>
      <el-dropdown-item>ABC</el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import useLayoutSettingStore from '@/store/modules/setting.ts';
import useUserStore from '@/store/modules/user.ts';
import { useRoute, useRouter } from 'vue-router';

const layoutSettingStore = useLayoutSettingStore();
const userStore = useUserStore();
// 刷新
const updateRefresh = () => {
  layoutSettingStore.refresh = !layoutSettingStore.refresh;
};

// 全屏
const fullScreen = () => {
  const full = document.fullscreenElement;
  if (!full) {
    document.documentElement?.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};

const $route = useRoute();
const $router = useRouter();
// 退出登录
const logout = async () => {
  await userStore.logout();
  $router.push({ path: '/login', query: { redirect: $route.fullPath } });
};
</script>

<script lang="ts">
export default { name: 'Setting' };
</script>
