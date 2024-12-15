<template>
  <PageComponent>
    <template v-slot:main>
      <div class="mt-5">
        <div>
          <section class="container">
            <div class="d-flex justify-content-center">
              <div class="row text-center d-flex flex-column">
                <div class="w-100">
                  <h1 id="main-title">
                    Nền tảng đánh giá năng lực nhân sự <span style="color: #2B4AA0">hàng đầu Việt Nam</span>
                  </h1>
                </div>
                <div class="main-description mt-1">
                  Hỗ trợ thiết lập và hoàn thiện quy trình phỏng vấn tuyển dụng của doanh nghiệp, đánh giá
                  nhân sự theo tiêu chuẩn của các tập đoàn lớn như Google, Microsoft…
                </div>
                <div class="form-inline justify-content-center button-group mt-3">
                  <div>
                    <a href="{{route('register')}}" target="_blank">
                      <button type="button" class="btn btn-primary font-weight-normal btn-register">
                        Đăng ký miễn phí
                      </button>
                    </a>
                  </div>
                  <div>
                    <a href="{{route('blog')}}" target="_blank">
                      <button type="button" class="btn btn-outline-primary btn-more-infor">
                        Tìm hiểu thêm
                      </button>
                    </a>
                  </div>
                </div>
                <div class="mt-4">
                  <img class="w-100" src="@/assets/image1.png"
                       alt="Testcenter">
                </div>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section class="container px-4 py-3">
            <div class="text-center">
              <h4 style="color: #333333" class="title-section">Tại sao doanh nghiệp <span style="color: #2B4AA0">nên sử dụng</span>
                TestCenter.vn?</h4>
            </div>
            <div class="group-features mt-4">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                        <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                      <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                      <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                      <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                      <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                      <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                      <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <div class="box-container">
                    <div class="d-flex flex-column align-items-center">
                      <GroupFeatures></GroupFeatures>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-1 justify-content-center">
                <a href="{{route('register')}}" target="_blank">
                  <button type="button" class="btn btn-primary font-weight-normal btn-register">
                    Đăng ký miễn phí
                  </button>
                </a>
              </div>
            </div>
          </section>
        </div>
        <div class="features mt-4 py-4">
          <section class="container">
            <div class="text-center">
              <h4 class="title-section">
                Khám phá <span style="color: #2B4AA0">tính năng nổi bật</span> của TestCenter.vn
              </h4>
            </div>
            <div class="group-features mt-4">
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <GroupFeatures></GroupFeatures>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <GroupFeatures></GroupFeatures>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <GroupFeatures></GroupFeatures>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <GroupFeatures></GroupFeatures>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <GroupFeatures></GroupFeatures>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 container-content">
                  <GroupFeatures></GroupFeatures>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-4 py-4">
          <section class="container">
            <div class="text-center">
              <h4 class="title-section">Công cụ <span style="color: #2B4AA0">đánh giá năng lực nhân sự IT</span>
                dành cho doanh nghiệp</h4>
              <div style="color: #2B4AA0">
                <a href="" style="color: #2B4AA0" target="_blank">
                  <div class="d-flex justify-content-center align-items-center">
                    <div><a href="{{route('blog')}}" style="color:#2B4AA0">Tìm hiểu thêm</a></div>
                    <div class="ml-1"><img
                        src="@/assets/arrow-right.png"
                        alt="testcenter"></div>
                  </div>
                </a>
              </div>
            </div>
            <div class="mt-4">
              <div class="row">
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <img class="w-100" src="@/assets/image13.png"
                       alt="TestcenterIT">
                </div>
                <div class="col-lg-5 col-md-12 col-sm-12">
                  <div class="d-flex flex-column" style="row-gap: 20px">
                    <div class="d-flex align-items-center">
                      <ToolEvaluates></ToolEvaluates>
                    </div>
                    <div class="d-flex align-items-center">
                      <ToolEvaluates></ToolEvaluates>
                    </div>
                    <div class="d-flex align-items-center">
                      <ToolEvaluates></ToolEvaluates>
                    </div>
                    <div class="d-flex align-items-center">
                      <ToolEvaluates></ToolEvaluates>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3 justify-content-center">
              <a href="{{route('register')}}" target="_blank">
                <button type="button" class="btn btn-primary font-weight-normal btn-register">
                  Đăng ký miễn phí
                </button>
              </a>
            </div>
          </section>
        </div>
        <div class="about-us mt-4 py-4">
          <section class="container">
            <div class="text-center">
              <h4 class="title-section">
                Về <span style="color: #2B4AA0">chúng tôi</span>
              </h4>
            </div>
            <div class="mt-3">
              <div class="row">
                <div class="col-lg-5 col-md-12 col-sm-12 text-about">
                  <p>
                    Chiêu mộ, đào tạo và phát triển đội ngũ nhân sự luôn là chủ đề cấp
                    thiết đối với mọi mô hình doanh nghiệp trong mục tiêu phát triển bền
                    vững. Với TestCenter.vn, chúng tôi mong muốn cung cấp cho doanh
                    nghiệp Việt Nam công cụ đánh giá nhân sự tối ưu và toàn diện, giúp
                    tiết kiệm thời gian và nâng cao chất lượng nhân sự.
                  </p>
                  <p>
                    Với hơn 500 khách hàng doanh nghiệp như Honda, Sailun, Petrolimex,
                    Ngân hàng TMCP Hàng Hải Việt Nam (MSB), Đại học FPT, Đại học
                    Luật Hà Nội,... đã trải nghiệm TestCenter.vn đều nhận định rằng:
                    TestCenter.vn là giải pháp test online không thể thiếu đối với mọi
                    mô hình doanh nghiệp. Không chỉ là công cụ tạo bài test online và
                    tổ chức các kỳ thi nhân sự với quy mô lên tới hàng nghìn nhân sự, đây
                    còn là một bước "nhảy vọt" trong đánh giá nhân sự toàn diện và
                    chính xác nhất.
                  </p>
                </div>
                <hr id="border-para">
                <div class="col-lg-7 col-md-12 col-sm-12">
                  <img class="w-100" src="@/assets/image18.png"
                       alt="AboutTestCenter">
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-4 py-4">
          <section class="container">
            <div class="text-center">
              <h4 class="title-section">
                <span style="color: #2B4AA0">500+ doanh nghiệp</span> đã sử dụng TestCenter.vn
              </h4>
            </div>
            <div class="mt-4">
              <div class="branch-container bg-white">
                <img class="w-100" src="@/assets/image19.png"
                     alt="testcenter">
              </div>
            </div>
          </section>
        </div>
        <div class="trial py-4 mt-5 pt-5">
          <section class="container py-3">
            <div class="text-center px-5" style="font-size: 24px; line-height: 30px; font-weight: 500">
              Trải nghiệm <span style="color: #2B4AA0">miễn phí & không giới hạn tính năng</span> của
              TestCenter.vn
              để nâng cao chất lượng tuyển dụng và quản trị nhân sự
            </div>
            <div class="row mt-3">
              <img class="w-100" src="@/assets/image20.png" alt=""/>
            </div>
            <div class="row justify-content-center mt-2">
              <a href="{{route('register')}}" target="_blank">
                <button type="button" class="btn btn-primary font-weight-normal btn-register">
                  Đăng ký miễn phí
                </button>
              </a>
            </div>
            <div class="row justify-content-center mt-3 font-weight-normal"
                 style="font-size: 15px; line-height: 20px; font-weight: 500">
              <div>
                Đã có tài khoản?
              </div>
              <div class="ml-2" style="color: #2B4AA0">
                <a href="{{route('login')}}" style="color: #2B4AA0" target="_blank">Đăng nhập</a>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-4 newest-posts d-none d-lg-block">
          <section class="container">
            <h4 class="text-center title-section">
              Bài viết <span style="color: #2B4AA0">mới nhất</span>
            </h4>
            <div class="slider-panel-latest-new position-relative mt-3">
              <div id="prev-slider" class="cursor-pointer position-absolute arrow-slide arrow-slide-left">
                <svg style="color: #2C4A9F" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                     fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
                </svg>
              </div>
              <div id="next-slider" class="cursor-pointer position-absolute arrow-slide arrow-slide-right">
                <svg style="color: #2C4A9F" xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                     fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                        d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
                </svg>
              </div>
              <div class="owl-carousel owl-theme owl-loaded owl-carousel-latest-news hidden-md">
                <div class="owl-stage-outer">
                  <div class="owl-stage">
                    <OwlItem></OwlItem>
                    <OwlItem></OwlItem>
                    <OwlItem></OwlItem>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-4 newest-posts mobile d-lg-none">
          <section class="container">
            <h4 class="text-center">
              Bài viết <span style="color: #2B4AA0">mới nhất</span>
            </h4>
            <div class="slider-panel-latest-new position-relative mt-3">
              <OwlItemHidden>
              </OwlItemHidden>
              <OwlItemHidden>
              </OwlItemHidden>
              <OwlItemHidden>
              </OwlItemHidden>
            </div>
          </section>
        </div>
      </div>
    </template>
  </PageComponent>
