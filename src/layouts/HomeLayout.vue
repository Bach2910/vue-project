<script setup>
import {RouterLink, RouterView, useRoute, useRouter} from "vue-router";
import {onMounted, onUnmounted, ref, watch} from "vue";

const headerBackground = ref("rgba(255,255,255,0)");
const handleScroll = () => {
  const scrollPos = window.scrollY;
  headerBackground.value = scrollPos > 40 ? '#ffffff' : 'rgba(255,255,255,0)';
};
const initializeOwlCarousel = () => {
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  initializeOwlCarousel();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
const routerClass = useRoute();
const pageTitle = ref('')
watch(
  () => routerClass.path,
  (newPath) => {
    switch (newPath) {
      case '/':
        pageTitle.value = 'body-container'
        break
      case '/product':
        pageTitle.value = 'body-container-product'
        break
      default:
        pageTitle.value = 'body-container-pages'
    }
  },
  {immediate: true}
)
const router = useRouter();
const scrollToTop = () => {
  router.push('/product').then(() => {
    const element = document.getElementById('top');
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  });
};
const isNavbarOpen = ref(false);
const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value;
};
</script>
<template>
  <div :class="pageTitle" id="top">
    <header class="header" :style="{ background: headerBackground }">
      <nav class="container navbar navbar-expand-lg navbar-light" :class="{ 'navbar-form': isNavbarOpen }">
        <a class="navbar-brand" href="/">
          <img class="logo-img" alt="Testcenter" src="https://www.testcenter.vn/images/logo.png" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          :aria-expanded="isNavbarOpen ? 'true' : 'false'"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="['collapse navbar-collapse', { show: isNavbarOpen }]" id="navbarNav">
          <div class="form-inline">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <RouterLink class="nav-link header-item" :to="{ path: '/'}">Trang chủ</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link header-item" :to="{ name: 'Product'}" @click="scrollToTop" target="_blank">Tính năng</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink
                  class="nav-link header-item"
                  :to="{ path: '/product', hash: '#price' }" target="_blank"
                >
                  Bảng giá
                </RouterLink>
              </li>
              <li class="nav-item">
                <router-link :to="{path:'/blog'}" class="nav-link header-item" target="_blank">Tài nguyên</router-link>
              </li>
            </ul>
          </div>
          <div class="form-inline">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <router-link :to="{name: 'register'}" class="nav-link header-item" style="color: #2B4AA0"  target="_blank">Đăng ký</router-link>
              </li>
              <li class="nav-item">
                <router-link :to="{path: '/login'}"
                  class="nav-link header-item"
                  style="color: #2C4A9F; font-weight: 500"
                  target="_blank"
                >Đăng nhập</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <RouterView/>
    <div class="footer bg-primary">
      <div class="container p-5">
        <div class="row">
          <div class="col-lg-3 col-md-12 col-sm-12 pr-5 mb-4">
            <img
              alt="Testcenter"
              class="w-100 noselect"
              src="https://app.testcenter.vn/images/logo/logo_white_3x.png"
            />
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <h2 class="text-white font-weight-bold font-size-16">GIẢI PHÁP CHO DOANH NGHIỆP</h2>
            <p><router-link :to="{name:'freeRegister'}" target="_blank" class="text-sm text-light link-item">Tạo tài khoản miễn phí</router-link></p>
            <p><router-link :to="{name:'testOnline'}" target="_blank" class="text-sm text-light link-item">Công cụ tạo bài test online</router-link></p>
            <p><router-link :to="{name:'examTestView'}" target="_blank" class="text-sm text-light link-item">Ngân hàng đề thi mẫu đa dạng</router-link></p>
            <p><router-link :to="{name:'evaluateVIew'}" target="_blank" class="text-sm text-light link-item">Đánh giá năng lực nhân sự</router-link></p>
            <p><router-link :to="{name:'trainView'}" target="_blank" class="text-sm text-light link-item">Đào tạo nhân sự hiệu quả</router-link></p>
            <p><router-link :to="{name:'wrongView'}" target="_blank" class="text-sm text-light link-item">Giảm tỉ lệ tuyển dụng sai người</router-link></p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-12">
            <h2 class="text-white font-weight-bold font-size-16">VỀ TESTCENTER</h2>
            <p><a href="#" class="text-sm text-light link-item">Giới thiệu</a></p>
            <p><router-link :to="{name:'terms_use'}" target="_blank"  class="text-sm text-light link-item">Điều khoản sử dụng</router-link></p>
            <p><router-link :to="{name:'policy_warning'}" target="_blank" class="text-sm text-light link-item">Chính sách bảo mật</router-link></p>
            <div class="list-social-network">
              <a href="#"><img alt="facebook" class="social-network-icon" src="@/assets/facebook.png"/></a>
              <a href="#"><img alt="twitter" class="social-network-icon" src="@/assets/twitter.png"/></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-12">
            <a href="tel://0967778018" class="btn btn-warning rounded border-0 px-3 pr-5">
              <p class="mb-1 text-left text-dark">Hotline tư vấn</p>
              <h4 class="text-large text-dark">098.917.4495</h4>
            </a>
            <p class="noselect text-light text-sm mt-3">@Testcenter.vn 2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

