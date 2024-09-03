<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item v-if="!item.hidden" :index="item.path" @click="goRoute">
        <template #title>
          <el-icon> <component :is="item.meta.icon"></component> </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且只有一个 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item v-if="!item.hidden" :index="item.children[0].path">
        <template #title>
          <el-icon> <component :is="item.meta.icon"></component> </el-icon>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有子路由且大于一个 -->
    <el-sub-menu v-if="item.children && item.children.length > 1" :index="item.path">
      <template #title>
        <el-icon> <component :is="item.meta.icon"></component> </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
defineProps(['menuList']);

const userRouter = useRouter();

const goRoute = (vc: any) => {
  userRouter.push(vc.index);
};
</script>

<script lang="ts">
// eslint-disable-next-line vue/no-reserved-component-names
export default { name: 'Menu' };
</script>

<style lang="scss" scoped></style>
