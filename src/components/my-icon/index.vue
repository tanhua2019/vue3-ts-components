<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog v-model="isShow" :title="title" @close="close">
    <div class="content">
      <div class="item" v-for="(item, i) in Object.keys(ElementPlusIconsVue.icons)" :key="i" @click="handleCopy(item)">
        <component :is="`el-icon-${toLine(item)}`"></component>
        <span>{{ item }}</span>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { toLine, copy } from '@/utils'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
defineProps<{
  title: String
  isShow: Boolean
}>()
console.log(ElementPlusIconsVue)
const emit = defineEmits(['update:isShow'])
const dialogVisible = ref(false)
const handleClick = () => {
  emit('update:isShow', true)
}
const close = () => {
  emit('update:isShow', false)
}
const handleCopy = item => {
  let text = `el-icon-${toLine(item)}`
  emit('update:isShow', false)
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  overflow: scroll;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    width: 25%;
    height: 70px;
  }
  svg {
    width: 2em;
    height: 2em;
  }
}
</style>
