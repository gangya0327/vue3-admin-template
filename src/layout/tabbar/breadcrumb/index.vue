<template>
  <el-icon><Expand /></el-icon>

  <el-breadcrumb separator-icon="ArrowRight" style="margin-left: 10px">
    <el-breadcrumb-item :to="{ page: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>
