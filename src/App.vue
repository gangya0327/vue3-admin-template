<template>
  <div class="box">
    <p>{{ str }}</p>
    <el-button :icon="Check">按钮</el-button>
    <el-button :icon="Plus">按钮</el-button>
  </div>
</template>

<script setup lang="ts">
import { Check, Plus } from '@element-plus/icons-vue'
const str = 'abc'
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
</style>
