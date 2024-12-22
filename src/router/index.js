import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "../views/ProductView.vue";
import UseView from "../views/UseView.vue";
import PolicyView from "../views/PolicyView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/product',
      name: 'product',
      component: AboutView,
    },
    {
      path: '/dieu-khoan-su-dung',
      name: 'terms_use',
      component: UseView,
    },
    {
      path: '/chinh-sach-bao-mat',
      name: 'policy_warning',
      component: PolicyView,
    },
  ],
})
export default router
