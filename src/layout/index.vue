<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider">
      <Logo />
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar">顶部</div>
    <!-- 内容展示 -->
    <div class="layout-main">内容</div>
  </div>
</template>

<script lang="ts" setup>
import Logo from './logo/index.vue';
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;

  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-bg;
  }

  .layout-tabbar {
    position: absolute;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: $base-tabbar-height;
    background-color: violet;
  }

  .layout-main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - #{$base-menu-width});
    height: calc(100% - #{$base-tabbar-height});
    padding: 10px;
    overflow-y: hidden;
    background-color: tan;
  }
}
</style>
