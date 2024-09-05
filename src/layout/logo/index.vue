<template>
  <div class="logo" v-if="setting.showLogo">
    <img :src="setting.logo" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting.ts';
</script>

<script lang="ts">
export default { name: 'Logo' };
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: $base-menu-logo-title-fz;

  > img {
    width: 40px;
    height: 40px;
    margin: 12px;
  }
}
</style>
