<script setup>
import {RouterLink, RouterView, useRouter} from "vue-router";
const router = useRouter();
const scrollToPrice = () => {
  router.push('/product').then(() => {
    const element = document.getElementById('price');
    if (element) {
      element.scrollIntoView({behavior: 'auto'});
    }
  });
};
</script>
<template>
  <div class="ladi-wraper">
    <router-view></router-view>
    <div id="SECTION20-1" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-container">
        <div id="GROUP312" class='ladi-element'>
          <div class='ladi-group'>
            <div id="IMAGE313" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE314" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE315" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE316" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE317" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="GROUP328" class='ladi-element'>
          <div class='ladi-group'>
            <div id="IMAGE329" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE330" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE331" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE332" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE333" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <router-link :to="{name:'index'}" target="_blank" id="HEADLINE115-1" class='ladi-element'><h3
          class='ladi-headline'>Hơn 100 doanh nghiệp đã lựa chọn TestCenter<br><span
          style="color: rgb(0, 0, 0);">để nâng cao chất lượng tuyển dụng và đào tạo nhân sự</span><br>
        </h3></router-link>
      </div>
    </div>
    <div id="SECTION127" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-overlay"></div>
      <div class="ladi-container">
        <div id="IMAGE162" class='ladi-element'>
          <div class='ladi-image'>
            <div class="ladi-image-background"></div>
          </div>
        </div>
        <div id="HEADLINE129" class='ladi-element'><h4 class='ladi-headline'>Nền tảng đánh giá năng lực nhân sự hàng
          đầu Việt Nam</h4></div>
        <div id="GROUP130" class='ladi-element'>
          <div class='ladi-group'>
            <div id="SHAPE131" class='ladi-element'>
              <div class='ladi-shape'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                     preserveAspectRatio="none" viewBox="0 0 24 24" class="" fill="rgba(255, 255, 255, 1)">
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                </svg>
              </div>
            </div>
            <div id="HEADLINE132" class='ladi-element'><p class='ladi-headline'>Địa chỉ: Tầng 3, Tòa nhà
              Goldseason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội<br></p></div>
          </div>
        </div>
        <div id="GROUP133" class='ladi-element'>
          <div class='ladi-group'>
            <div id="SHAPE134" class='ladi-element'>
              <div class='ladi-shape'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                     preserveAspectRatio="none" viewBox="0 0 1408 1896.0833" class=""
                     fill="rgba(255, 255, 255, 1)">
                  <path
                    d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T959 1520t-47.5-14.5T856 1485t-49-18q-98-35-175-83-128-79-264.5-215.5T152 904q-48-77-83-175-3-9-18-49t-20.5-55.5T16 577 3.5 519.5 0 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path>
                </svg>
              </div>
            </div>
            <a href="tel:0967778018" id="HEADLINE135" class='ladi-element'><p class='ladi-headline'>Hotline tư
              vấn 24/7: 0967 778 018<br></p></a></div>
        </div>
      </div>
    </div>
    <div id="SECTION289" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-overlay"></div>
      <div class="ladi-container">
        <div id="HEADLINE291" class='ladi-element'><h1 class='ladi-headline'>©2021 Bản quyền thuộc về Testcenter.vn&nbsp;</h1>
        </div>
      </div>
    </div>
    <div id="SECTION_POPUP" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-container">
        <div id="DROPBOX352" data-dropbox="true" class='ladi-element'>
          <div class='ladi-popup'>
            <div class="ladi-popup-background"></div>
          </div>
        </div>
        <div id="POPUP418" class='ladi-element'>
          <div class='ladi-popup'>
            <div class="ladi-popup-background"></div>
            <div class="ladi-overlay"></div>
            <div id="HEADLINE419" class='ladi-element'><h3 class='ladi-headline'>Testcenter</h3></div>
            <div id="LINE420" class='ladi-element'>
              <div class='ladi-line'>
                <div class="ladi-line-container"></div>
              </div>
            </div>
            <router-link :to="{name:'product'}" target="_top" id="HEADLINE421" class='ladi-element'><h3
              class='ladi-headline'>Tính năng</h3></router-link>
            <router-link :to="{ path: '/product'}"
                         @click="scrollToPrice" target="_top" id="HEADLINE422"
                         class='ladi-element'><h3 class='ladi-headline'>Bảng giá</h3></router-link>
            <router-link to="/blog" target="_blank" id="HEADLINE423" class='ladi-element'>
              <h3 class='ladi-headline'>Tài nguyên</h3></router-link>
            <router-link :to="{name:'index'}"
                         target="_blank" id="HEADLINE424"
                         class='ladi-element'><h3 class='ladi-headline'>
              Trang chủ</h3></router-link>
            <router-link :to="{path:'/register'}" target="_blank"
                         id="HEADLINE425" class='ladi-element'><h3 class='ladi-headline'>Đăng ký</h3></router-link>
            <router-link :to="{path:'/login'}" target="_blank" id="BUTTON426" class='ladi-element'>
              <div class='ladi-button'>
                <div class="ladi-button-background"></div>
                <div id="BUTTON_TEXT426" class='ladi-element'><p class='ladi-headline'>Đăng nhập</p></div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="backdrop-popup" class="backdrop-popup"></div>
  <div id="backdrop-dropbox" class="backdrop-dropbox"></div>
  <div id="lightbox-screen" class="lightbox-screen"></div>
</template>

<style>
@media (min-width: 768px) {
  .ladi-section .ladi-container {
    width: 960px;
  }
}

@media (max-width: 767px) {
  .ladi-section .ladi-container {
    width: 420px;
  }
}

body {
  font-family: Roboto, sans-serif
}

