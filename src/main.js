import { createApp } from 'vue'
import App from './App.vue'
import ElmenntPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)
app.use(ElmenntPlus)
app.mount('#app') 

createApp(App).mount('#app')
