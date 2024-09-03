<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider">
      <Logo />
      <el-scrollbar class="scrollbar">
        <el-menu :default-active="$route.path" background-color="#001529" text-color="#fff">
          <Menu :menuList="menuList" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar">
      <Tabbar />
    </div>
    <!-- 内容展示 -->
    <div class="layout-main">
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

import useUserStore from '@/store/modules/user.ts';
const userStore = useUserStore();
const menuList = reactive(userStore.menuRoutes);

import { useRoute } from 'vue-router';
const $route = useRoute();
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-bg;

    .scrollbar {
      width: 100%;
      color: #fff;
      height: calc(100% - $base-menu-logo-height);

      .el-menu {
        border-right: none;
      }
    }
  }

  .layout-tabbar {
    position: absolute;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: $base-tabbar-height;
    background-color: #fff;
  }

  .layout-main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: calc(100% - #{$base-tabbar-height});
    background-color: tan;
  }
}
</style>
