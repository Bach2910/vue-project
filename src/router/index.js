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
        meta: {title: 'Testcenter.vn - Nền tảng đánh giá nhân sự hàng đầu Việt Nam' },
        component: ()=>import ('../views/HomeView.vue'),
      },
      {
        path: '/product',
        name:'Product',
        meta: {title: 'Thông tin chi tiết bộ công cụ đánh giá nhân sự' },
        component: ()=>import ('../views/ProductView.vue'),
      },
      {
        path: '/dieu-khoan-su-dung',
        name: 'terms_use',
        meta: {title: 'điều khoản sử dụng' },
        component: ()=>import ('../views/UseView.vue'),
      },
      {
        path: '/chinh-sach-bao-mat',
        name: 'policy_warning',
        meta: {title: 'chính sách bảo mật thông tin' },
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
        meta: {TextTitle: 'Login', title:'Login' },
        component: () => import('../views/account_pages/LoginView.vue'),
      },
      {
        path: 'forget-password',
        name: 'forgetPassword',
        meta: {TextTitle: 'Forget Password',title:'Forget Password' },
        component: () => import('../views/account_pages/FogotView.vue'),
      },{
        path: 'register',
        name: 'register',
        meta: {TextTitle: 'Register',title:'Register' },
        component: () => import('../views/account_pages/RegisterView.vue'),
      },
      {
        path: 'login/vn',
        name:'loginVN',
        meta: {TextTitle: 'Đăng Nhập', title:'Đăng nhập' },
        component: () => import('../views/account_pages/LoginVN.vue'),
      },
      {
        path: 'forget-password/vn',
        name: 'forgetPasswordVN',
        meta: {TextTitle: 'Quên Mật Khẩu', title:'Quên mật khẩu' },
        component: () => import('../views/account_pages/FogotVN.vue'),
      },{
        path: 'register/vn',
        name: 'registerVN',
        meta: {TextTitle: 'Đăng ký', title:'Đăng ký' },
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
        meta: {title: 'Trang chủ - Testcenter' },
        component:()=> import('../views/resourcesView.vue'),
      },{
        path: '/blog/nhan-su',
        meta: {title: 'Nhân sự - Testcenter' },
        component:()=> import('../views/blogPage/peopleVue.vue')
      }
      ,{
        path: '/blog/tin-tuc',
        meta: {title: 'Tin tức - Testcenter' },
        component:()=> import('../views/blogPage/newView.vue')
      }
      ,{
        path: '/blog/tai-lieu',
        meta: {title: 'Tài liệu - Testcenter' },
        component:()=> import('../views/blogPage/documentVue.vue')
      }
      ,{
        path: '/blog/mau-de-test-online',
        meta: {title: 'Mẫu đề test online - Testcenter' },
        component:()=> import('../views/blogPage/examView.vue')
      }
      ,{
        path: '/blog/tuyen-mass',
        meta: {title: 'Dấu hiệu nhận biết ứng viên không trung thực nhà quản trị cần biết' },
        component:()=> import('../views/content_pages/tuyenMassView.vue')
      },
      {
        path: '/blog/lean-la-gi',
        meta: {title: 'Lean là gì? Phương pháp ứng dụng mô hình Lean để tối ưu chi phí cho doanh nghiệp' },
        component:()=> import('../views/content_pages/leanView.vue')
      },
      {
        path: '/blog/equity-theory-la-gi',
        meta: {title: 'Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng' },
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
        name:'evaluateVIew',
        meta: {title: 'nền tảng đánh giá nhân sự toàn diện' },
        component:()=> import('../views/footer_pages/evaluateVIew.vue'),
      },
      {
        path:'/landing/dao-tao-phat-trien-nhan-su-hieu-qua',
        name:'trainView',
        meta: {title: 'đào tạo phát triển nhân sự hiệu quả' },
        component:()=> import('../views/footer_pages/trainView.vue'),
      },
      {
        path:'/landing/thu-vien-300-de-test-online-cho-nhan-su',
        name:'examTestView',
        meta: {title: 'thư viện 300 đề test online cho nhân sự' },
        component:()=> import('../views/footer_pages/examTestView.vue'),
      },
      ]
    }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.afterEach((to) => {
  const defaultTitle = 'Testcenter.vn - Nền tảng đánh giá nhân sự hàng đầu Việt Nam';
  document.title = to.meta.title || defaultTitle;
});
export default router