@media (min-width: 768px) {
  #SECTION_POPUP {
    height: 0px;
  }


  #SECTION12 {
    height: 744.4px;
  }

  #HEADLINE13 {
    width: 484px;
    top: 139.552px;
    left: 238px;
  }

  #HEADLINE13 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION20-1 {
    height: 370.872px;
  }

  #SECTION29 {
    height: 950.4px;
  }

  #SECTION29 > .ladi-overlay {
    background-color: rgb(245, 245, 245);
    opacity: 0.7;
  }

  #SECTION29 > .ladi-section-background {
    background-color: rgb(229, 237, 247);
  }

  #HEADLINE34 {
    width: 551px;
    top: 66.058px;
    left: 204.5px;
  }

  #HEADLINE34 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 30px;
    text-align: center;
    line-height: 1.6;
  }

  #BOX52 {
    width: 475.396px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX52 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #PARAGRAPH53 {
    width: 421px;
    top: 19px;
    left: 52.1419px;
  }

  #PARAGRAPH53 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH54 {
    width: 443px;
    top: 59px;
    left: 30.1419px;
  }

  #PARAGRAPH54 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 18px;
    text-align: left;
    line-height: 1.6;
  }

  #BOX57 {
    width: 472.032px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX57 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
  }

  #PARAGRAPH58 {
    width: 418px;
    top: 19.9535px;
    left: 57.5974px;
  }

  #PARAGRAPH58 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH59 {
    width: 436px;
    top: 51.9535px;
    left: 26.9607px;
  }

  #PARAGRAPH59 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 18px;
    text-align: left;
    line-height: 1.6;
  }

  #GROUP79 {
    width: 475.597px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE115-1 {
    width: 834px;
    top: 48.7833px;
    left: 63px;
  }

  #HEADLINE115-1 > .ladi-headline {
    color: rgb(44, 75, 159);
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION127 {
    height: 246.839px;
  }

  #SECTION127 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION127 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("@/assets/landing/uploads/images/380beead-cde1-45cc-b464-72893e246558.jpg");
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  #HEADLINE129 {
    width: 666px;
    top: 107.5px;
    left: 0px;
  }

  #HEADLINE129 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP130 {
    width: 558px;
    height: 41px;
    top: 144px;
    left: 0px;
  }

  #SHAPE131 {
    width: 22.5469px;
    height: 22.5469px;
    top: 0px;
    left: 0px;
  }

  #SHAPE131 svg:last-child {
    fill: rgba(255, 255, 255, 1);
  }

  #HEADLINE132 {
    width: 525px;
    top: 2px;
    left: 33px;
  }

  #HEADLINE132 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP133 {
    width: 325px;
    height: 22.5469px;
    top: 181.453px;
    left: 0.5px;
  }

  #SHAPE134 {
    width: 22.5469px;
    height: 22.5469px;
    top: 0px;
    left: 0px;
  }

  #SHAPE134 svg:last-child {
    fill: rgba(255, 255, 255, 1);
  }

  #HEADLINE135 {
    width: 292px;
    top: 2px;
    left: 33px;
  }

  #HEADLINE135 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #IMAGE162 {
    width: 230.99px;
    height: 55.274px;
    top: 31px;
    left: 0.5px;
  }

  #IMAGE162 > .ladi-image > .ladi-image-background {
    width: 230.99px;
    height: 55.274px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s550x400/5eccf0a3fe0845247513b20a/testcenter-001_w-20210920071701.png");
  }

  #PARAGRAPH201 {
    width: 846px;
    top: 191.041px;
    left: 57px;
  }

  #PARAGRAPH201 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 17px;
    text-align: left;
    line-height: 1.6;
  }

  #BUTTON_TEXT226 {
    width: 370px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT226 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT226 > .ladi-headline:hover {
    color: rgb(255, 255, 255);
  }

  #BUTTON226 {
    width: 256.667px;
    height: 55px;
    top: 606.847px;
    left: 398px;
  }

  #BUTTON226 > .ladi-button > .ladi-button-background {
    background-color: rgb(2, 48, 129);
  }

  #BUTTON226 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON226 > .ladi-button:hover {
    border-color: rgb(255, 255, 255);
  }

  #BUTTON226 > .ladi-button:hover .ladi-button-background {
    background: none !important;
    background-color: rgb(2, 49, 129) !important;
  }

  #HEADLINE87 {
    width: 546px;
    top: 59.49px;
    left: 246.595px;
  }

  #HEADLINE87 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 30px;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION86 {
    height: 564.4px;
  }

  #IMAGE249 {
    width: 178.172px;
    height: 48.0785px;
    top: 20.944px;
    left: 0px;
  }

  #IMAGE249 > .ladi-image > .ladi-image-background {
    width: 178.172px;
    height: 48.0785px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s500x350/5eccf0a3fe0845247513b20a/testcenter-001_w-1-20220504085952.png");
  }

  #LIST_PARAGRAPH251 {
    width: 562px;
    top: 324.7px;
    left: 398px;
  }

  #LIST_PARAGRAPH251 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 18px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH251 ul li {
    padding-bottom: 10px;
    padding-left: 25px;
  }

  #LIST_PARAGRAPH251 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%201536%201896.0833%22%20class%3D%22%22%20fill%3D%22rgba(2%2C%2049%2C%20129%2C%201)%22%3E%20%3Cpath%20d%3D%22M768%20128q209%200%20385.5%20103T1433%20510.5%201536%20896t-103%20385.5-279.5%20279.5T768%201664t-385.5-103T103%201281.5%200%20896t103-385.5T382.5%20231%20768%20128zm128%201247v-190q0-14-9-23.5t-22-9.5H673q-13%200-23%2010t-10%2023v190q0%2013%2010%2023t23%2010h192q13%200%2022-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8H658q-14%200-24%208-10%206-10%2018l17%20621q0%2010%2010%2017.5t24%207.5h185q14%200%2023.5-7.5T894%201031z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 16px;
    height: 16px;
    top: 4px;
  }

  #IMAGE282 {
    width: 419.54px;
    height: 253.827px;
    top: 403.345px;
    left: 270.23px;
  }

  #IMAGE282 > .ladi-image > .ladi-image-background {
    width: 419.54px;
    height: 258.101px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s750x600/5eccf0a3fe0845247513b20a/device-macbook-pro-1-20220504090819.png");
  }

  #HEADLINE291 {
    width: 391px;
    top: 11px;
    left: 284.5px;
  }

  #HEADLINE291 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 13px;
    text-align: center;
    line-height: 1.2;
  }

  #SECTION289 {
    height: 45.839px;
  }

  #SECTION289 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION289 > .ladi-section-background {
    background-color: rgb(5, 31, 77);
  }

  #IMAGE313 {
    width: 159.805px;
    height: 61.827px;
    top: 33.4806px;
    left: 603.449px;
  }

  #IMAGE313 > .ladi-image > .ladi-image-background {
    width: 161.054px;
    height: 160.43px;
    top: -49.3366px;
    left: 0px;
    background-image: url("@/assets/landing/s500x500/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE314 {
    width: 175.941px;
    height: 107.52px;
    top: 0px;
    left: 0px;
  }

  #IMAGE314 > .ladi-image > .ladi-image-background {
    width: 184.343px;
    height: 109.224px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s500x450/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE315 {
    width: 194.869px;
    height: 99.7003px;
    top: 12.7069px;
    left: 184.377px;
  }

  #IMAGE315 > .ladi-image > .ladi-image-background {
    width: 224.341px;
    height: 224.342px;
    top: -61.6328px;
    left: -13.5955px;
    background-image: url("@/assets/landing/s550x550/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE316 {
    width: 184.613px;
    height: 61.0849px;
    top: 33.4806px;
    left: 405.108px;
  }

  #IMAGE316 > .ladi-image > .ladi-image-background {
    width: 184.613px;
    height: 184.613px;
    top: -62.7561px;
    left: 0px;
    background-image: url("@/assets/landing/s500x500/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE317 {
    width: 164.245px;
    height: 105.938px;
    top: 5.71271px;
    left: 782.908px;
  }

  #IMAGE317 > .ladi-image > .ladi-image-background {
    width: 165.222px;
    height: 164.246px;
    top: -12.7093px;
    left: 0px;
    background-image: url("@/assets/landing/s500x500/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #GROUP312 {
    width: 947.151px;
    height: 112.407px;
    top: 205.596px;
    left: 0.5px;
  }

  #GROUP328 {
    width: 271.564px;
    height: 90.9832px;
    top: 18.0228px;
    left: -271.564px;
    display: none !important;
  }

  #IMAGE333 {
    width: 76.8848px;
    height: 25.4398px;
    top: 64.4052px;
    left: 147.527px;
  }

  #IMAGE333 > .ladi-image > .ladi-image-background {
    width: 77.1483px;
    height: 39.7498px;
    top: -3.14743px;
    left: -0.263546px;
    background-image: url("https://w.ladicdn.com/s400x350/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE332 {
    width: 69.2956px;
    height: 30.7223px;
    top: 8.65947px;
    left: 102.534px;
  }

  #IMAGE332 > .ladi-image > .ladi-image-background {
    width: 69.2956px;
    height: 133.181px;
    top: -51.551px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x450/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE331 {
    width: 68.5685px;
    height: 42.1812px;
    top: 0px;
    left: 0px;
  }

  #IMAGE331 > .ladi-image > .ladi-image-background {
    width: 77.9234px;
    height: 42.1812px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x350/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE330 {
    width: 71.6394px;
    height: 27.7164px;
    top: 63.2668px;
    left: 49.3768px;
  }

  #IMAGE330 > .ladi-image > .ladi-image-background {
    width: 71.6394px;
    height: 86.4458px;
    top: -31.6293px;
    left: 0px;
    background-image: url("@/assets/landing/s600x600/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE329 {
    width: 64.84px;
    height: 41.8214px;
    top: 3.10991px;
    left: 206.724px;
  }

  #IMAGE329 > .ladi-image > .ladi-image-background {
    width: 64.84px;
    height: 102.976px;
    top: -30.0912px;
    left: 0px;
    background-image: url("@/assets/landing/s500x500/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #HEADLINE341 {
    width: 502px;
    top: 60.572px;
    left: 0px;
  }

  #HEADLINE341 > .ladi-headline {
    color: rgb(5, 31, 77);
    font-size: 30px;
    text-align: left;
    line-height: 1.6;
  }

  #SECTION336 {
    height: 607.872px;
  }

  #SECTION336 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("@/assets/landing/s1440x607/5eccf0a3fe0845247513b20a/frame-40-1-20220506015027.png");
    background-position: left center;
    background-repeat: repeat-x;
  }

  #IMAGE349 {
    width: 41.4797px;
    height: 42.2986px;
    top: 13.9535px;
    left: 8.02877px;
  }

  #IMAGE349 > .ladi-image > .ladi-image-background {
    width: 42.0029px;
    height: 42.2986px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-14-1-20220504062933.png");
  }

  #IMAGE351-1 {
    width: 605.701px;
    height: 356.295px;
    top: 250.552px;
    left: -207.701px;
  }

  #IMAGE351-1 > .ladi-image > .ladi-image-background {
    width: 605.701px;
    height: 356.295px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s950x700/5eccf0a3fe0845247513b20a/drawkit-vector-illustration-project-manager-3-1-20220504080127.png");
  }

  #DROPBOX352 {
    width: 300px;
    height: 300px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
  }

  #DROPBOX352 > .ladi-popup > .ladi-popup-background {
    background-color: rgb(255, 255, 255);
  }

  #BOX353 {
    width: 244.22px;
    height: 278.332px;
    top: 0px;
    left: 0px;
  }

  #BOX353 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #BOX355 {
    width: 234.162px;
    height: 189.5px;
    top: 0px;
    left: 0px;
  }

  #BOX355 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH358 {
    width: 221px;
    top: 93.541px;
    left: 11.61px;
  }

  #PARAGRAPH358 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE360 {
    width: 60.9061px;
    height: 59.9323px;
    top: 20.9535px;
    left: 91.657px;
  }

  #IMAGE360 > .ladi-image > .ladi-image-background {
    width: 60.9061px;
    height: 59.9323px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/group-20220504064426.png");
  }

  #PARAGRAPH362 {
    width: 229px;
    top: 54.1667px;
    left: 2.581px;
  }

  #PARAGRAPH362 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 16px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE364 {
    width: 36.8939px;
    height: 36.8938px;
    top: 13.4469px;
    left: 98.6341px;
  }

  #IMAGE364 > .ladi-image > .ladi-image-background {
    width: 36.8939px;
    height: 36.8938px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/monitor-1-20220504064427.png");
  }

  #PARAGRAPH366 {
    width: 243px;
    top: 54.833px;
    left: 0.019px;
    display: none !important;
  }

  #PARAGRAPH366 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 16px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE368 {
    width: 36.4839px;
    height: 36.6991px;
    top: 13.462px;
    left: 98.396px;
    display: none !important;
  }

  #IMAGE368 > .ladi-image > .ladi-image-background {
    width: 36.6991px;
    height: 36.6991px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/fund-1-20220504064426.png");
  }

  #IMAGE372 {
    width: 35.204px;
    height: 38.0118px;
    top: 17.9562px;
    left: 96.42px;
  }

  #IMAGE372 > .ladi-image > .ladi-image-background {
    width: 38.0118px;
    height: 38.0118px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/project-management-1-20220504064427.png");
  }

  #BUTTON_TEXT385 {
    width: 371px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT385 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT385 > .ladi-headline:hover {
    color: rgb(255, 255, 255);
  }

  #BUTTON385 {
    width: 206.108px;
    height: 45px;
    top: 518.919px;
    left: 0px;
  }

  #BUTTON385 > .ladi-button > .ladi-button-background {
    background-color: rgb(2, 48, 129);
  }

  #BUTTON385 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON385 > .ladi-button:hover {
    border-color: rgb(255, 255, 255);
  }

  #BUTTON385 > .ladi-button:hover .ladi-button-background {
    background: none !important;
    background-color: rgb(2, 49, 129) !important;
  }

  #GROUP390 {
    width: 244.22px;
    height: 278.332px;
    top: 211.618px;
    left: -38.1122px;
  }

  #BOX354 {
    width: 243.601px;
    height: 188.5px;
    top: 0px;
    left: 0px;
    display: none !important;
  }

  #BOX354 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #IMAGE398 {
    width: 523.928px;
    height: 376.538px;
    top: 100.167px;
    left: 512.887px;
  }

  #IMAGE398 > .ladi-image > .ladi-image-background {
    width: 523.928px;
    height: 402.825px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s850x750/5eccf0a3fe0845247513b20a/group-16-20220504085508.png");
  }

  #PARAGRAPH404 {
    width: 74px;
    top: 33.9832px;
    left: 288.197px;
  }

  #PARAGRAPH404 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #PARAGRAPH405 {
    width: 74px;
    top: 33.9832px;
    left: 504px;
  }

  #PARAGRAPH405 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #PARAGRAPH406 {
    width: 74px;
    top: 33.9832px;
    left: 399px;
  }

  #PARAGRAPH406 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH407 {
    width: 74px;
    top: 33.9832px;
    left: 613px;
  }

  #PARAGRAPH407 > .ladi-paragraph {
    font-family: "Roboto" L, sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #PARAGRAPH408 {
    width: 57px;
    top: 33.9832px;
    left: 785.843px;
  }

  #PARAGRAPH408 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #BUTTON409 {
    width: 98.157px;
    height: 30.7697px;
    top: 29.5983px;
    left: 861.843px;
  }

  #BUTTON409 > .ladi-button > .ladi-button-background {
    background-color: rgb(255, 255, 255);
  }

  #BUTTON409 > .ladi-button {
    border-radius: 6px;
  }

  #BUTTON_TEXT409 {
    width: 98px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT409 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE413 {
    width: 39.5014px;
    height: 40px;
    top: 19px;
    left: 4.34121px;
  }

  #IMAGE413 > .ladi-image > .ladi-image-background {
    width: 40px;
    height: 40px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-14-2-20220504062933.png");
  }

  #IMAGE347 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE347 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-20220504062927.png");
  }

  #BOX41 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX41 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX41 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH38 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH38 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #PARAGRAPH37 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH37 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #GROUP414 {
    width: 475.396px;
    height: 230px;
    top: 267.058px;
    left: 1031px;
    display: none !important;
  }

  #GROUP414.ladi-animation > .ladi-group {
    animation-name: pulse;
    -webkit-animation-name: pulse;
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
  }

  #GROUP402 {
    width: 475.597px;
    height: 230px;
    top: 586.058px;
    left: -513.71px;
    display: none !important;
  }

  #GROUP402.ladi-animation > .ladi-group {
    animation-name: pulse;
    -webkit-animation-name: pulse;
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
  }

  #SHAPE417 {
    width: 43.4744px;
    height: 39.6466px;
    top: 0px;
    left: 0px;
    display: none !important;
  }

  #SHAPE417 svg:last-child {
    fill: rgba(255, 255, 255, 1);
  }

  #POPUP418 {
    width: 420px;
    height: 400px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
  }

  #POPUP418 > .ladi-popup > .ladi-overlay {
    border-radius: 8px;
  }

  #POPUP418 > .ladi-popup > .ladi-popup-background {
    background-image: url("https://w.ladicdn.com/s420x400/5eccf0a3fe0845247513b20a/polygon-1-1-20220504085821.png");
    background-position: center top;
    background-repeat: repeat;
    border-radius: 8px;
  }

  #POPUP418 > .ladi-popup {
    border-radius: 8px;
  }

  #HEADLINE419 {
    width: 150px;
    top: 64.5px;
    left: 42.5px;
  }

  #HEADLINE419 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 28px;
    font-weight: bold;
    line-height: 1.6;
  }

  #LINE420 {
    width: 50px;
    top: 108.5px;
    left: 42.5px;
  }

  #LINE420 > .ladi-line > .ladi-line-container {
    border-top: 3px solid rgb(5, 31, 77);
    border-right: 3px solid rgb(5, 31, 77);
    border-bottom: 3px solid rgb(5, 31, 77);
    border-left: 0px !important;
  }

  #LINE420 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #HEADLINE421 {
    width: 150px;
    top: 148.5px;
    left: 42.5px;
  }

  #HEADLINE421 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 17px;
    line-height: 1.6;
  }

  #HEADLINE422 {
    width: 150px;
    top: 186.167px;
    left: 42.5px;
  }

  #HEADLINE422 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 17px;
    line-height: 1.6;
  }

  #HEADLINE423 {
    width: 150px;
    top: 223.833px;
    left: 42.5px;
  }

  #HEADLINE423 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 17px;
    line-height: 1.6;
  }

  #HEADLINE424 {
    width: 150px;
    top: 261.5px;
    left: 42.5px;
  }

  #HEADLINE424 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 17px;
    line-height: 1.6;
  }

  #HEADLINE425 {
    width: 150px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE425 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 17px;
    font-weight: bold;
    line-height: 1.6;
  }

  #BUTTON426 {
    width: 100px;
    height: 25px;
    top: 287.556px;
    left: 42.5px;
  }

  #BUTTON426 > .ladi-button > .ladi-button-background {
    background-color: rgb(255, 255, 255);
  }

  #BUTTON426 > .ladi-button {
    border-radius: 6px;
  }

  #BUTTON_TEXT426 {
    width: 100px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT426 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 48, 129);
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #GROUP429 {
    width: 234.162px;
    height: 189.5px;
    top: 28.74px;
    left: 1165.23px;
    display: none !important;
  }

  #GROUP429.ladi-animation > .ladi-group {
    animation-name: bounceIn;
    -webkit-animation-name: bounceIn;
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
  }

  #BOX449 {
    width: 234.162px;
    height: 189.5px;
    top: 0px;
    left: 0px;
  }

  #BOX449 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH450 {
    width: 229px;
    top: 56.25px;
    left: 2.581px;
  }

  #PARAGRAPH450 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 16px;
    text-align: center;
    line-height: 1.6;
  }

  #GROUP447 {
    width: 234.162px;
    height: 189.5px;
    top: 0px;
    left: 0px;
  }

  #GROUP447.ladi-animation > .ladi-group {
    animation-name: bounceIn;
    -webkit-animation-name: bounceIn;
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
  }

  #GROUP452 {
    width: 234.162px;
    height: 189.5px;
    top: 316.45px;
    left: 1165.23px;
    display: none !important;
  }

  #BOX455 {
    width: 472.032px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX455 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
  }

  #PARAGRAPH456 {
    width: 418px;
    top: 19.9535px;
    left: 57.5974px;
  }

  #PARAGRAPH456 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH457 {
    width: 436px;
    top: 51.9535px;
    left: 26.9607px;
  }

  #PARAGRAPH457 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 18px;
    text-align: left;
    line-height: 1.6;
  }

  #IMAGE458 {
    width: 41.4797px;
    height: 42.2986px;
    top: 614.953px;
    left: 1032.03px;
    display: none !important;
  }

  #IMAGE458 > .ladi-image > .ladi-image-background {
    width: 42.0029px;
    height: 42.2986px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-14-3-20220504062927.png");
  }

  #GROUP459 {
    width: 460.084px;
    height: 292px;
    top: 221.95px;
    left: -0.002px;
  }

  #BOX461 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX461 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX461 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE462 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE462 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-2-20220504062933.png");
  }

  #PARAGRAPH463 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH463 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH464 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH464 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP460 {
    width: 460.084px;
    height: 292px;
    top: 219.95px;
    left: 499.914px;
  }

  #BOX467 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX467 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX467 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE468 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE468 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-1-20220504062933.png");
  }

  #PARAGRAPH469 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH469 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH470 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH470 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP466 {
    width: 460.084px;
    height: 292px;
    top: 586.058px;
    left: -0.002px;
  }

  #BOX472 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX472 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX472 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE473 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE473 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-20220504062927.png");
  }

  #PARAGRAPH474 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH474 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH475 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH475 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP471 {
    width: 460.084px;
    height: 292px;
    top: 219.95px;
    left: -0.002px;
  }

  #BOX477 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX477 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX477 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE478 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE478 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-3-20220504062927.png");
  }

  #PARAGRAPH479 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH479 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH480 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH480 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP476 {
    width: 460.084px;
    height: 292px;
    top: 586.058px;
    left: 499.914px;
  }

  #BOX482 {
    width: 245.22px;
    height: 278.332px;
    top: 0px;
    left: 0px;
  }

  #BOX482 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH483 {
    width: 222px;
    top: 93.6936px;
    left: 11.61px;
  }

  #PARAGRAPH483 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE484 {
    width: 60.3179px;
    height: 60.1729px;
    top: 18.8652px;
    left: 92.4511px;
  }

  #IMAGE484 > .ladi-image > .ladi-image-background {
    width: 60.3179px;
    height: 60.1729px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/fund-1-20220504064426.png");
  }

  #GROUP481 {
    width: 245.22px;
    height: 278.332px;
    top: 211.618px;
    left: 235.887px;
  }

  #BOX486 {
    width: 244.22px;
    height: 278.332px;
    top: 0px;
    left: 0px;
  }

  #BOX486 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH487 {
    width: 216px;
    top: 93.47px;
    left: 14.11px;
  }

  #PARAGRAPH487 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE488 {
    width: 61.0133px;
    height: 60.9323px;
    top: 17.0171px;
    left: 91.6033px;
  }

  #IMAGE488 > .ladi-image > .ladi-image-background {
    width: 61.0133px;
    height: 61.9323px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/monitor-1-20220504064427.png");
  }

  #GROUP485 {
    width: 244.22px;
    height: 278.332px;
    top: 211.618px;
    left: 512.887px;
  }

  #BOX490 {
    width: 244.22px;
    height: 278.332px;
    top: 0px;
    left: 0px;
  }

  #BOX490 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH491 {
    width: 221px;
    top: 93.102px;
    left: 11.61px;
  }

  #PARAGRAPH491 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE492 {
    width: 60.3319px;
    height: 60.9556px;
    top: 17.3917px;
    left: 91.944px;
  }

  #IMAGE492 > .ladi-image > .ladi-image-background {
    width: 60.3319px;
    height: 60.9556px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/project-management-1-20220504064427.png");
  }

  #GROUP489 {
    width: 244.22px;
    height: 278.332px;
    top: 211.618px;
    left: 792.595px;
  }

  #BOX504 {
    width: 475.396px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX504 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #PARAGRAPH505 {
    width: 443px;
    top: 59px;
    left: 30.1419px;
  }

  #PARAGRAPH505 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 18px;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH506 {
    width: 421px;
    top: 19px;
    left: 52.1419px;
  }

  #PARAGRAPH506 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #IMAGE507 {
    width: 39.5014px;
    height: 40px;
    top: 19px;
    left: 4.34121px;
  }

  #IMAGE507 > .ladi-image > .ladi-image-background {
    width: 40px;
    height: 40px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-14-2-20220504062933.png");
  }

  #GROUP503 {
    width: 475.396px;
    height: 230px;
    top: 0px;
    left: 0px;
    display: none !important;
  }

  #GROUP503.ladi-animation > .ladi-group {
    animation-name: pulse;
    -webkit-animation-name: pulse;
    animation-delay: 0s;
    -webkit-animation-delay: 0s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-iteration-count: 1;
    -webkit-animation-iteration-count: 1;
  }

  #LIST_PARAGRAPH508 {
    width: 426px;
    top: 202.245px;
    left: -38px;
  }

  #LIST_PARAGRAPH508 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH508 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH508 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }

  #GROUP511 {
    width: 243.601px;
    height: 188.5px;
    top: 104.45px;
    left: -434.54px;
  }

  #GROUP454 {
    width: 475.597px;
    height: 230px;
    top: 601px;
    left: 1024px;
    display: none !important;
  }

  #LIST_PARAGRAPH513 {
    width: 426px;
    top: 261.436px;
    left: -38px;
  }

  #LIST_PARAGRAPH513 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH513 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH513 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }

  #LIST_PARAGRAPH514 {
    width: 426px;
    top: 340.245px;
    left: -38px;
  }

  #LIST_PARAGRAPH514 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH514 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH514 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }

  #LIST_PARAGRAPH515 {
    width: 426px;
    top: 415.919px;
    left: -38px;
  }

  #LIST_PARAGRAPH515 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH515 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH515 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }
}

