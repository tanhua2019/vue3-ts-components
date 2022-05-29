import Table from './index.vue'
import { App } from 'vue'

export default {
  install: (app: App) => {
    app.component('my-table', Table)
  }
}