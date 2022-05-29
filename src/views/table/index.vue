<template>
  <my-table
    stripe
    :columns="columns"
    :tableData="tableData"
    paginationAlign="center"
    @sizeChange="sizeChange"
    @currentChange="currentChange"
    :currentPage="current"
    :pageSize="pageSize"
    :total="total"
  >
    <template #action="{ scope }">
      <el-button link type="primary" @click="handleClick(scope)">操作</el-button>
    </template>
  </my-table>
</template>

<script lang="ts" setup>
import axios from 'axios'
import { Columns } from '@/components/my-table/type'
import { ref, onMounted } from 'vue'

const columns: Columns[] = [
  {
    label: '日期',
    prop: 'date',
    align: 'center'
  },
  {
    label: '姓名',
    prop: 'name',
    align: 'center'
  },
  {
    label: '性别',
    prop: 'sex',
    align: 'center',
    enum: { 0: '男', 1: '女' }
  },
  {
    label: '地址',
    prop: 'address',
    align: 'center'
  },
  {
    label: '操作',
    align: 'center',
    slot: 'action'
  }
]

const tableData = ref([])
const current = ref<number>(1)
const pageSize = ref<number>(10)
const total = ref<number>(0)
onMounted(() => {
  getData()
})
const getData = () => {
  axios
    .post('/api/list', {
      current: current.value,
      pageSize: pageSize.value
    })
    .then(res => {
      tableData.value = res.data.data.rows
      total.value = res.data.data.total
    })
}

const handleClick = (scope: any) => {
  console.log(scope)
}

const sizeChange = (val: number) => {
  pageSize.value = val
  getData()
}

const currentChange = (val: number) => {
  current.value = val
  getData()
}
</script>

<style lang="scss" scoped></style>
