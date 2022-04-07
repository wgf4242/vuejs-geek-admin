<template>
  <el-container>
    <el-header>Header</el-header>
    <!-- <el-main>Main</el-main> -->
    <!-- <el-footer>Footer</el-footer> -->
  </el-container>
  <hr />
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>-->
      <el-button>Button</el-button>
      <el-button type="primary">按钮</el-button>
      <el-button type="success">按钮</el-button>
      <el-button>按钮</el-button>
      <el-button size="small">按钮</el-button>
    </el-container>
  </el-container>
  <hr />
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>Header</el-header>
      <!-- <el-main>Main</el-main>
      <el-footer>Footer</el-footer>-->
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
</script>
<style>
body {
  width: 1000px;
  margin: 10px auto;
}
.el-header,
.el-footer {
  /* ..设置额外的css样式 */
}
</style>