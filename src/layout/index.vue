<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu :collapse="layoutSettingStore.fold" :default-active="$route.path" background-color="#001529" text-color="#fff">
          <Menu :menuList="menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Tabbar />
    </div>
    <!-- 内容展示 -->
    <div class="layout-main" :class="{ fold: layoutSettingStore.fold ? true : false }">
      <Main />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import Logo from './logo/index.vue';
import Menu from './menu/index.vue';
import Tabbar from './tabbar/index.vue';
import Main from './main/index.vue';
import { useRoute } from 'vue-router';

import useUserStore from '@/store/modules/user.ts';
import useLayoutSettingStore from '@/store/modules/setting.ts';

const userStore = useUserStore();
const menuList = reactive(userStore.menuRoutes);

const $route = useRoute();

const layoutSettingStore = useLayoutSettingStore();
</script>

<script lang="ts">
export default { name: 'Layout' };
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-bg;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      color: #fff;
      height: calc(100% - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }

    &.fold {
      width: $base-menu-min-width;
    }
  }

  .layout-tabbar {
    position: absolute;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: $base-tabbar-height;
    transition: all 0.3s;

    &.fold {
      left: $base-menu-min-width;
      width: calc(100% - $base-menu-min-width);
    }
  }

  .layout-main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: calc(100% - #{$base-tabbar-height});
    background-color: tan;
    transition: all 0.3s;

    &.fold {
      left: $base-menu-min-width;
      width: calc(100% - $base-menu-min-width);
    }
  }
}
</style>
