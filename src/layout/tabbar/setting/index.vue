<template>
  <el-button type="primary" size="small" icon="Refresh" circle></el-button>
  <el-button type="primary" size="small" icon="FullScreen" circle></el-button>
  <el-button type="primary" size="small" icon="Setting" circle></el-button>
  <img src="/public/logo.svg" alt="" style="width: 24px; margin: 10px" />

  <el-dropdown>
    <span class="el-dropdown-link"
      >Admin
      <el-icon><ArrowDown /></el-icon>
    </span>

    <template #dropdown>
      <el-dropdown-item>ABC</el-dropdown-item>
      <el-dropdown-item>ABC</el-dropdown-item>
      <el-dropdown-item>ABC</el-dropdown-item>
    </template>
  </el-dropdown>
</template>
