<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <BreadCrumb />
    </div>

    <div class="tabbar-right">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from './breadcrumb/index.vue';
import Setting from './setting/index.vue';
</script>

<script lang="ts">
export default { name: 'Tabbar' };
</script>

<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to right, #efe, palegoldenrod);

  .tabbar-left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabbar-right {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
}
</style>
