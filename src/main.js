import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'owl.carousel';
import $ from 'jquery';
const app = createApp(App)
app.config.errorHandler = (err, vm, info) => {
  console.error('Lỗi toàn cục:', err, info);
};
app.config.globalProperties.$ = $;
app.use(router)
app.mount('#app')
