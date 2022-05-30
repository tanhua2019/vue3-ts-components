import { App } from "vue";
import myTable from './my-table'
import myIcon from './my-icon'

const components = [
  myTable,
  myIcon
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}