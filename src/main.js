import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
  console.error('Lỗi toàn cục:', err, info);
};

app.use(router)
app.mount('#app')
