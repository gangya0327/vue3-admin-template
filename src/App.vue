<template>
  <div class="box">
    <p>{{ str }}</p>
    <el-button :icon="Check">按钮</el-button>
    <el-button :icon="Plus">按钮</el-button>

    <Test />

    <p>
      <svg-icon name="cake" />
      <svg-icon name="cart-empty-fill" color="green" />
      <svg-icon name="buyers-club-fill" color="blue" width="50" height="50" />

      <Pagination />
    </p>

    <div class="p-color">我是全局scss变量下的文本</div>
  </div>
</template>

<script setup lang="ts">
import { Check, Plus } from '@element-plus/icons-vue'
import Test from '@/components/Test.vue'
const str = 'abc'

import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style lang="scss" scoped>
.box {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 3px;
  p {
    color: blueviolet;
    text-decoration: underline;
  }
}

.p-color {
  color: $p-color;
}
</style>