@media (max-width: 767px) {
  #SECTION_POPUP {
    height: 0px;
  }

  #SECTION1 {
    height: 587.294px;
  }

  #SECTION1 > .ladi-overlay {
    background-color: rgb(255, 255, 255);
    mix-blend-mode: color-burn;
    will-change: transform, opacity;
  }

  #SECTION1 > .ladi-section-background {
    background-size: cover;
    background-attachment: fixed;
    background-image: url("https://w.ladicdn.com/s768x587/5eccf0a3fe0845247513b20a/group-17-1-20220504085834.png");
    background-position: center center;
    background-repeat: no-repeat;
  }

  #HEADLINE4 {
    width: 406px;
    top: 107.104px;
    left: 7.73545px;
  }

  #HEADLINE4 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    line-height: 1.4;
  }

  #BUTTON8 {
    width: 309px;
    height: 43px;
    top: 493.294px;
    left: 54.4911px;
  }

  #BUTTON8 > .ladi-button > .ladi-button-background {
    background-color: rgb(255, 255, 255);
  }

  #BUTTON8 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON8 > .ladi-button:hover .ladi-button-background {
    background: none !important;
    background-color: rgb(255, 255, 255) !important;
  }

  #BUTTON_TEXT8 {
    width: 200px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT8 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT8 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #SECTION12 {
    height: 798.16px;
  }

  #HEADLINE13 {
    width: 414px;
    top: 53px;
    left: 3.73545px;
  }

  #HEADLINE13 > .ladi-headline {
    color: rgb(0, 0, 0);
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION20-1 {
    height: 395.425px;
  }

  #SECTION29 {
    height: 1569.75px;
  }

  #SECTION29 > .ladi-overlay {
    background-color: rgb(255, 255, 255);
    opacity: 0.85;
  }

  #SECTION29 > .ladi-section-background {
    background-color: rgb(156, 194, 244);
  }

  #HEADLINE34 {
    width: 396px;
    top: 64px;
    left: 12px;
  }

  #HEADLINE34 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 20px;
    text-align: center;
    line-height: 1.6;
  }

  #BOX52 {
    width: 363.102px;
    height: 313px;
    top: 0px;
    left: 0px;
  }

  #BOX52 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #PARAGRAPH53 {
    width: 214px;
    top: 109.93px;
    left: 71.9751px;
  }

  #PARAGRAPH53 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH54 {
    width: 314px;
    top: 147.319px;
    left: 21.9751px;
  }

  #PARAGRAPH54 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.4;
  }

  #BOX57 {
    width: 361.528px;
    height: 312px;
    top: 0px;
    left: 0px;
  }

  #BOX57 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
  }

  #PARAGRAPH58 {
    width: 261px;
    top: 102.575px;
    left: 49.5966px;
  }

  #PARAGRAPH58 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(44, 75, 159);
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH59 {
    width: 326px;
    top: 133.991px;
    left: 18.0691px;
  }

  #PARAGRAPH59 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  #GROUP79 {
    width: 361.528px;
    height: 312px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE115-1 {
    width: 406px;
    top: 39.223px;
    left: 7px;
  }

  #HEADLINE115-1 > .ladi-headline {
    color: rgb(44, 75, 159);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION127 {
    height: 258.52px;
  }

  #SECTION127 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION127 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("https://w.ladicdn.com/uploads/images/380beead-cde1-45cc-b464-72893e246558.jpg");
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  #HEADLINE129 {
    width: 358px;
    top: 96.02px;
    left: 24.0328px;
  }

  #HEADLINE129 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 17px;
    font-weight: bold;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP130 {
    width: 398px;
    height: 40px;
    top: 165.52px;
    left: 17.0328px;
  }

  #SHAPE131 {
    width: 22.5469px;
    height: 22.5469px;
    top: 0px;
    left: 0px;
  }

  #SHAPE131 svg:last-child {
    fill: rgba(255, 255, 255, 1);
  }

  #HEADLINE132 {
    width: 365px;
    top: 1px;
    left: 33px;
  }

  #HEADLINE132 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP133 {
    width: 325px;
    height: 22.5469px;
    top: 217.973px;
    left: 17.0328px;
  }

  #SHAPE134 {
    width: 22.5469px;
    height: 22.5469px;
    top: 0px;
    left: 0px;
  }

  #SHAPE134 svg:last-child {
    fill: rgba(255, 255, 255, 1);
  }

  #HEADLINE135 {
    width: 292px;
    top: 2px;
    left: 33px;
  }

  #HEADLINE135 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #IMAGE162 {
    width: 205px;
    height: 49.0196px;
    top: 21px;
    left: 108.721px;
  }

  #IMAGE162 > .ladi-image > .ladi-image-background {
    width: 205px;
    height: 50.2282px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s550x400/5eccf0a3fe0845247513b20a/testcenter-001_w-20210920071701.png");
  }

  #PARAGRAPH201 {
    width: 389px;
    top: 189.123px;
    left: 16.2355px;
  }

  #PARAGRAPH201 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT226 {
    width: 257px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT226 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT226 > .ladi-headline:hover {
    color: rgb(255, 255, 255);
  }

  #BUTTON226 {
    width: 370px;
    height: 45px;
    top: 684.163px;
    left: 23.9911px;
  }

  #BUTTON226 > .ladi-button > .ladi-button-background {
    background-color: rgb(2, 48, 129);
  }

  #BUTTON226 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON226 > .ladi-button:hover {
    border-color: rgb(255, 255, 255);
  }

  #BUTTON226 > .ladi-button:hover .ladi-button-background {
    background: none !important;
    background-color: rgb(2, 49, 129) !important;
  }

  #HEADLINE87 {
    width: 366px;
    top: 45px;
    left: 26.4956px;
  }

  #HEADLINE87 > .ladi-headline {
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION86 {
    height: 728.329px;
  }

  #IMAGE249 {
    width: 199.764px;
    height: 54.8482px;
    top: 21.4863px;
    left: 14px;
  }

  #IMAGE249 > .ladi-image > .ladi-image-background {
    width: 199.764px;
    height: 54.8482px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x400/5eccf0a3fe0845247513b20a/testcenter-001_w-1-20220504085952.png");
  }

  #LIST_PARAGRAPH251 {
    width: 400px;
    top: 161.08px;
    left: 10px;
  }

  #LIST_PARAGRAPH251 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH251 ul li {
    padding-bottom: 10px;
    padding-left: 25px;
  }

  #LIST_PARAGRAPH251 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%201536%201896.0833%22%20class%3D%22%22%20fill%3D%22rgba(2%2C%2049%2C%20129%2C%201)%22%3E%20%3Cpath%20d%3D%22M768%20128q209%200%20385.5%20103T1433%20510.5%201536%20896t-103%20385.5-279.5%20279.5T768%201664t-385.5-103T103%201281.5%200%20896t103-385.5T382.5%20231%20768%20128zm128%201247v-190q0-14-9-23.5t-22-9.5H673q-13%200-23%2010t-10%2023v190q0%2013%2010%2023t23%2010h192q13%200%2022-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8H658q-14%200-24%208-10%206-10%2018l17%20621q0%2010%2010%2017.5t24%207.5h185q14%200%2023.5-7.5T894%201031z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 16px;
    height: 16px;
    top: 4px;
  }

  #IMAGE282 {
    width: 329.419px;
    height: 210.482px;
    top: 263.812px;
    left: 46.026px;
  }

  #IMAGE282 > .ladi-image > .ladi-image-background {
    width: 353.71px;
    height: 226.374px;
    top: -10.5188px;
    left: -17.2905px;
    background-image: url("https://w.ladicdn.com/s700x550/5eccf0a3fe0845247513b20a/device-macbook-pro-1-20220504090819.png");
  }

  #HEADLINE291 {
    width: 391px;
    top: 21px;
    left: 20.9997px;
  }

  #HEADLINE291 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
  }

  #SECTION289 {
    height: 63px;
  }

  #SECTION289 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION289 > .ladi-section-background {
    background-color: rgb(5, 31, 77);
  }

  #IMAGE313 {
    width: 137.902px;
    height: 53.3526px;
    top: 0px;
    left: 221.522px;
  }

  #IMAGE313 > .ladi-image > .ladi-image-background {
    width: 138.98px;
    height: 138.44px;
    top: -42.5742px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s450x450/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE314 {
    width: 120.735px;
    height: 73.7827px;
    top: 77.108px;
    left: 0px;
  }

  #IMAGE314 > .ladi-image > .ladi-image-background {
    width: 126.501px;
    height: 74.9518px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s450x400/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE315 {
    width: 122.78px;
    height: 73.7827px;
    top: 89.108px;
    left: 125.742px;
  }

  #IMAGE315 > .ladi-image > .ladi-image-background {
    width: 141.349px;
    height: 141.349px;
    top: -38.8326px;
    left: -8.56606px;
    background-image: url("https://w.ladicdn.com/s450x450/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE316 {
    width: 159.309px;
    height: 52.7124px;
    top: 0px;
    left: 26px;
  }

  #IMAGE316 > .ladi-image > .ladi-image-background {
    width: 159.309px;
    height: 159.309px;
    top: -54.1546px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x500/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE317 {
    width: 114.392px;
    height: 73.7827px;
    top: 77.108px;
    left: 271.788px;
  }

  #IMAGE317 > .ladi-image > .ladi-image-background {
    width: 115.073px;
    height: 114.393px;
    top: -8.85164px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s450x450/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #GROUP312 {
    width: 386.18px;
    height: 162.891px;
    top: 147.094px;
    left: 12.5056px;
  }

  #GROUP328 {
    width: 172.899px;
    height: 531.202px;
    top: -135.777px;
    left: 673.051px;
    display: none !important;
  }

  #IMAGE333 {
    width: 172.103px;
    height: 123.142px;
    top: 250.113px;
    left: 0.794725px;
  }

  #IMAGE333 > .ladi-image > .ladi-image-background {
    width: 184.669px;
    height: 181.682px;
    top: -14.3858px;
    left: -0.620645px;
    background-image: url("https://w.ladicdn.com/s500x500/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #IMAGE332 {
    width: 166.542px;
    height: 42.8036px;
    top: 395.537px;
    left: 3.57642px;
  }

  #IMAGE332 > .ladi-image > .ladi-image-background {
    width: 178.101px;
    height: 175.208px;
    top: -67.8186px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x500/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE331 {
    width: 159.388px;
    height: 119.575px;
    top: 0px;
    left: 6.35779px;
  }

  #IMAGE331 > .ladi-image > .ladi-image-background {
    width: 192.575px;
    height: 119.575px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x450/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE330 {
    width: 172.626px;
    height: 61.6664px;
    top: 469.536px;
    left: 0px;
  }

  #IMAGE330 > .ladi-image > .ladi-image-background {
    width: 184.607px;
    height: 181.613px;
    top: -66.4486px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x500/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE329 {
    width: 172.103px;
    height: 77.3584px;
    top: 143.422px;
    left: 0px;
  }

  #IMAGE329 > .ladi-image > .ladi-image-background {
    width: 184.048px;
    height: 179.857px;
    top: -52.5573px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x500/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #HEADLINE341 {
    width: 387px;
    top: 35.3px;
    left: 12.0956px;
  }

  #HEADLINE341 > .ladi-headline {
    color: rgb(5, 31, 77);
    font-size: 20px;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION336 {
    height: 558.546px;
  }

  #SECTION336 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("https://w.ladicdn.com/s768x558/5eccf0a3fe0845247513b20a/frame-40-1-20220506015027.png");
    background-position: left center;
    background-repeat: repeat-x;
  }

  #IMAGE349 {
    width: 82.7869px;
    height: 69.8087px;
    top: 14.7284px;
    left: 138.558px;
  }

  #IMAGE349 > .ladi-image > .ladi-image-background {
    width: 83.1966px;
    height: 82.786px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-1-20220504062933.png");
  }

  #IMAGE351-1 {
    width: 400px;
    height: 235.294px;
    top: 379px;
    left: 8.9911px;
  }

  #IMAGE351-1 > .ladi-image > .ladi-image-background {
    width: 400px;
    height: 235.294px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s750x550/5eccf0a3fe0845247513b20a/drawkit-vector-illustration-project-manager-3-1-20220504080127.png");
  }

  #DROPBOX352 {
    width: 300px;
    height: 300px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
  }

  #DROPBOX352 > .ladi-popup > .ladi-popup-background {
    background-color: rgb(255, 255, 255);
  }

  #BOX353 {
    width: 366px;
    height: 119.5px;
    top: 0px;
    left: 0px;
  }

  #BOX353 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #BOX355 {
    width: 365.477px;
    height: 119.5px;
    top: 0px;
    left: 0px;
  }

  #BOX355 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH358 {
    width: 283px;
    top: 28.25px;
    left: 67.4396px;
  }

  #PARAGRAPH358 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: left;
    line-height: 1.4;
  }

  #IMAGE360 {
    width: 44.8553px;
    height: 44.4664px;
    top: 28.25px;
    left: 10.6904px;
  }

  #IMAGE360 > .ladi-image > .ladi-image-background {
    width: 46.7175px;
    height: 44.4664px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-20220504064426.png");
  }

  #PARAGRAPH362 {
    width: 266px;
    top: 28.25px;
    left: 66px;
  }

  #PARAGRAPH362 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: left;
    line-height: 1.4;
  }

  #IMAGE364 {
    width: 44.5263px;
    height: 44.0803px;
    top: 28.25px;
    left: 10.055px;
  }

  #IMAGE364 > .ladi-image > .ladi-image-background {
    width: 44.5263px;
    height: 44.0803px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/monitor-1-20220504064427.png");
  }

  #PARAGRAPH366 {
    width: 289px;
    top: 20.75px;
    left: 63.128px;
  }

  #PARAGRAPH366 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: left;
    line-height: 1.4;
  }

  #IMAGE368 {
    width: 44.072px;
    height: 40.5314px;
    top: 20.75px;
    left: 7.276px;
  }

  #IMAGE368 > .ladi-image > .ladi-image-background {
    width: 44.072px;
    height: 44.0839px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/fund-1-20220504064426.png");
  }

  #IMAGE372 {
    width: 44.6615px;
    height: 41.4881px;
    top: 26.5914px;
    left: 10.2021px;
  }

  #IMAGE372 > .ladi-image > .ladi-image-background {
    width: 44.6918px;
    height: 43.8948px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/project-management-1-20220504064427.png");
  }

  #BUTTON_TEXT385 {
    width: 206px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT385 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT385 > .ladi-headline:hover {
    color: rgb(255, 255, 255);
  }

  #BUTTON385 {
    width: 370.934px;
    height: 45px;
    top: 464.769px;
    left: 20.1286px;
  }

  #BUTTON385 > .ladi-button > .ladi-button-background {
    background-color: rgb(2, 48, 129);
  }

  #BUTTON385 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON385 > .ladi-button:hover {
    border-color: rgb(255, 255, 255);
  }

  #BUTTON385 > .ladi-button:hover .ladi-button-background {
    background: none !important;
    background-color: rgb(2, 49, 129) !important;
  }

  #GROUP390 {
    width: 366px;
    height: 119.5px;
    top: 149.402px;
    left: 27.6064px;
  }

  #BOX354 {
    width: 365.825px;
    height: 121.5px;
    top: 0px;
    left: 0px;
  }

  #BOX354 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #IMAGE398 {
    width: 400px;
    height: 287.522px;
    top: 35.3px;
    left: 535px;
    display: none !important;
  }

  #IMAGE398 > .ladi-image > .ladi-image-background {
    width: 400px;
    height: 307.595px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s750x650/5eccf0a3fe0845247513b20a/group-16-20220504085508.png");
  }

  #PARAGRAPH404 {
    width: 74px;
    top: 116.104px;
    left: 487px;
  }

  #PARAGRAPH404 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #PARAGRAPH405 {
    width: 74px;
    top: 116.104px;
    left: 808px;
  }

  #PARAGRAPH405 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #PARAGRAPH406 {
    width: 74px;
    top: 116.104px;
    left: 707.5px;
  }

  #PARAGRAPH406 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH407 {
    width: 74px;
    top: 116.104px;
    left: 593.764px;
  }

  #PARAGRAPH407 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #PARAGRAPH408 {
    width: 57px;
    top: 84.1042px;
    left: 503.264px;
  }

  #PARAGRAPH408 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 14px;
    line-height: 1.6;
  }

  #BUTTON409 {
    width: 98.157px;
    height: 30.7697px;
    top: 76.3345px;
    left: 569.607px;
    display: none !important;
  }

  #BUTTON409 > .ladi-button > .ladi-button-background {
    background-color: rgb(255, 255, 255);
  }

  #BUTTON409 > .ladi-button {
    border-radius: 6px;
  }

  #BUTTON_TEXT409 {
    width: 98px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT409 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE413 {
    width: 83.8462px;
    height: 81.9685px;
    top: 16.7045px;
    left: 137.552px;
  }

  #IMAGE413 > .ladi-image > .ladi-image-background {
    width: 84.7986px;
    height: 88.2824px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-2-20220504062933.png");
  }

  #IMAGE347 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE347 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-20220504062927.png");
  }

  #BOX41 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX41 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX41 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH38 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH38 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #PARAGRAPH37 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH37 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #GROUP414 {
    width: 363.102px;
    height: 313px;
    top: 176px;
    left: 26.9357px;
  }

  #GROUP402 {
    width: 361.528px;
    height: 312px;
    top: 850.751px;
    left: 28.7316px;
  }

  #SHAPE417 {
    width: 31.4744px;
    height: 25.6466px;
    top: 39.9719px;
    left: 374.526px;
  }

  #SHAPE417 svg:last-child {
    fill: rgba(255, 255, 255, 1);
  }

  #POPUP418 {
    width: 420px;
    height: 466px;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: auto;
  }

  #POPUP418 > .ladi-popup > .ladi-overlay {
    border-radius: 8px;
  }

  #POPUP418 > .ladi-popup > .ladi-popup-background {
    background-image: url("https://w.ladicdn.com/s420x466/5eccf0a3fe0845247513b20a/polygon-1-1-20220504085821.png");
    background-position: center top;
    background-repeat: repeat;
    border-radius: 8px;
  }

  #POPUP418 > .ladi-popup {
    border-radius: 8px;
  }

  #HEADLINE419 {
    width: 162px;
    top: 30.472px;
    left: 129px;
  }

  #HEADLINE419 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #LINE420 {
    width: 83px;
    top: 88.74px;
    left: 168.5px;
  }

  #LINE420 > .ladi-line > .ladi-line-container {
    border-top: 3px solid rgb(5, 31, 77);
    border-right: 3px solid rgb(5, 31, 77);
    border-bottom: 3px solid rgb(5, 31, 77);
    border-left: 0px !important;
  }

  #LINE420 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #HEADLINE421 {
    width: 250px;
    top: 184.663px;
    left: 85.0004px;
  }

  #HEADLINE421 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 16px;
    text-align: center;
    line-height: 1.6;
  }

  #HEADLINE422 {
    width: 250px;
    top: 236.284px;
    left: 85.0004px;
  }

  #HEADLINE422 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 16px;
    text-align: center;
    line-height: 1.6;
  }

  #HEADLINE423 {
    width: 250px;
    top: 289.569px;
    left: 85.0004px;
  }

  #HEADLINE423 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 16px;
    text-align: center;
    line-height: 1.6;
  }

  #HEADLINE424 {
    width: 250px;
    top: 131.378px;
    left: 85.0004px;
  }

  #HEADLINE424 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 16px;
    text-align: center;
    line-height: 1.6;
  }

  #HEADLINE425 {
    width: 250px;
    top: 343.781px;
    left: 85.0004px;
  }

  #HEADLINE425 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON426 {
    width: 166.517px;
    height: 41.6293px;
    top: 395.899px;
    left: 126.742px;
  }

  #BUTTON426 > .ladi-button > .ladi-button-background {
    background-color: rgb(255, 255, 255);
  }

  #BUTTON426 > .ladi-button {
    border-radius: 6px;
  }

  #BUTTON_TEXT426 {
    width: 167px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT426 > .ladi-headline {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 48, 129);
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #GROUP429 {
    width: 365.477px;
    height: 119.5px;
    top: 418.046px;
    left: 28.7706px;
  }

  #BOX449 {
    width: 365.752px;
    height: 120.671px;
    top: 0px;
    left: 0px;
  }

  #BOX449 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH450 {
    width: 290px;
    top: 30.5626px;
    left: 65.837px;
  }

  #PARAGRAPH450 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP447 {
    width: 365.752px;
    height: 120.671px;
    top: 0px;
    left: 0px;
  }

  #GROUP452 {
    width: 365.752px;
    height: 120.671px;
    top: 282.987px;
    left: 27.6064px;
  }

  #BOX455 {
    width: 361.45px;
    height: 312px;
    top: 0px;
    left: 0px;
  }

  #BOX455 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-radius: 5px;
  }

  #PARAGRAPH456 {
    width: 202px;
    top: 117.575px;
    left: 79.725px;
  }

  #PARAGRAPH456 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(44, 75, 159);
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH457 {
    width: 343px;
    top: 150.991px;
    left: 9.264px;
  }

  #PARAGRAPH457 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE458 {
    width: 82.769px;
    height: 81.8087px;
    top: 1228.48px;
    left: 168.15px;
  }

  #IMAGE458 > .ladi-image > .ladi-image-background {
    width: 83.1966px;
    height: 82.8087px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-3-20220504062927.png");
  }

  #GROUP459 {
    width: 460.084px;
    height: 292px;
    top: 417px;
    left: 626.958px;
    display: none !important;
  }

  #BOX461 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX461 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX461 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE462 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE462 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-2-20220504062933.png");
  }

  #PARAGRAPH463 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH463 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH464 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH464 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP460 {
    width: 460.084px;
    height: 292px;
    top: 152px;
    left: 549.958px;
    display: none !important;
  }

  #BOX467 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX467 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX467 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE468 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE468 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-1-20220504062933.png");
  }

  #PARAGRAPH469 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH469 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH470 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH470 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP466 {
    width: 460.084px;
    height: 292px;
    top: 1153.75px;
    left: -611.042px;
    display: none !important;
  }

  #BOX472 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX472 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX472 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE473 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE473 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-20220504062927.png");
  }

  #PARAGRAPH474 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH474 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH475 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH475 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP471 {
    width: 460.084px;
    height: 292px;
    top: 663px;
    left: -544.042px;
    display: none !important;
  }

  #BOX477 {
    width: 460px;
    height: 292px;
    top: 0px;
    left: 0px;
  }

  #BOX477 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #BOX477 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #IMAGE478 {
    width: 61.8493px;
    height: 63.7906px;
    top: 40.948px;
    left: 16.0744px;
  }

  #IMAGE478 > .ladi-image > .ladi-image-background {
    width: 61.9777px;
    height: 63.7906px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-3-20220504062927.png");
  }

  #PARAGRAPH479 {
    width: 363px;
    top: 40.948px;
    left: 97.0836px;
  }

  #PARAGRAPH479 > .ladi-paragraph {
    color: rgb(2, 49, 129);
    font-size: 20px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #PARAGRAPH480 {
    width: 348px;
    top: 84.052px;
    left: 97.0836px;
  }

  #PARAGRAPH480 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 17px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP476 {
    width: 460.084px;
    height: 292px;
    top: 1264.75px;
    left: 591.958px;
    display: none !important;
  }

  #BOX482 {
    width: 196.779px;
    height: 198.671px;
    top: 0px;
    left: 0px;
  }

  #BOX482 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH483 {
    width: 189px;
    top: 68.7105px;
    left: 3.8895px;
  }

  #PARAGRAPH483 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE484 {
    width: 39.3917px;
    height: 40.8136px;
    top: 14.6513px;
    left: 78.6938px;
  }

  #IMAGE484 > .ladi-image > .ladi-image-background {
    width: 39.3917px;
    height: 40.8136px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-20220504064426.png");
  }

  #GROUP481 {
    width: 196.779px;
    height: 198.671px;
    top: 122.316px;
    left: 493.23px;
    display: none !important;
  }

  #BOX486 {
    width: 196.779px;
    height: 198.671px;
    top: 0px;
    left: 0px;
  }

  #BOX486 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH487 {
    width: 189px;
    top: 68.7105px;
    left: 3.8895px;
  }

  #PARAGRAPH487 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE488 {
    width: 39.3917px;
    height: 40.8136px;
    top: 14.6513px;
    left: 78.6938px;
  }

  #IMAGE488 > .ladi-image > .ladi-image-background {
    width: 39.3917px;
    height: 40.8136px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-20220504064426.png");
  }

  #GROUP485 {
    width: 196.779px;
    height: 198.671px;
    top: 373.816px;
    left: 527.611px;
    display: none !important;
  }

  #BOX490 {
    width: 196.779px;
    height: 198.671px;
    top: 0px;
    left: 0px;
  }

  #BOX490 > .ladi-box {
    border-style: solid;
    border-color: rgb(144, 208, 255);
    border-width: 1px;
    border-radius: 10px;
  }

  #PARAGRAPH491 {
    width: 189px;
    top: 68.7105px;
    left: 3.8895px;
  }

  #PARAGRAPH491 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  #IMAGE492 {
    width: 39.3917px;
    height: 40.8136px;
    top: 14.6513px;
    left: 78.6938px;
  }

  #IMAGE492 > .ladi-image > .ladi-image-background {
    width: 39.3917px;
    height: 40.8136px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s350x350/5eccf0a3fe0845247513b20a/group-20220504064426.png");
  }

  #GROUP489 {
    width: 196.779px;
    height: 198.671px;
    top: 204.987px;
    left: -334.389px;
    display: none !important;
  }

  #BOX504 {
    width: 363.102px;
    height: 272px;
    top: 0px;
    left: 0px;
  }

  #BOX504 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-color: rgb(238, 238, 238);
    border-width: 2px;
    border-radius: 5px;
  }

  #PARAGRAPH505 {
    width: 314px;
    top: 148.638px;
    left: 22.9862px;
  }

  #PARAGRAPH505 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.4;
  }

  #PARAGRAPH506 {
    width: 214px;
    top: 110.93px;
    left: 72.9862px;
  }

  #PARAGRAPH506 > .ladi-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(2, 49, 129);
    font-size: 16px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #IMAGE507 {
    width: 82.8744px;
    height: 82.9685px;
    top: 16.7045px;
    left: 138.549px;
  }

  #IMAGE507 > .ladi-image > .ladi-image-background {
    width: 82.8744px;
    height: 84.8336px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/group-14-2-20220504062933.png");
  }

  #GROUP503 {
    width: 363.102px;
    height: 272px;
    top: 534px;
    left: 27.9446px;
  }

  #LIST_PARAGRAPH508 {
    width: 397px;
    top: 133.822px;
    left: 16.5px;
  }

  #LIST_PARAGRAPH508 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.8;
  }

  #LIST_PARAGRAPH508 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH508 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }

  #GROUP511 {
    width: 365.825px;
    height: 121.5px;
    top: 551.829px;
    left: 28.7706px;
  }

  #GROUP454 {
    width: 361.45px;
    height: 312px;
    top: 1210.75px;
    left: 28.7706px;
  }

  #LIST_PARAGRAPH513 {
    width: 378px;
    top: 186.556px;
    left: 16.5956px;
  }

  #LIST_PARAGRAPH513 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.8;
  }

  #LIST_PARAGRAPH513 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH513 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }

  #LIST_PARAGRAPH514 {
    width: 397px;
    top: 268.822px;
    left: 16.5px;
  }

  #LIST_PARAGRAPH514 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.8;
  }

  #LIST_PARAGRAPH514 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH514 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }

  #LIST_PARAGRAPH515 {
    width: 397px;
    top: 352.056px;
    left: 16.5px;
  }

  #LIST_PARAGRAPH515 > .ladi-list-paragraph {
    font-family: "Roboto", sans-serif;
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.8;
  }

  #LIST_PARAGRAPH515 ul li {
    padding-left: 30px;
  }

  #LIST_PARAGRAPH515 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C16.5C21%2C16.88%2020.79%2C17.21%2020.47%2C17.38L12.57%2C21.82C12.41%2C21.94%2012.21%2C22%2012%2C22C11.79%2C22%2011.59%2C21.94%2011.43%2C21.82L3.53%2C17.38C3.21%2C17.21%203%2C16.88%203%2C16.5V7.5C3%2C7.12%203.21%2C6.79%203.53%2C6.62L11.43%2C2.18C11.59%2C2.06%2011.79%2C2%2012%2C2C12.21%2C2%2012.41%2C2.06%2012.57%2C2.18L20.47%2C6.62C20.79%2C6.79%2021%2C7.12%2021%2C7.5V16.5Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 25px;
    height: 25px;
    top: 0px;
  }
}
</style>
