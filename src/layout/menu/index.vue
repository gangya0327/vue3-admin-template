<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.hidden" :index="item.path">
        <template #title>
          <span>icon </span>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且只有一个 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item v-if="!item.hidden" :index="item.children[0].path">
        <template #title>
          <span>icon </span>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且大于一个 -->
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
      <template #title>
        <span>icon</span>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
defineProps(['menuList']);
</script>

<script lang="ts">
// eslint-disable-next-line vue/no-reserved-component-names
export default { name: 'Menu' };
</script>

<style lang="scss" scoped></style>
