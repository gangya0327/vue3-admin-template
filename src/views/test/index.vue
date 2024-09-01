<template>
  <div class="box">
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
    <br />

    <div class="parent">
      <div class="son"></div>
      <div class="son"></div>
      <div class="son"></div>
      <div class="son"></div>
      <div class="son"></div>
      <div class="son"></div>
      <div class="son"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Check, Plus } from '@element-plus/icons-vue';
import Test from '@/components/Test.vue';

import SvgIcon from '@/components/SvgIcon/index.vue';

// import { login, getUserInfo } from '@/api/user/index.ts';
import { login, getUserInfo } from '@/api/user';

import { onMounted } from 'vue';
onMounted(() => {
  login({ username: 'admin', password: '123456' }).then((res: { data: object }) => {
    console.log('res :>> ', res.data);
  });
  getUserInfo().then((res: { data: object }) => {
    console.log('res :>> ', res.data);
  });
});
</script>

<style lang="scss" scoped>
.box {
  padding: 10px;
  width: 300px;
  height: 200px;

  p {
    color: blueviolet;
    text-decoration: underline;
  }
}

.p-color {
  color: $p-color;
}

.parent {
  border: 1px solid #ccc;
  width: 600px;
  display: flex;
  flex-wrap: wrap;

  .son {
    width: 50px;
    height: 50px;
    $n: 5; // 每行个数
    margin: 20px calc((100% - 50px * $n) / $n / 2);

    &:nth-child(3n) {
      background-color: burlywood;
    }
    &:nth-child(3n + 1) {
      background-color: cornflowerblue;
    }
    &:nth-child(3n + 2) {
      background-color: forestgreen;
    }
  }
}
</style>
