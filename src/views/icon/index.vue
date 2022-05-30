<template>
  <my-icon title="选择图标" v-model:isShow="isShow"> 选择图标 </my-icon>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const isShow = ref<Boolean>(false)
</script>

<style lang="scss" scoped></style>