</template>
<script>

import PageComponent from "@/components/layout/HomePage.vue";
import OwlItemHidden from "@/components/componentsPageHome/OwlItemHidden.vue";
import OwlItem from "@/components/componentsPageHome/OwlItem.vue";
import GroupFeatures from "@/components/componentsPageHome/GroupFeature.vue";
import ToolEvaluates from "@/components/componentsPageHome/ToolEvaluates.vue";
export default {
  components: {
    PageComponent, OwlItemHidden, OwlItem,GroupFeatures,ToolEvaluates
  },
}
</script>
<style>
.owl-stage{
  display: flex;
}
.product-section .product-section-intro .row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.product-section .product-section-intro .row .product-section-intro-left .highlight {
  color: #2C4A9F !important;
}
.product-section .product-section-intro .row .product-section-intro-right {
  position: absolute;
  right: 125px;
}
.product-section .product-section-intro-mobi {
  display: none;
}
.product-section .product-section-intro-mobi .product-section-intro-left .highlight {
  color: #2C4A9F !important;
}

.product-container-fluid {
  padding-left: 24px;
  padding-right: 24px;
}

.product-section-operate .container .text-center-mobile {
  text-align: center;
}

.product-section-price {
  padding: 1em 1em 1.5em !important;
}
.product-section-price .row .product-section-price-box {
  margin-top: 15px !important;
  margin-left: 15px !important;
  gap: 10px !important;
}
.product-section-price .row .product-section-price-box-primary {
  background: #2b4aa0 !important;
  color: #fff !important;
  opacity: 1 !important;
  width: 27% !important;
  margin-left: 0 !important;
}
.product-section-price .row .product-section-price-box-primary .info-color {
  color: #57d7ff !important;
}

