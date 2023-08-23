import { createApp } from 'vue'
import pinia from './store'
import App from './App.vue'
import router from './routes'
// 引入 normalize.css
import 'normalize.css'
// 引入 Tailwind CSS
import '@/assets/styles/tailwind.scss'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
