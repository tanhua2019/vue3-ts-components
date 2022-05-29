<template>
  <div class="header">
    <span @click="toggle">
      <el-icon-expand v-if="isCollapse" />
      <el-icon-fold v-else />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
const props = defineProps<{ isCollapse: Boolean }>()
const emit = defineEmits(['update:isCollapse'])
const toggle = () => {
  emit('update:isCollapse', !props.isCollapse)
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
}
</style>