@media only screen and (max-width: 992px) {
  .product-section-intro-right {
    right: 50px !important;
  }
}
@media only screen and (max-width: 575.98px) {
  .pc-hidden {
    display: block !important;
  }
  .body-container-product {
    background-image: none !important;
  }
  .product-section .product-section-intro-pc {
    display: none;
  }
  .product-section .product-section-intro-mobi {
    display: block !important;
  }
  .product-section .product-section-intro-mobi .product-section-intro-left h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
  }
}
.body-container-product {
  background-image: url("@/assets/group_8707.png");
  background-size: auto;
  background-repeat: no-repeat;
  background-position-x: 50px;
  background-position-y: 16px;
}
.body-container {
  background-image: url("@/assets/style.png");
  background-size: contain;
  background-repeat: no-repeat;
}
.box-container {
  box-shadow: 2px 2px 30px rgba(0, 0, 0, 0.04);
  padding: 24px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
}

.button-group {
  column-gap: 10px;
}

.btn-more-infor {
  /*border: #2B4AA0 !important;*/
  color: #2B4AA0 !important;
  border-color: #2B4AA0 !important;
  padding: 10px 24px 10px 24px !important;
}

.btn-more-infor:hover {
  color: #ffffff !important;
  background-color: #2B4AA0 !important;
}

