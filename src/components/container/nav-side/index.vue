<template>
  <el-menu :collapse="isCollapse" default-active="2" class="el-menu-vertical-demo">
    <el-menu-item index="2">
      <el-icon-menu />
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon-menu />
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon-menu />
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
  isCollapse: {
    type: Boolean as PropType<Boolean>
  }
})
</script>

<style lang="scss" scoped></style>
