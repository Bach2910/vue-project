import {createRouter, createWebHistory} from 'vue-router'
import HomeLayout from "../layouts/HomeLayout.vue"
import AccountLayout from "@/layouts/AccountLayout.vue";
import FooterLayout from "@/layouts/FooterLayout.vue";
import productView from "@/layouts/productView.vue";
const routes = [
  {
    path: '/',
    component: HomeLayout,
    children: [
      {
        path: '/',
        name:'index',
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
        path: '/blog/nhan-su',
        component:()=> import('../views/blogPage/peopleVue.vue')
      }
      ,{
        path: '/blog/tin-tuc',
        component:()=> import('../views/blogPage/newView.vue')
      }
      ,{
        path: '/blog/tai-lieu',
        component:()=> import('../views/blogPage/documentVue.vue')
      }
      ,{
        path: '/blog/mau-de-test-online',
        component:()=> import('../views/blogPage/examView.vue')
      }
      ,{
        path: '/blog/tuyen-mass',
        component:()=> import('../views/content_pages/tuyenMassView.vue')
      },
      {
        path: '/blog/lean-la-gi',
        component:()=> import('../views/content_pages/leanView.vue')
      },
      {
        path: '/blog/equity-theory-la-gi',
        component:()=> import('../views/content_pages/equityView.vue')
      }
    ]
  },
  {
    path:'/',
    component:FooterLayout,
    children:[
      {
        path:'/landing/nen-tang-danh-gia-nhan-su-toan-dien',
        component:()=> import('../views/footer_pages/evaluateVIew.vue'),
      }
      ]
    }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
