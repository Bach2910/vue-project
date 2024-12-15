<template>
  <div id="main">
    <div :class="pageClass">
      <!-- Header -->
      <header class="header" :style="{ background: headerBackground }">
        <nav class="container navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="/">
            <img class="logo-img" alt="Testcenter" src="https://www.testcenter.vn/images/logo.png" />
          </a>
          <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="form-inline">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link header-item" :class="{ active: currentRoute === 'index' }" href="/">Trang chủ</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link header-item" href="/product" target="_blank">Tính năng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link header-item" href="/product#price" target="_blank">Bảng giá</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link header-item" href="/blog" target="_blank">Tài nguyên</a>
                </li>
              </ul>
            </div>
            <div class="form-inline">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link header-item" style="color: #2B4AA0" href="/register" target="_blank">Đăng ký</a>
                </li>
                <li class="nav-item">
                  <a
                      class="nav-link header-item"
                      style="color: #2C4A9F; font-weight: 500"
                      href="/login"
                      target="_blank"
                  >Đăng nhập</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <!-- Main Content -->
      <slot name="main"></slot>
      <!-- Footer -->
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
              <p><a href="#" class="text-sm text-light link-item">Tạo tài khoản miễn phí</a></p>
              <p><a href="#" class="text-sm text-light link-item">Công cụ tạo bài test online</a></p>
              <p><a href="/examTest" class="text-sm text-light link-item">Ngân hàng đề thi mẫu đa dạng</a></p>
              <p><a href="/evaluate" class="text-sm text-light link-item">Đánh giá năng lực nhân sự</a></p>
              <p><a href="/trainEmployee" class="text-sm text-light link-item">Đào tạo nhân sự hiệu quả</a></p>
              <p><a href="#" class="text-sm text-light link-item">Giảm tỉ lệ tuyển dụng sai người</a></p>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-12">
              <h2 class="text-white font-weight-bold font-size-16">VỀ TESTCENTER</h2>
              <p><a href="#" class="text-sm text-light link-item">Giới thiệu</a></p>
              <p><a href="/terms_use" class="text-sm text-light link-item">Điều khoản sử dụng</a></p>
              <p><a href="/privacy_policy" class="text-sm text-light link-item">Chính sách bảo mật</a></p>
              <div class="list-social-network">
                <a href="#"><img alt="facebook" class="social-network-icon" src="@/assets/facebook.png" /></a>
                <a href="#"><img alt="twitter" class="social-network-icon" src="@/assets/twitter.png" /></a>
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
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  name: ['OwlCarouselComponent','BootstrapElementsComponent','changeSegmentImage'],
  data() {
    return {
      headerBackground: "rgba(255,255,255,0)",
      currentRoute: "index",
      pageClass: "body-container",
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.initializeOwlCarousel();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollPos = window.scrollY;
      this.headerBackground = scrollPos > 40 ? "#ffffff" : "rgba(255,255,255,0)";
    },
    changeSegmentImage(image) {
      const imageDemo = document.getElementById('img-segment-demo');
      const imageValue = image.img;
      this.removeAllClasses('segment-item', 'active');
      image.classList.add('active');
      imageDemo.classList.remove('slide-animation');
      setTimeout(() => {
        imageDemo.classList.add('slide-animation');
      });
      imageDemo.style.backgroundImage = `url(${imageValue})`;
    },
    removeAllClasses(className, classRemoved) {
      const elements = document.getElementsByClassName(className);
      for (let element of elements) {
        element.classList.remove(classRemoved);
      }
    },
    initializeOwlCarousel() {
      // Initialize the main owl carousel for the latest news
      let owl = $('.owl-carousel-latest-news');
      owl.owlCarousel({
        loop: true,  // Loop the items
        mouseDrag: true,  // Enable mouse dragging
        touchDrag: true,  // Enable touch dragging
        dots: true,  // Show dots for navigation
        margin: 15,  // Add margin between items
        autoplayTimeout: 5000,  // Autoplay timeout (5 seconds)
        autoplayHoverPause: true,  // Pause autoplay when hovering
        responsive: {
          0: { items: 1 },  // Show 1 item on mobile
          600: { items: 2 },  // Show 2 items on medium screens
          1000: { items: 3 }  // Show 3 items on large screens
        }
      });

      // Custom controls for next and previous slider buttons
      $('#next-slider').click(function () {
        owl.trigger('next.owl.carousel', [300]);  // Go to next item with 300ms speed
      });
      $('#prev-slider').click(function () {
        owl.trigger('prev.owl.carousel', [300]);  // Go to previous item with 300ms speed
      });

      // Adjust class names for specific elements (likely for responsiveness or layout)
      $('#desc-wrong-hr .slider-item-title, #online-test-system .slider-item-title').removeClass('col-7');
      $('#desc-wrong-hr .slider-item-title').addClass('col-5');
      $('#online-test-system .slider-item-title').addClass('col-6');
      $('#desc-wrong-hr .image-block, #online-test-system .image-block').removeClass('col-5');
      $('#desc-wrong-hr .image-block').addClass('col-7');
      $('#online-test-system .image-block').addClass('col-6');
    },
    bootstrapElements() {
      const imageDemo = document.getElementById('img-segment-demo');
      const segmentImages = document.getElementsByClassName('segment-item');
      if (segmentImages.length > 0) {
        imageDemo.style.backgroundImage = `url(${segmentImages[0].getAttribute('img')})`;
      }

      let stagePadding = 350;
      const screenWidth = document.body.offsetWidth;
      if (screenWidth > 1000 && screenWidth <= 1500) {
        stagePadding = 180;
      }
      if (screenWidth > 800 && screenWidth <= 1000) {
        stagePadding = 60;
      }
      if (screenWidth <= 800) {
        if (screenWidth > 400 && screenWidth <= 800) {
          stagePadding = 10;
        }
        if (screenWidth <= 400) {
          stagePadding = 0;
          let sliderItem = document.getElementsByClassName('slider-item');
          for (let slider of sliderItem) {
            slider.style.borderRadius = '0px';
            document.getElementById('slider-image').style.borderRadius = '0px';
          }
        }
        document.getElementById('trigger-prev-slider').style.left = '10px';
        document.getElementById('trigger-prev-slider').style.opacity = '.3';
        document.getElementById('trigger-next-slider').style.right = '10px';
        document.getElementById('trigger-next-slider').style.opacity = '.3';
      }
      $('.owl-carousel-banner').owlCarousel({
        stagePadding,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
  },
};
</script>
<style scoped>
#navbarNav {
  justify-content: space-between;
}
.header {
  line-height: 50px;
  background: rgba(255, 255, 255, 0);
  position: sticky;
}

.active {
  color: #2B4AA0 !important;
}

.header-item {
  color: #333333;
}

.navbar-toggler {
  border-radius: 50px;
  border: none;
  background: rgba(197, 232, 250, 0.12);
}

.navbar-toggler-icon {
  background-image: url(https://www.testcenter.vn/images/introductions/bars.png) !important;
  background-size: inherit;
}
</style>
