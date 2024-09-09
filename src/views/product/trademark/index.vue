<template>
  <el-card class="box-card">
    <!-- 卡片顶部添加按钮 -->
    <el-button type="primary" icon="Plus">添加品牌</el-button>
    <!-- 表格组件：用于展示已有平台数据 -->
    <el-table border style="margin: 10px 0">
      <el-table-column label="序号" width="80" align="center"></el-table-column>
      <el-table-column label="品牌名称"> </el-table-column>
      <el-table-column label="品牌Logo"></el-table-column>
      <el-table-column label="操作"></el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      :current-page="pageNo"
      :page-size="limit"
      :total="126"
      layout="total, jumper, sizes, prev, pager, next"
      :page-sizes="[10, 20, 50]"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getTrademarkList } from '@/api/product/trademark/index.ts';

const pageNo = ref<number>(1);
const limit = ref<number>(5);

const handleSizeChange = () => {};
const handleCurrentChange = () => {};

const getTrademark = async () => {
  await getTrademarkList(pageNo.value, limit.value);
};
onMounted(() => {
  getTrademark();
});
</script>

<style lang="scss" scoped></style>
