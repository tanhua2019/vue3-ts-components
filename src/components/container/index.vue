<template>
  <el-container>
    <el-aside width="auto">
      <NavSide v-model:isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader v-model:isCollapse="isCollapse"/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import NavSide from './nav-side/index.vue'
import NavHeader from './nav-header/index.vue'

import { ref } from 'vue'
const isCollapse = ref(false)
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border-bottom: 1px solid #ccc;
}
.el-menu {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
