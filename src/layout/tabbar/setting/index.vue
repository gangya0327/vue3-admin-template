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
      <el-dropdown-item>ABC</el-dropdown-item>
      <el-dropdown-item>ABC</el-dropdown-item>
      <el-dropdown-item>ABC</el-dropdown-item>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import useLayoutSettingStore from '@/store/modules/setting.ts';
import useUserStore from '@/store/modules/user.ts';

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
</script>

<script lang="ts">
export default { name: 'Setting' };
</script>