.btn-register {
  border-color: #2B4AA0 !important;
  padding: 10px 24px 10px 24px !important;
}

.btn-register:hover {
  color: #2B4AA0 !important;
  background-color: #ffffff !important;
}

.features {
  background-color: rgba(237, 248, 255, 0.3607843137);
}

.features-box {
  background-color: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 24px;
}

.group-features {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.about-us {
  background: linear-gradient(180deg, rgba(197, 232, 250, 0.1) 0%, rgba(237, 248, 255, 0.36) 100%);
}

.branch-container {
  box-shadow: -1px 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  padding: 30px 88px 30px 88px;
}

.trial {
  background-image: url("@/assets/group_8707.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.title {
  color: #2B4AA0;
  font-size: 19px;
  line-height: 24px;
  font-weight: 500;
  text-align: center;
}

.description {
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  margin-top: 5px;
}

.image-item {
  margin-top: 5px;
}

.container-content {
  padding-left: 12px !important;
  padding-right: 12px !important;
  display: flex;
}

li {
  list-style-position: outside !important;
  list-style-type: disc !important;
}

@media (max-width: 575.98px) {
  .box-container {
    box-shadow: none;
    padding: 0px;
  }
  .features-box {
    background-color: white;
  }
  .branch-container {
    padding: 10px 50px 10px 50px;
  }
  #main-title {
    font-size: 24px;
    padding: 0px 30px 0px 30px;
  }
  .main-description {
    font-size: 14px;
  }
  .title-section {
    font-size: 19px;
  }
  .title {
    font-size: 14px;
    text-align: center;
  }
  .second-des {
    margin-top: 25px;
  }
}
#main-title {
  font-size: 2rem;
}
.main-description {
  font-size: 15px;
}


.short-post {
  color: #333333;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

.title-post a {
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #2B4AA0;
}

.newest-posts {
  padding-bottom: 2%;
}

li {
  background: 0 0;
  line-height: 1.6;
  margin: 0;
  overflow: hidden;
}

section {
  scroll-margin-top: 97px;
}

.main-title-dk {
  font-size: 2.5rem;
}

.main-title-mb {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  font-size: 1.5rem;
  color: #0a335d !important;
}

li {
  line-height: 46px;
}

.li-color {
  line-height: 2;
  font-size: 14px;
  color: #4f4f4f;
  cursor: pointer;
}

.custom-indent {
  padding-left: 20px; /* Adjust the value as needed */
}

.card-title a {
  color: black;
  text-decoration: none;
}
.card-title a:hover, .card-title a:focus {
  text-decoration: none;
  color: black;
}

.table-content a {
  color: inherit;
  text-decoration: none;
}
.table-content a:hover, .table-content a:focus {
  text-decoration: none;
  color: #2C4A9F;
}
.table-content h2 {
  font-size: 1.5rem;
  color: #0a335d !important;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.table-content li {
  background: 0 0;
  line-height: 1.6 !important;
  margin: 0;
  overflow: hidden;
}

.term-of-use-content a {
  color: inherit;
}
.term-of-use-content .high-light {
  color: #0a8ed2;
}
.term-of-use-content h2 {
  font-size: 1.5rem;
  color: #0a335d !important;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
.term-of-use-content h3 {
  color: #0e1333 !important;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
</style>