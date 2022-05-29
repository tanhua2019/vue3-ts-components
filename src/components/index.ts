import { App } from "vue";
import myTable from './my-table'

const components = [
  myTable
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}