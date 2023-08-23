import { createApp } from 'vue'
import pinia from './store'
import App from './App.vue'
import './style.css'

const app = createApp(App)

app.use(pinia)
app.mount('#app')
