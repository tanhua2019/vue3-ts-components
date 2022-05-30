import {  ElMessage } from 'element-plus'
export const toLine = (val: string) => {
  return val.replace(/(A-Z)/g, '$1').toLocaleLowerCase()
}

export const copy = (val: string) => {
  const input = document.createElement('input')
  input.value = `<${val} />`
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  ElMessage.success('复制成功')
}