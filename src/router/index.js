import {createRouter, createWebHistory} from 'vue-router'
import HomeLayout from "../layouts/HomeLayout.vue"
import AccountLayout from "@/layouts/AccountLayout.vue";
import FooterLayout from "@/layouts/FooterLayout.vue";
const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/',
        component: ()=>import ('../views/HomeView.vue'),
      },
      {
        path: '/product',
        component: ()=>import ('../views/ProductView.vue'),
      },
      {
        path: '/dieu-khoan-su-dung',
        name: 'terms_use',
        component: ()=>import ('../views/UseView.vue'),
      },
      {
        path: '/chinh-sach-bao-mat',
        name: 'policy_warning',
        component: ()=>import ('../views/PolicyView.vue'),
      },
    ]
  },
  {
    path: '/',
    name: 'AccountLayout',
    component: AccountLayout,
    children: [
      {
        path: 'login',
        meta: {TextTitle: 'Login' },
        component: () => import('../views/account_pages/LoginView.vue'),
      },
      {
        path: 'forget-password',
        meta: {TextTitle: 'Forget Password' },
        component: () => import('../views/account_pages/FogotView.vue'),
      },{
        path: 'register',
        meta: {TextTitle: 'Register' },
        component: () => import('../views/account_pages/RegisterView.vue'),
      },
      {
        path: 'login/vn',
        meta: {TextTitle: 'Đăng Nhập' },
        component: () => import('../views/account_pages/LoginVN.vue'),
      },
      {
        path: 'forget-password/vn',
        meta: {TextTitle: 'Quên Mật Khẩu' },
        component: () => import('../views/account_pages/FogotVN.vue'),
      },{
        path: 'register/vn',
        meta: {TextTitle: 'Đăng ký' },
        component: () => import('../views/account_pages/RegisterVN.vue'),
      }
    ]
  },
  {
    path:'/',
    component:FooterLayout,
    children:[{
        path:'/train',
        component:()=> import('../views/TrainView.vue'),
    }]
  }

]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
