import {createRouter, createWebHistory} from 'vue-router'
import HomeLayout from "../layouts/HomeLayout.vue"
import AccountLayout from "@/layouts/AccountLayout.vue";
import productView from "@/layouts/productView.vue";
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
        name:'Product',
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
        name: 'login',
        meta: {TextTitle: 'Login' },
        component: () => import('../views/account_pages/LoginView.vue'),
      },
      {
        path: 'forget-password',
        name: 'forgetPassword',
        meta: {TextTitle: 'Forget Password' },
        component: () => import('../views/account_pages/FogotView.vue'),
      },{
        path: 'register',
        name: 'register',
        meta: {TextTitle: 'Register' },
        component: () => import('../views/account_pages/RegisterView.vue'),
      },
      {
        path: 'login/vn',
        name:'loginVN',
        meta: {TextTitle: 'Đăng Nhập' },
        component: () => import('../views/account_pages/LoginVN.vue'),
      },
      {
        path: 'forget-password/vn',
        name: 'forgetPasswordVN',
        meta: {TextTitle: 'Quên Mật Khẩu' },
        component: () => import('../views/account_pages/FogotVN.vue'),
      },{
        path: 'register/vn',
        name: 'registerVN',
        meta: {TextTitle: 'Đăng ký' },
        component: () => import('../views/account_pages/RegisterVN.vue'),
      }
    ]
  },
  {
    path:'/',
    component:productView,
    children:[
      {
        path:'/blog',
        component:()=> import('../views/resourcesView.vue'),
      },{
        path: '/blog/document',
        component:()=> import('../views/blogPage/documentVue.vue')
      }

    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
