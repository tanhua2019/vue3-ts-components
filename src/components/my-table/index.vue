<template>
  <el-table :data="tableData" v-bind="$attrs">
    <template v-for="(item, index) in columns" :key="index">
      <el-table-column v-if="item.enum" v-bind="item">
        <template v-slot="{ row }">
          {{ item.enum[row[item.prop]] }}
        </template>
      </el-table-column>
      <el-table-column v-else-if="!item.slot" v-bind="item"></el-table-column>
      <el-table-column v-else v-bind="item">
        <template v-slot="scope">
          <slot :name="item.slot" :scope="scope"></slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div class="pagination" :style="paginationStyle">
    <el-pagination
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="pageSizes"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { Columns } from './type'

let props = defineProps({
  columns: {
    type: Array as PropType<Columns[]>
  },
  tableData: {
    type: Array as PropType<any[]>
  },
  paginationAlign: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'left'
  },
  currentPage: {
    type: Number,
    default: 1
  },
  pageSize: {
    type: Number,
    default: 10
  },
  pageSizes: {
    type: Array as PropType<number[]>,
    default: [10, 20, 30, 40]
  },
  total: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['size-change', 'current-change'])
const paginationStyle = computed(() => {
  const style = {
    left: 'flex-left',
    center: 'center',
    right: 'flex-end'
  }
  return {
    'justify-content': style[props.paginationAlign]
  }
})

const handleSizeChange = (val: number) => {
  emit('size-change', val)
}
const handleCurrentChange = (val: number) => {
  emit('current-change', val)
}
</script>

<style lang="scss" scoped>
.pagination {
  height: 50px;
  display: flex;
  align-items: center;
}
</style>
