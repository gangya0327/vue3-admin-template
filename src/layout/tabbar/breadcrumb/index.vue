<template>
  <el-icon @click="changeExpand">
    <component :is="layoutSettingStore.fold ? 'Expand' : 'Fold'"></component>
  </el-icon>

  <el-breadcrumb separator-icon="ArrowRight" style="margin-left: 10px">
    <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <div style="display: flex; align-items: center">
        <el-icon style="margin-right: 5px">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';
import useLayoutSettingStore from '@/store/modules/setting.ts';

const layoutSettingStore = useLayoutSettingStore();

// 菜单折叠
const changeExpand = () => {
  layoutSettingStore.fold = !layoutSettingStore.fold;
};

const $route = useRoute();
</script>

<script lang="ts">
export default { name: 'BreadCrumb' };
</script>
