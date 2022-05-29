import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from '@/router'
import UI from '@/components'

const app = createApp(App)
import './mock'

app.use(router).use(ElementPlus).use(UI)
app.mount('#app')
