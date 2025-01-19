<script setup>
import EndowPage from "@/components/footer_components/EndowPage.vue";
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'

// Reactive state for groupFooter and images
const groupFooter = ref('')
const images = ref([])

const route = useRoute()

watch(
  () => route.path,
  (newPath) => {
    switch (newPath) {
      case '/landing/nen-tang-danh-gia-nhan-su-toan-dien':
        groupFooter.value = 'GROUP232'
        images.value = ['IMAGE116', 'IMAGE117', 'IMAGE118', 'IMAGE119', 'IMAGE120']
        break
      case '/landing/dao-tao-phat-trien-nhan-su-hieu-qua':
        groupFooter.value = 'GROUP232'
        images.value = ['IMAGE116', 'IMAGE117', 'IMAGE118', 'IMAGE119', 'IMAGE120']
        break
      default:
        groupFooter.value = 'GROUP232'
        images.value = ['IMAGE116', 'IMAGE117', 'IMAGE118', 'IMAGE119', 'IMAGE120']
    }
  },
  {immediate: true}
)
</script>
<template>
  <div class="ladi-wraper">
    <router-view></router-view>
    <div id="SECTION321" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-overlay"></div>
      <div class="ladi-container">
        <div id="BOX322" class='ladi-element'>
          <div class='ladi-box'></div>
        </div>
        <div id="GROUP323" class='ladi-element'>
          <div class='ladi-group'>
            <div id="LIST_PARAGRAPH324" class='ladi-element'>
              <div class='ladi-list-paragraph'>
                <ul>
                  <EndowPage>
                    <template #endow>
                      Không giới hạn
                    </template>
                    <template #description>
                      số lượng đề được tạo trên hệ thống
                    </template>
                  </EndowPage>
                  <EndowPage>
                    <template #endow>
                      Tặng 20 lượt test
                    </template>
                    <template #description>
                      trong vòng 12 tháng kể từ ngày kích hoạt tài khoản
                    </template>
                  </EndowPage>
                  <EndowPage>
                    <template #endow>
                      Tặng 3 bộ đề mẫu
                    </template>
                    <template #description>
                      được thiết kế riêng bởi đội ngũ chuyên gia trong lĩnh vực nhân sự
                    </template>
                  </EndowPage>
                  <li><span style="font-weight: bold;">Tư vấn 1:1</span><span
                    style="color: rgb(0, 55, 202); font-weight: bold;"> </span>về giải pháp riêng,
                    tối ưu cho vấn đề hiện tại của từng doanh nghiệp
                  </li>
                </ul>
              </div>
            </div>
            <div id="GROUP325" class='ladi-element'>
              <div class='ladi-group'>
                <div id="HEADLINE326" class='ladi-element'><h3 class='ladi-headline'><span
                  style="color: rgb(5, 31, 77);">Ưu đãi</span> <span
                  style="color: rgb(5, 31, 77);">khi tạo tài khoản Testcenter.vn</span> <span
                  style="color: rgb(5, 31, 77);">ngay hôm nay</span></h3></div>
                <div id="LINE327" class='ladi-element'>
                  <div class='ladi-line'>
                    <div class="ladi-line-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/register" target="_blank"
           id="BUTTON331" class='ladi-element'>
          <div class='ladi-button'>
            <div class="ladi-button-background"></div>
            <div id="BUTTON_TEXT331" class='ladi-element'><p class='ladi-headline'>Tạo tài khoản
              ngay<br></p></div>
          </div>
        </router-link>
        <div id="IMAGE355" class='ladi-element'>
          <div class='ladi-image'>
            <div class="ladi-image-background"></div>
          </div>
        </div>
      </div>
    </div>
    <div id="SECTION20" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-container">
        <div id="GROUP122" class='ladi-element'>
          <div class='ladi-group'><a href="/" target="_blank" id="HEADLINE115"
                                     class='ladi-element'><h3 class='ladi-headline'>Hơn <span
            style="color: rgb(44, 75, 159);">100 doanh nghiệp</span> đã lựa chọn <span
            style="color: rgb(44, 75, 159);">TestCenter.vn</span></h3></a>
            <div id="PARAGRAPH121" class='ladi-element'><p class='ladi-paragraph'>để nâng cao chất lượng tuyển
              dụng và đào tạo nhân sự</p></div>
          </div>
        </div>
        <router-link to="/register" target="_blank"
           id="BUTTON123" class='ladi-element'>
          <div class='ladi-button'>
            <div class="ladi-button-background"></div>
            <div id="BUTTON_TEXT123" class='ladi-element'><p class='ladi-headline '>Đăng ký
              ngay</p></div>
          </div>
        </router-link>
        <div :id="groupFooter" class='ladi-element'>
          <div class="ladi-group">
            <div
              v-for="(image, index) in images"
              :key="index"
              :id="image"
              class="ladi-element"
            >
              <div class="ladi-image">
                <div class="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="GROUP349" class='ladi-element'>
          <div class='ladi-group'>
            <div id="IMAGE350" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE351" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE352" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE353" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="IMAGE354" class='ladi-element'>
              <div class='ladi-image'>
                <div class="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="SECTION340" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-overlay"></div>
      <div class="ladi-container">
        <div id="IMAGE341" class='ladi-element'>
          <div class='ladi-image'>
            <div class="ladi-image-background"></div>
          </div>
        </div>
        <div id="HEADLINE342" class='ladi-element'><h4 class='ladi-headline'>Ngân hàng 300+ đề test online giúp đánh
          giá năng lực nhân sự hiệu quả</h4></div>
        <div id="GROUP343" class='ladi-element'>
          <div class='ladi-group'>
            <div id="SHAPE344" class='ladi-element'>
              <div class='ladi-shape'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                     preserveAspectRatio="none" viewBox="0 0 24 24" class="" fill="rgba(255, 255, 255, 1)">
                  <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
                </svg>
              </div>
            </div>
            <div id="HEADLINE345" class='ladi-element'><p class='ladi-headline'>Địa chỉ: Tầng 3, Tòa nhà
              Goldseason, 47 Nguyễn Tuân, Thanh Xuân, Hà Nội<br></p></div>
          </div>
        </div>
        <div id="GROUP346" class='ladi-element'>
          <div class='ladi-group'>
            <div id="SHAPE347" class='ladi-element'>
              <div class='ladi-shape'>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"
                     preserveAspectRatio="none" viewBox="0 0 1408 1896.0833" class=""
                     fill="rgba(255, 255, 255, 1)">
                  <path
                    d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T959 1520t-47.5-14.5T856 1485t-49-18q-98-35-175-83-128-79-264.5-215.5T152 904q-48-77-83-175-3-9-18-49t-20.5-55.5T16 577 3.5 519.5 0 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path>
                </svg>
              </div>
            </div>
            <a href="tel:0967778018" id="HEADLINE348" class='ladi-element'><p class='ladi-headline'>Hotline tư
              vấn 24/7: 0967 778 018<br></p></a></div>
        </div>
      </div>
    </div>
    <div id="SECTION338" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-overlay"></div>
      <div class="ladi-container">
        <div id="HEADLINE339" class='ladi-element'><h1 class='ladi-headline'>©2021 Bản quyền thuộc về Testcenter.vn&nbsp;</h1>
        </div>
      </div>
    </div>
    <div id="SECTION_POPUP" class='ladi-section'>
      <div class='ladi-section-background'></div>
      <div class="ladi-container"></div>
    </div>
  </div>
  <div id="backdrop-popup" class="backdrop-popup"></div>
  <div id="backdrop-dropbox" class="backdrop-dropbox"></div>
  <div id="lightbox-screen" class="lightbox-screen"></div>
</template>
<style>
li {
  list-style-type: none;
  line-height: 1.6;
}
body {
  font-size: 12px;
  -ms-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  background: #fff;
  margin: 0 !important;
}

.overflow-hidden {
  overflow: hidden;
}

.opacity-0 {
  opacity: 0;
}

.height-0 {
  height: 0 !important;
}

.ladi-wraper {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow: hidden;
}

.ladi-section {
  margin: 0 auto;
  position: relative;
}

.ladi-section .ladi-section-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  overflow: hidden;
}

.ladi-container {
  position: relative;
  margin: 0 auto;
  height: 100%;
}

.ladi-element {
  position: absolute;
}

.ladi-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;
}

.ladi-box {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ladi-tabs {
  position: absolute;
  width: 100%;
  height: 100%;
}

#SECTION_POPUP .ladi-container {
  z-index: 90000070;
}

#SECTION_POPUP .ladi-container > .ladi-element {
  z-index: 90000070;
  position: fixed;
  display: none;
}

#SECTION_POPUP .ladi-container > .ladi-element[data-fixed-close=true] {
  position: relative !important;
}

#SECTION_POPUP .ladi-container > .ladi-element.hide-visibility {
  display: block !important;
  visibility: hidden !important;
}

.ladi-button {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.ladi-button:active {
  transform: translateY(2px);
  transition: transform 0.2s linear;
}

.ladi-button .ladi-button-background {
  height: 100%;
  width: 100%;
  pointer-events: none;
  transition: inherit;
}

.ladi-button > .ladi-element {
  width: 100% !important;
  height: 100% !important;
  top: 0 !important;
  left: 0 !important;
  display: table;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.ladi-button > .ladi-element .ladi-headline {
  display: table-cell;
  vertical-align: middle;
}

.ladi-group {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ladi-button-group {
  position: absolute;
  width: 100%;
  height: 100%;
}

.ladi-button-group > .ladi-element {
  transition: inherit;
}

.ladi-button-group > .ladi-element > .ladi-button {
  transition: inherit;
}

.ladi-shape {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ladi-image {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.ladi-image .ladi-image-background {
  background-repeat: no-repeat;
  background-position: left top;
  background-size: cover;
  background-attachment: scroll;
  background-origin: content-box;
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.ladi-headline {
  width: 100%;
  display: inline-block;
  background-size: cover;
  background-position: center center;
}

.ladi-headline a {
  text-decoration: underline;
}

.ladi-paragraph {
  width: 100%;
  display: inline-block;
}

.ladi-paragraph a {
  text-decoration: underline;
}

.ladi-list-paragraph {
  width: 100%;
  display: inline-block;
}

.ladi-list-paragraph a {
  text-decoration: underline;
}

.ladi-list-paragraph ul li {
  position: relative;
  counter-increment: linum;
}

.ladi-list-paragraph ul li:before {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  left: 0;
}

.ladi-list-paragraph ul li:last-child {
  padding-bottom: 0 !important;
}

.ladi-list-paragraph1 {
  width: 100%;
  display: inline-block;
}

.ladi-list-paragraph1 a {
  text-decoration: underline;
}

.ladi-list-paragraph1 ul li {
  position: relative;
  counter-increment: linum;
}

.ladi-list-paragraph1 ul li:before {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  left: -23px;
}

.ladi-list-paragraph1 ul li:last-child {
  padding-bottom: 0 !important;
}

.ladi-list-paragraph2 {
  width: 100%;
  display: inline-block;
}

.ladi-list-paragraph2 a {
  text-decoration: underline;
}

.ladi-list-paragraph2 ul li {
  position: relative;
  counter-increment: linum;
}

.ladi-list-paragraph2 ul li:before {
  position: absolute;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  left: -20px;
}

.ladi-list-paragraph2 ul li:last-child {
  padding-bottom: 0 !important;
}

.ladi-line {
  position: relative;
}

.ladi-line .ladi-line-container {
  border-bottom: 0 !important;
  border-right: 0 !important;
  width: 100%;
  height: 100%;
}

a[data-action] {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
}

a:visited {
  color: inherit;
}

a:link {
  color: inherit;
}

[data-opacity="0"] {
  opacity: 0;
}

[data-hidden=true] {
  display: none;
}

[data-action=true] {
  cursor: pointer;
}

.backdrop-popup {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90000060;
}

.backdrop-dropbox {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 90000080;
}

.lightbox-screen {
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 9000000080;
  background: rgba(0, 0, 0, 0.5);
}

.lightbox-screen .lightbox-close {
  position: absolute;
  z-index: 9000000090;
  cursor: pointer;
}

.lightbox-screen .lightbox-hidden {
  display: none;
}

#SECTION_POPUP .popup-close, .ladi-section .ladi-section-close, .lightbox-screen .lightbox-close {
  width: 18px;
  height: 18px;
  margin: 6px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20148.1%20148.1%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M83.4%2C74l54.1-54.1c2.6-2.6%2C2.6-6.8%2C0-9.3c-2.6-2.6-6.8-2.6-9.3%2C0L74%2C64.7L20%2C10.5c-2.6-2.6-6.8-2.6-9.3%2C0c-2.6%2C2.6-2.6%2C6.8%2C0%2C9.3l54%2C54.1l-54.1%2C54.1c-2.6%2C2.6-2.6%2C6.8%2C0%2C9.3c2.6%2C2.6%2C6.8%2C2.6%2C9.3%2C0l54.1-54l54.1%2C54.1c1.3%2C1.3%2C3%2C1.9%2C4.7%2C1.9s3.4-0.6%2C4.7-1.9c1.3-1.3%2C2-3.1%2C2-4.9c0-1.7-0.8-3.4-2-4.6L83.4%2C74z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
}

#BODY_BACKGROUND {
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 100vh !important;
}

#POPUP_BLOG .ladi-headline img, #POPUP_BLOG .ladi-paragraph img {
  max-width: 100%;
}

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

@font-face {
  font-family: "SF-Pro-Text-Bold.otf";
  src: url("@/assets/landing/5eccf0a3fe0845247513b20a/sf-pro-text-bold-20210910035521.otf");
}

@font-face {
  font-family: "SF-Pro-Text-Regular.otf";
  src: url("@/assets/landing/5eccf0a3fe0845247513b20a/sf-pro-text-regular-20210910035521.otf");
}

body {
  font-family: "Open Sans", sans-serif;
}

@media (min-width: 768px) {
  #SECTION12 {
    height: 521.556px;
  }

  #LIST_PARAGRAPH195 {
    width: 435px;
    top: 184.2px;
    left: -38px;
  }

  #LIST_PARAGRAPH195 > .ladi-list-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH195 ul li {
    padding-bottom: 15px;
    padding-left: 25px;
  }

  #LIST_PARAGRAPH195 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(14%2C%200%2C%20167%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C7L9%2C19L3.5%2C13.5L4.91%2C12.09L9%2C16.17L19.59%2C5.59L21%2C7Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 19px;
    height: 19px;
    top: 0px;
  }

  #SECTION_POPUP {
    height: 0px;
  }

  #SECTION12 {
    height: 569.4px;
  }

  #HEADLINE13 {
    width: 455px;
    top: 0px;
    left: 0px;
  }

  #PEN_TOOL186 {
    width: 1916.74px;
    height: 710.654px;
    top: -58.144px;
    left: -477.904px;
  }

  #PEN_TOOL186 svg:last-child {
    fill: url("#PEN_TOOL186_desktop_gradient");
  }

  #BUTTON8 {
    width: 200px;
    height: 45px;
    top: 463.934px;
    left: 0px;
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
    background-color: rgb(22, 0, 255) !important;
  }

  #BUTTON_TEXT8 {
    width: 203px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT8 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(35, 24, 149);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT8 > .ladi-headline:hover {
    color: rgb(255, 255, 255);
  }

  #GROUP183 {
    width: 474.434px;
    height: 294.755px;
    top: 132.655px;
    left: 0px;
  }

  #IMAGE170 {
    width: 223.597px;
    height: 55.1002px;
    top: 57px;
    left: 0.5px;
  }

  #IMAGE170 > .ladi-image > .ladi-image-background {
    width: 224.884px;
    height: 55.1001px;
    top: 0.00008px;
    left: -1.287px;
    background-image: url("https://w.ladicdn.com/s550x400/5eccf0a3fe0845247513b20a/testcenter-001_w-20210920071701.png");
  }

  #HEADLINE13 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(0, 0, 0);
    font-size: 24px;
    text-align: left;
    line-height: 1.6;
  }

  #SECTION20 {
    height: 437.404px;
  }

  #SECTION29 {
    height: 629.4px;
  }

  #SECTION29 > .ladi-overlay {
    background-color: rgb(243, 246, 249);
    opacity: 0.3;
  }

  #HEADLINE115 {
    width: 960px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE115 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(0, 0, 0);
    font-size: 24px;
    text-align: center;
    line-height: 1.6;
  }

  #PARAGRAPH121 {
    width: 960px;
    top: 45.2227px;
    left: 0px;
  }

  #PARAGRAPH121 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 18px;
    text-align: center;
    line-height: 1.6;
  }

  #GROUP122 {
    width: 960px;
    height: 74.2227px;
    top: 34.7833px;
    left: 0px;
  }

  #BUTTON_TEXT123 {
    width: 210px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT123 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT123 > .ladi-headline:hover {
    color: rgb(14, 0, 167);
  }

  #BUTTON123 {
    width: 210px;
    height: 45px;
    top: 340.839px;
    left: 375px;
  }

  #BUTTON123 > .ladi-button > .ladi-button-background {
    background-color: rgb(5, 31, 77);
  }

  #BUTTON123 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #IMAGE223 {
    width: 478.165px;
    height: 266.506px;
    top: 128.694px;
    left: -11.162px;
  }

  #IMAGE223 > .ladi-image > .ladi-image-background {
    width: 502.25px;
    height: 265.512px;
    top: 0.993945px;
    left: -21.7922px;
    background-image: url("@/assets/landing/s850x600/5eccf0a3fe0845247513b20a/11145-20210920102121.png");
  }

  #BOX255 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX255 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX255 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH257 {
    width: 181px;
    top: 100px;
    left: 9.5px;
  }

  #PARAGRAPH257 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #BOX266 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX266 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX266 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH268 {
    width: 171px;
    top: 100px;
    left: 19px;
  }

  #PARAGRAPH268 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #SHAPE180 {
    width: 17.7806px;
    height: 23.9442px;
    top: 0px;
    left: 0px;
    display: none !important;
  }

  #SHAPE180 > .ladi-shape {
    opacity: 0.2;
  }

  #SHAPE180 svg:last-child {
    fill: rgb(255, 255, 255);
  }

  #HEADLINE_EXAM {
    width: 470px;
    top: 81.677px;
    left: 0px;
  }

  #HEADLINE_EXAM > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(44, 75, 159);
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #SECTION1 {
    height: 518.082px;
  }

  #SECTION1 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("@/assets/landing/s1440x518/5eccf0a3fe0845247513b20a/sl-120219-25650-11-20210922082336.png");
    background-position: center top;
    background-repeat: repeat;
    opacity: 0.3;
  }

  #IMAGE272 {
    width: 236.211px;
    height: 56.8992px;
    top: 0px;
    left: 0px;
  }

  #IMAGE272 > .ladi-image > .ladi-image-background {
    width: 236.211px;
    height: 56.8992px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s550x400/5eccf0a3fe0845247513b20a/logo-20210920030216.png");
  }

  #LIST_PARAGRAPH274 {
    width: 422px;
    top: 221.2px;
    left: 500.5px;
  }

  #LIST_PARAGRAPH274 > .ladi-list-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH274 ul li {
    padding-bottom: 10px;
    padding-left: 25px;
  }

  #LIST_PARAGRAPH274 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%201536%201896.0833%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201.0)%22%3E%20%3Cpath%20d%3D%22M768%20128q209%200%20385.5%20103T1433%20510.5%201536%20896t-103%20385.5-279.5%20279.5T768%201664t-385.5-103T103%201281.5%200%20896t103-385.5T382.5%20231%20768%20128zm128%201247v-190q0-14-9-23.5t-22-9.5H673q-13%200-23%2010t-10%2023v190q0%2013%2010%2023t23%2010h192q13%200%2022-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8H658q-14%200-24%208-10%206-10%2018l17%20621q0%2010%2010%2017.5t24%207.5h185q14%200%2023.5-7.5T894%201031z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 16px;
    height: 16px;
    top: 4px;
  }

  #BOX276 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX276 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX276 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH278 {
    width: 165px;
    top: 100px;
    left: 19px;
  }

  #PARAGRAPH278 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #BOX280 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX280 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX280 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH282 {
    width: 175px;
    top: 100px;
    left: 19px;
  }

  #PARAGRAPH282 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #IMAGE285 {
    width: 60px;
    height: 60px;
    top: 23.045px;
    left: 70px;
  }

  #IMAGE285 > .ladi-image > .ladi-image-background {
    width: 60px;
    height: 60px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/icon-2-20210922095444.png");
  }

  #IMAGE286 {
    width: 55px;
    height: 55px;
    top: 23.045px;
    left: 72.5px;
  }

  #IMAGE286 > .ladi-image > .ladi-image-background {
    width: 55px;
    height: 55px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/icon-20210922095448.png");
  }

  #IMAGE287 {
    width: 60px;
    height: 53.5714px;
    top: 28.759px;
    left: 70px;
  }

  #IMAGE287 > .ladi-image > .ladi-image-background {
    width: 60px;
    height: 53.5714px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/314252_document_certificate_icon-20210922101035.png");
  }

  #IMAGE288 {
    width: 60px;
    height: 60px;
    top: 23.045px;
    left: 70px;
  }

  #IMAGE288 > .ladi-image > .ladi-image-background {
    width: 60px;
    height: 60px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/4230286_team_teamwork_users_icon-20210922101244.png");
  }

  #IMAGE116 {
    width: 198.82px;
    height: 128.238px;
    top: 282.536px;
    left: 18.467px;
  }

  #IMAGE116 > .ladi-image > .ladi-image-background {
    width: 198.82px;
    height: 198.82px;
    top: -15.3847px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x500/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #IMAGE117 {
    width: 74.7892px;
    height: 28.935px;
    top: 66.049px;
    left: 51.548px;
  }

  #IMAGE117 > .ladi-image > .ladi-image-background {
    width: 75.3738px;
    height: 75.0815px;
    top: -23.0895px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE118 {
    width: 71.583px;
    height: 44.0356px;
    top: 0px;
    left: 0px;
  }

  #IMAGE118 > .ladi-image > .ladi-image-background {
    width: 74.322px;
    height: 44.0356px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x350/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE119 {
    width: 72.3423px;
    height: 32.0731px;
    top: 9.0402px;
    left: 107.043px;
  }

  #IMAGE119 > .ladi-image > .ladi-image-background {
    width: 72.3423px;
    height: 72.3425px;
    top: -20.1668px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE120 {
    width: 80.2659px;
    height: 26.5584px;
    top: 67.2369px;
    left: 154.014px;
  }

  #IMAGE120 > .ladi-image > .ladi-image-background {
    width: 80.2659px;
    height: 80.2654px;
    top: -27.285px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x400/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #GROUP232 {
    width: 283.505px;
    height: 94.984px;
    top: 34.7833px;
    left: -283.505px;
    display: none !important;
  }

  #GROUP289 {
    width: 200px;
    height: 230px;
    top: 191.2px;
    left: 254.167px;
  }

  #GROUP290 {
    width: 200px;
    height: 230px;
    top: 191.2px;
    left: 0px;
  }

  #GROUP291 {
    width: 200px;
    height: 230px;
    top: 191.2px;
    left: 508.333px;
  }

  #GROUP292 {
    width: 200px;
    height: 230px;
    top: 191.2px;
    left: 762.5px;
  }

  #PARAGRAPH300 {
    width: 517px;
    top: 455.154px;
    left: 221.5px;
  }

  #PARAGRAPH300 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: italic;
    text-align: center;
    line-height: 1.6;
  }

  #SHAPE209 {
    width: 20px;
    height: 20px;
    top: 24px;
    left: 0px;
  }

  #SHAPE209 svg:last-child {
    fill: rgb(14, 0, 167);
  }

  #SHAPE207 {
    width: 20px;
    height: 20px;
    top: 25px;
    left: 0px;
  }

  #SHAPE207 svg:last-child {
    fill: rgb(14, 0, 167);
  }

  #LINE308 {
    width: 107px;
    top: 100px;
    left: 0px;
  }

  #LINE308 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(4, 67, 178);
    border-right: 2px solid rgb(4, 67, 178);
    border-bottom: 2px solid rgb(4, 67, 178);
    border-left: 0px !important;
  }

  #LINE308 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #GROUP309 {
    width: 455px;
    height: 94px;
    top: 103.09px;
    left: 538.5px;
  }

  #LINE310 {
    width: 98px;
    top: 100px;
    left: 212.5px;
  }

  #LINE310 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(44, 75, 159);
    border-right: 2px solid rgb(44, 75, 159);
    border-bottom: 2px solid rgb(44, 75, 159);
    border-left: 0px !important;
  }

  #LINE310 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #GROUP314 {
    width: 523px;
    height: 95px;
    top: 30px;
    left: 239.5px;
  }

  #BUTTON_TEXT315 {
    width: 200px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT315 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT315 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON315 {
    width: 200px;
    height: 45px;
    top: 390.5px;
    left: 523.501px;
  }

  #BUTTON315 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON315 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON_TEXT317 {
    width: 200px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT317 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT317 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON317 {
    width: 200px;
    height: 45px;
    top: 440.645px;
    left: 538.5px;
  }

  #BUTTON317 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON317 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON_TEXT319 {
    width: 200px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT319 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT319 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON319 {
    width: 227px;
    height: 45px;
    top: 550.154px;
    left: 366.5px;
  }

  #BUTTON319 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON319 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #SECTION321 {
    height: 541.622px;
  }

  #SECTION321 > .ladi-overlay {
    background: rgb(248, 248, 248);
    background: -webkit-linear-gradient(1600deg, rgb(248, 248, 248), rgb(246, 251, 255));
    background: linear-gradient(1600deg, rgb(248, 248, 248), rgb(246, 251, 255));
    opacity: 0.3;
  }

  #BOX322 {
    width: 936.729px;
    height: 457.3px;
    top: 40.572px;
    left: 11.6355px;
  }

  #BOX322 > .ladi-box {
    background: rgb(255, 250, 91);
    background: -webkit-linear-gradient(180505deg, rgb(255, 250, 91), rgb(255, 75, 0));
    background: linear-gradient(180505deg, rgb(255, 250, 91), rgb(255, 75, 0));
    box-shadow: 0px 0px 15px -15px #000;
    -webkit-box-shadow: 0px 0px 15px -15px #000;
    border-style: solid;
    border-color: rgb(228, 228, 228);
    border-width: 1px;
    border-radius: 10px;
  }

  #GROUP323 {
    width: 502px;
    height: 299.448px;
    top: 77.572px;
    left: 42px;
  }

  #LIST_PARAGRAPH324 {
    width: 393px;
    top: 113.448px;
    left: -38px;
  }

  #LIST_PARAGRAPH324 > .ladi-list-paragraph {
    color: rgb(5, 31, 77);
    font-size: 15px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH324 ul li {
    padding-bottom: 6px;
    padding-left: 30px;
  }

  #LIST_PARAGRAPH324 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(5%2C%2031%2C%2077%2C%201.0)%22%3E%20%3Cpath%20d%3D%22M21%2C7L9%2C19L3.5%2C13.5L4.91%2C12.09L9%2C16.17L19.59%2C5.59L21%2C7Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 17px;
    height: 17px;
    top: 4px;
  }

  #GROUP325 {
    width: 502px;
    height: 99px;
    top: 0;
    left: 0;
  }

  #HEADLINE326 {
    width: 502px;
    top: 0;
    left: 0;
  }

  #HEADLINE326 > .ladi-headline {
    color: rgb(5, 31, 77);
    font-size: 24px;
    text-align: left;
    line-height: 1.6;
  }

  #LINE327 {
    width: 100px;
    top: 100px;
    left: 0px;
  }

  #LINE327 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(5, 31, 77);
    border-right: 2px solid rgb(5, 31, 77);
    border-bottom: 2px solid rgb(5, 31, 77);
    border-left: 0px !important;
  }

  #LINE327 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #BUTTON_TEXT331 {
    width: 227px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT331 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT331 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON331 {
    width: 200px;
    height: 45px;
    top: 430.418px;
    left: 42px;
  }

  #BUTTON331 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON331 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #IMAGE335 {
    width: 532.068px;
    height: 399.051px;
    top: 48.49px;
    left: -83.9004px;
  }

  #IMAGE335 > .ladi-image > .ladi-image-background {
    width: 532.068px;
    height: 399.051px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s850x700/5eccf0a3fe0845247513b20a/imac-blue-2-de-thi-20210923085703.png");
  }

  #GROUP337 {
    width: 470px;
    height: 225.677px;
    top: 90.49px;
    left: 523.501px;
  }

  #SECTION338 {
    height: 45.839px;
  }

  #SECTION338 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION338 > .ladi-section-background {
    background-color: rgb(5, 31, 77);
  }

  #HEADLINE339 {
    width: 391px;
    top: 11px;
    left: 284.5px;
  }

  #HEADLINE339 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 13px;
    text-align: center;
    line-height: 1.2;
  }

  #SECTION340 {
    height: 251.839px;
  }

  #SECTION340 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION340 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("@/assets/landing/uploads/images/380beead-cde1-45cc-b464-72893e246558.jpg");
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  #IMAGE341 {
    width: 230.99px;
    height: 55.274px;
    top: 35px;
    left: 0.5px;
  }

  #IMAGE341 > .ladi-image > .ladi-image-background {
    width: 230.99px;
    height: 55.274px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s550x400/5eccf0a3fe0845247513b20a/testcenter-001_w-20210920071701.png");
  }

  #HEADLINE342 {
    width: 666px;
    top: 100px;
    left: 0px;
  }

  #HEADLINE342 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP343 {
    width: 558px;
    height: 41px;
    top: 150px;
    left: 0px;
  }

  #SHAPE344 {
    width: 22.5469px;
    height: 22.5469px;
    top: -10px;
    left: 0px;
  }

  #SHAPE344 svg:last-child {
    fill: rgb(255, 255, 255);
  }

  #HEADLINE345 {
    width: 525px;
    top: -10px;
    left: 33px;
  }

  #HEADLINE345 > .ladi-headline {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #LINE221 {
    width: 107px;
    top: 60px;
    left: 425.242px;
  }

  #LINE221 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(20, 3, 204);
    border-right: 2px solid rgb(20, 3, 204);
    border-bottom: 2px solid rgb(20, 3, 204);
    border-left: 0px !important;
  }

  #LINE221 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #GROUP346 {
    width: 325px;
    height: 22.5469px;
    top: 185.453px;
    left: 0.5px;
  }

  #SHAPE347 {
    width: 22.5469px;
    height: 22.5469px;
    top: -10px;
    left: 0px;
  }

  #SHAPE347 svg:last-child {
    fill: rgb(255, 255, 255);
  }

  #HEADLINE348 {
    width: 292px;
    top: -10px;
    left: 33px;
  }

  #HEADLINE348 > .ladi-headline {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP192 {
    width: 264.625px;
    height: 88.6584px;
    top: 41.758px;
    left: -264.125px;
    display: none !important;
  }

  #IMAGE197 {
    width: 74.9202px;
    height: 24.7898px;
    top: 62.7595px;
    left: 143.757px;
  }

  #IMAGE197 > .ladi-image > .ladi-image-background {
    width: 74.9202px;
    height: 74.9203px;
    top: -25.468px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE196 {
    width: 67.5249px;
    height: 29.9373px;
    top: 8.43821px;
    left: 99.9139px;
  }

  #IMAGE196 > .ladi-image > .ladi-image-background {
    width: 67.5249px;
    height: 67.525px;
    top: -18.8239px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE195 {
    width: 66.8164px;
    height: 41.1033px;
    top: 0px;
    left: 0px;
  }

  #IMAGE195 > .ladi-image > .ladi-image-background {
    width: 69.3729px;
    height: 41.1033px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x350/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE194 {
    width: 69.8089px;
    height: 27.0082px;
    top: 61.6502px;
    left: 48.1151px;
  }

  #IMAGE194 > .ladi-image > .ladi-image-background {
    width: 70.3545px;
    height: 70.0818px;
    top: -21.552px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE193 {
    width: 63.1832px;
    height: 40.7528px;
    top: 3.03045px;
    left: 201.442px;
  }

  #IMAGE193 > .ladi-image > .ladi-image-background {
    width: 63.1832px;
    height: 63.1832px;
    top: -4.8891px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #IMAGE350 {
    width: 163.492px;
    height: 63.2532px;
    top: 34.253px;
    left: 617.369px;
  }

  #IMAGE350 > .ladi-image > .ladi-image-background {
    width: 164.77px;
    height: 164.131px;
    top: -50.4747px;
    left: 0px;
    background-image: url("@/assets/landing/s500x500/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE351 {
    width: 180px;
    height: 110px;
    top: 0px;
    left: 0px;
  }

  #IMAGE351 > .ladi-image > .ladi-image-background {
    width: 188.596px;
    height: 111.743px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s500x450/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE352 {
    width: 199.364px;
    height: 102px;
    top: 13px;
    left: 188.631px;
  }

  #IMAGE352 > .ladi-image > .ladi-image-background {
    width: 229.516px;
    height: 229.516px;
    top: -63.0545px;
    left: -13.9091px;
    background-image: url("@/assets/landing/s550x550/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE353 {
    width: 188.872px;
    height: 62.494px;
    top: 34.253px;
    left: 414.453px;
  }

  #IMAGE353 > .ladi-image > .ladi-image-background {
    width: 188.872px;
    height: 188.872px;
    top: -64.2038px;
    left: 0px;
    background-image: url("@/assets/landing/s500x500/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE354 {
    width: 168.035px;
    height: 108.382px;
    top: 5.8445px;
    left: 800.965px;
  }

  #IMAGE354 > .ladi-image > .ladi-image-background {
    width: 169.035px;
    height: 168.035px;
    top: -13.0025px;
    left: 0px;
    background-image: url("@/assets/landing/s500x500/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #GROUP349 {
    width: 969px;
    height: 115px;
    top: 166.796px;
    left: -9px;
  }

  #IMAGE355 {
    width: 445.823px;
    height: 326.736px;
    top: 105.854px;
    left: 502.541px;
  }

  #IMAGE355 > .ladi-image > .ladi-image-background {
    width: 445.823px;
    height: 326.736px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s750x650/5eccf0a3fe0845247513b20a/lap-trang-20210924051936.png");
  }

  #IMAGE333 {
    width: 639.912px;
    height: 479.934px;
    top: 40.0655px;
    left: 461px;
  }

  #IMAGE333 > .ladi-image > .ladi-image-background {
    width: 639.912px;
    height: 479.934px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s950x800/5eccf0a3fe0845247513b20a/lap-trang-danh-gia-nhan-su-20210924052206.png");
  }

  #LINE220 {
    width: 107px;
    top: 45.044px;
    left: 426.5px;
  }

  #LINE220 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(20, 3, 204);
    border-right: 2px solid rgb(20, 3, 204);
    border-bottom: 2px solid rgb(20, 3, 204);
    border-left: 0px !important;
  }

  #LINE220 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }
}

@media (max-width: 767px) {
  #SECTION12 {
    height: 617.333px;
  }

  #LIST_PARAGRAPH195 {
    width: 400px;
    top: 335.333px;
    left: 0px;
  }

  #LIST_PARAGRAPH195 > .ladi-list-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH195 ul li {
    padding-bottom: 15px;
    padding-left: 25px;
  }

  #LIST_PARAGRAPH195 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(14%2C%200%2C%20167%2C%201)%22%3E%20%3Cpath%20d%3D%22M21%2C7L9%2C19L3.5%2C13.5L4.91%2C12.09L9%2C16.17L19.59%2C5.59L21%2C7Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 19px;
    height: 19px;
    top: 0px;
  }

  #LINE220 {
    width: 109px;
    top: 100px;
    left: 155.725px;
  }

  #LINE220 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(20, 3, 204);
    border-right: 2px solid rgb(20, 3, 204);
    border-bottom: 2px solid rgb(20, 3, 204);
    border-left: 0px !important;
  }

  #LINE220 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #SECTION_POPUP {
    height: 0px;
  }
  #PEN_TOOL186 {
    width: 419.059px;
    height: 536.909px;
    top: -7.26809px;
    left: 0.163025px;
  }

  #PEN_TOOL186 svg:last-child {
    fill: url("#PEN_TOOL186_desktop_gradient");
  }

  #BUTTON8 {
    width: 370px;
    height: 45px;
    top: 390.179px;
    left: 22px;
  }

  #BUTTON8 > .ladi-button > .ladi-button-background {
    background-color: rgb(255, 255, 255);
  }

  #BUTTON8 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 10px;
  }

  #BUTTON8 > .ladi-button:hover .ladi-button-background {
    background: none !important;
    background-color: rgb(22, 0, 255) !important;
  }

  #BUTTON_TEXT8 {
    width: 160px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT8 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(35, 24, 149);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT8 > .ladi-headline:hover {
    color: rgb(255, 255, 255);
  }

  #GROUP183 {
    width: 393px;
    height: 259.755px;
    top: 100.424px;
    left: 22px;
  }

  #IMAGE170 {
    width: 187.017px;
    height: 45.1002px;
    top: 31.521px;
    left: 118.491px;
  }

  #IMAGE170 > .ladi-image > .ladi-image-background {
    width: 188.07px;
    height: 45.1001px;
    top: 0.000065px;
    left: -1.05343px;
    background-image: url("https://w.ladicdn.com/s500x350/5eccf0a3fe0845247513b20a/testcenter-001_w-20210920071701.png");
  }

  #SECTION12 {
    height: 576.326px;
  }

  #HEADLINE13 {
    width: 420px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE13 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-align: center;
    line-height: 1.6;
  }

  #SECTION20 {
    height: 1030.38px;
  }

  #SECTION29 {
    height: 1353px;
  }

  #SECTION29 > .ladi-overlay {
    background-color: rgb(243, 246, 249);
    opacity: 0.85;
  }

  #HEADLINE34 {
    width: 419px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE34 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-align: center;
    line-height: 1.6;
  }

  #HEADLINE115 {
    width: 420px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE115 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(0, 0, 0);
    font-size: 20px;
    text-align: center;
    line-height: 1.6;
  }

  #PARAGRAPH121 {
    width: 420px;
    top: 69.2227px;
    left: 0px;
  }

  #PARAGRAPH121 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    text-align: center;
    line-height: 1.6;
  }

  #GROUP122 {
    width: 420px;
    height: 93.2227px;
    top: 24px;
    left: 0px;
  }

  #BUTTON_TEXT123 {
    width: 180px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT123 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT123 > .ladi-headline:hover {
    color: rgb(14, 0, 167);
  }

  #BUTTON123 {
    width: 370px;
    height: 45px;
    top: 940.272px;
    left: 33.0328px;
  }

  #BUTTON123 > .ladi-button > .ladi-button-background {
    background-color: rgb(5, 31, 77);
  }

  #BUTTON123 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #IMAGE223 {
    width: 400px;
    height: 211.457px;
    top: 111px;
    left: 10px;
  }

  #IMAGE223 > .ladi-image > .ladi-image-background {
    width: 400px;
    height: 211.458px;
    top: -0.001244px;
    left: 0px;
    background-image: url("@/assets/landing/s750x550/5eccf0a3fe0845247513b20a/11145-20210920102121.png");
  }

  #BOX255 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX255 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX255 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH257 {
    width: 165px;
    top: 100px;
    left: 19px;
  }

  #PARAGRAPH257 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #BOX266 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX266 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX266 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH268 {
    width: 171px;
    top: 100px;
    left: 19px;
  }

  #PARAGRAPH268 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #SHAPE209 {
    width: 20px;
    height: 20px;
    top: 20px;
    left: 0px;
  }

  #SHAPE209 svg:last-child {
    fill: rgb(14, 0, 167);
  }

  #SHAPE207 {
    width: 20px;
    height: 20px;
    top: 23px;
    left: 0px;
  }

  #SHAPE207 svg:last-child {
    fill: rgb(14, 0, 167);
  }

  #SHAPE180 {
    width: 10.7831px;
    height: 14.521px;
    top: 8px;
    left: 45.4946px;
  }

  #SHAPE180 > .ladi-shape {
    opacity: 0.2;
  }

  #SHAPE180 svg:last-child {
    fill: rgb(255, 255, 255);
  }

  #HEADLINE_EXAM {
    width: 347px;
    top: 83.677px;
    left: 0px;
  }

  #HEADLINE_EXAM > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(44, 75, 159);
    font-size: 29px;
    font-weight: bold;
    text-align: left;
    line-height: 1.6;
  }

  #SECTION1 {
    height: 706.198px;
  }

  #SECTION1 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("@/assets/landing/s768x706/5eccf0a3fe0845247513b20a/sl-120219-25650-11-20210922082336.png");
    background-position: center top;
    background-repeat: repeat;
    opacity: 0.3;
  }

  #IMAGE272 {
    width: 236.211px;
    height: 56.8992px;
    top: 0px;
    left: 0px;
  }

  #IMAGE272 > .ladi-image > .ladi-image-background {
    width: 236.211px;
    height: 56.8992px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s550x400/5eccf0a3fe0845247513b20a/logo-20210920030216.png");
  }

  #LIST_PARAGRAPH274 {
    width: 377px;
    top: 342.457px;
    left: 21.5px;
  }

  #LIST_PARAGRAPH274 > .ladi-list-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 14px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH274 ul li {
    padding-bottom: 10px;
    padding-left: 25px;
  }

  #LIST_PARAGRAPH274 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%201536%201896.0833%22%20class%3D%22%22%20fill%3D%22rgba(44%2C%2075%2C%20159%2C%201.0)%22%3E%20%3Cpath%20d%3D%22M768%20128q209%200%20385.5%20103T1433%20510.5%201536%20896t-103%20385.5-279.5%20279.5T768%201664t-385.5-103T103%201281.5%200%20896t103-385.5T382.5%20231%20768%20128zm128%201247v-190q0-14-9-23.5t-22-9.5H673q-13%200-23%2010t-10%2023v190q0%2013%2010%2023t23%2010h192q13%200%2022-9.5t9-23.5zm-2-344l18-621q0-12-10-18-10-8-24-8H658q-14%200-24%208-10%206-10%2018l17%20621q0%2010%2010%2017.5t24%207.5h185q14%200%2023.5-7.5T894%201031z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 16px;
    height: 16px;
    top: 4px;
  }

  #BOX276 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX276 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX276 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH278 {
    width: 165px;
    top: 100px;
    left: 19px;
  }

  #PARAGRAPH278 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #BOX280 {
    width: 200px;
    height: 230px;
    top: 0px;
    left: 0px;
  }

  #BOX280 > .ladi-box {
    background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(180, 180, 180);
    border-width: 1px;
    border-radius: 5px;
  }

  #BOX280 > .ladi-box:hover {
    background: none;
    background-color: rgb(255, 255, 255);
    border-color: rgb(14, 0, 167);
  }

  #PARAGRAPH282 {
    width: 175px;
    top: 100px;
    left: 19px;
  }

  #PARAGRAPH282 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 15px;
    line-height: 1.6;
  }

  #IMAGE285 {
    width: 60px;
    height: 60px;
    top: 23.045px;
    left: 70px;
  }

  #IMAGE285 > .ladi-image > .ladi-image-background {
    width: 60px;
    height: 60px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/icon-2-20210922095444.png");
  }

  #IMAGE286 {
    width: 55px;
    height: 55px;
    top: 23.045px;
    left: 72.5px;
  }

  #IMAGE286 > .ladi-image > .ladi-image-background {
    width: 55px;
    height: 55px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/icon-20210922095448.png");
  }

  #IMAGE287 {
    width: 60px;
    height: 53.5714px;
    top: 28.759px;
    left: 70px;
  }

  #IMAGE287 > .ladi-image > .ladi-image-background {
    width: 60px;
    height: 53.5714px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/314252_document_certificate_icon-20210922101035.png");
  }

  #IMAGE288 {
    width: 60px;
    height: 60px;
    top: 23.045px;
    left: 70px;
  }

  #IMAGE288 > .ladi-image > .ladi-image-background {
    width: 60px;
    height: 60px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/4230286_team_teamwork_users_icon-20210922101244.png");
  }

  #GROUP289 {
    width: 200px;
    height: 230px;
    top: 407px;
    left: 114px;
  }

  #GROUP290 {
    width: 200px;
    height: 230px;
    top: 152px;
    left: 114px;
  }

  #GROUP291 {
    width: 200px;
    height: 230px;
    top: 663px;
    left: 114px;
  }

  #GROUP292 {
    width: 200px;
    height: 230px;
    top: 917px;
    left: 114px;
  }

  #PARAGRAPH300 {
    width: 357px;
    top: 1190px;
    left: 25px;
  }

  #PARAGRAPH300 > .ladi-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-style: italic;
    text-align: center;
    line-height: 1.6;
  }

  #LINE308 {
    width: 107px;
    top: 73px;
    left: 156.5px;
  }

  #LINE308 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(4, 67, 178);
    border-right: 2px solid rgb(4, 67, 178);
    border-bottom: 2px solid rgb(4, 67, 178);
    border-left: 0px !important;
  }

  #LINE308 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #GROUP309 {
    width: 420px;
    height: 91px;
    top: 22px;
    left: -0.0399px;
  }

  #LINE310 {
    width: 100px;
    top: 100px;
    left: 161px;
  }

  #LINE310 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(44, 75, 159);
    border-right: 2px solid rgb(44, 75, 159);
    border-bottom: 2px solid rgb(44, 75, 159);
    border-left: 0px !important;
  }

  #LINE310 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #GROUP314 {
    width: 419px;
    height: 89px;
    top: 38px;
    left: 0px;
  }

  #LINE221 {
    width: 107px;
    top: 49px;
    left: 156.5px;
  }

  #LINE221 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #LINE221 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(20, 3, 204);
    border-right: 2px solid rgb(20, 3, 204);
    border-bottom: 2px solid rgb(20, 3, 204);
    border-left: 0px !important;
  }

  #BUTTON_TEXT315 {
    width: 370px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT315 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT315 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON315 {
    width: 370px;
    height: 45px;
    top: 623.198px;
    left: 27.3136px;
  }

  #BUTTON315 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON315 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON_TEXT317 {
    width: 370px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT317 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT317 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON317 {
    width: 370px;
    height: 43px;
    top: 512.457px;
    left: 25px;
  }

  #BUTTON317 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON317 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #BUTTON_TEXT319 {
    width: 370px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT319 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT319 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON319 {
    width: 370px;
    height: 43px;
    top: 1269px;
    left: 25px;
  }

  #BUTTON319 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON319 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #SECTION321 {
    height: 716.453px;
  }

  #SECTION321 > .ladi-overlay {
    background: rgb(248, 248, 248);
    background: -webkit-linear-gradient(1600deg, rgb(248, 248, 248), rgb(246, 251, 255));
    background: linear-gradient(1600deg, rgb(248, 248, 248), rgb(246, 251, 255));
    opacity: 0.3;
  }

  #BOX322 {
    width: 390px;
    height: 688.3px;
    top: 10px;
    left: 15px;
  }

  #BOX322 > .ladi-box {
    background: rgb(255, 250, 91);
    background: -webkit-linear-gradient(180505deg, rgb(255, 250, 91), rgb(255, 75, 0));
    background: linear-gradient(180505deg, rgb(255, 250, 91), rgb(255, 75, 0));
    box-shadow: 0px 0px 15px -15px #000;
    -webkit-box-shadow: 0px 0px 15px -15px #000;
    border-style: solid;
    border-color: rgb(228, 228, 228);
    border-width: 1px;
    border-radius: 10px;
  }

  #GROUP232 {
    width: 235.754px;
    height: 626.984px;
    top: 157.605px;
    left: 93.238px;
  }

  #GROUP323 {
    width: 385px;
    height: 322.448px;
    top: 43.3px;
    left: 35px;
  }

  #IMAGE116 {
    width: 198.82px;
    height: 128.238px;
    top: 282.536px;
    left: 18.467px;
  }

  #IMAGE116 > .ladi-image > .ladi-image-background {
    width: 198.82px;
    height: 198.82px;
    top: -15.3847px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s500x500/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #IMAGE117 {
    width: 219.669px;
    height: 84.987px;
    top: 541.997px;
    left: 11.636px;
  }

  #IMAGE117 > .ladi-image > .ladi-image-background {
    width: 221.386px;
    height: 220.527px;
    top: -67.8178px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s550x550/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE118 {
    width: 210.252px;
    height: 129.34px;
    top: 0px;
    left: 11.636px;
  }

  #IMAGE118 > .ladi-image > .ladi-image-background {
    width: 218.297px;
    height: 129.34px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s550x450/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE119 {
    width: 212.482px;
    height: 94.2041px;
    top: 158.553px;
    left: 11.636px;
  }

  #IMAGE119 > .ladi-image > .ladi-image-background {
    width: 212.482px;
    height: 212.482px;
    top: -59.2333px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s550x550/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE120 {
    width: 235.754px;
    height: 78.0065px;
    top: 443.486px;
    left: 0px;
  }

  #IMAGE120 > .ladi-image > .ladi-image-background {
    width: 235.754px;
    height: 235.753px;
    top: -80.1406px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s550x550/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #LIST_PARAGRAPH324 {
    width: 328px;
    top: 112.448px;
    left: -38px;
  }

  #LIST_PARAGRAPH324 > .ladi-list-paragraph {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(5, 31, 77);
    font-size: 15px;
    line-height: 1.6;
  }

  #LIST_PARAGRAPH324 ul li {
    padding-bottom: 6px;
    padding-left: 30px;
  }

  #LIST_PARAGRAPH324 ul li:before {
    content: "";
    background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20%20viewBox%3D%220%200%2024%2024%22%20class%3D%22%22%20fill%3D%22rgba(5%2C%2031%2C%2077%2C%201.0)%22%3E%20%3Cpath%20d%3D%22M21%2C7L9%2C19L3.5%2C13.5L4.91%2C12.09L9%2C16.17L19.59%2C5.59L21%2C7Z%22%3E%3C%2Fpath%3E%20%3C%2Fsvg%3E");
    width: 17px;
    height: 17px;
    top: 4px;
  }

  #GROUP325 {
    width: 385px;
    height: 99px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE326 {
    width: 385px;
    top: 0px;
    left: 0px;
  }

  #HEADLINE326 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(5, 31, 77);
    font-size: 24px;
    text-align: left;
    line-height: 1.6;
  }

  #LINE327 {
    width: 100px;
    top: 80px;
    left: 0px;
  }

  #LINE327 > .ladi-line > .ladi-line-container {
    border-top: 2px solid rgb(5, 31, 77);
    border-right: 2px solid rgb(5, 31, 77);
    border-bottom: 2px solid rgb(5, 31, 77);
    border-left: 0px !important;
  }

  #LINE327 > .ladi-line {
    width: 100%;
    padding: 8px 0px;
  }

  #BUTTON_TEXT331 {
    width: 370px;
    top: 9px;
    left: 0px;
  }

  #BUTTON_TEXT331 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: bold;
    text-align: center;
    line-height: 1.6;
  }

  #BUTTON_TEXT331 > .ladi-headline:hover {
    color: rgb(10, 0, 112);
  }

  #BUTTON331 {
    width: 370px;
    height: 45px;
    top: 631.054px;
    left: 25px;
  }

  #BUTTON331 > .ladi-button > .ladi-button-background {
    background: #1b2150;
    background: -webkit-linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
    background: linear-gradient(40deg, #1b2150, rgb(44, 75, 159));
  }

  #BUTTON331 > .ladi-button {
    border-color: rgb(27, 16, 145);
    border-width: 2px;
    border-radius: 5px;
  }

  #IMAGE335 {
    width: 374.707px;
    height: 281.03px;
    top: 317.491px;
    left: 22.6465px;
  }

  #IMAGE335 > .ladi-image > .ladi-image-background {
    width: 374.707px;
    height: 281.03px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s700x600/5eccf0a3fe0845247513b20a/imac-blue-2-de-thi-20210923085703.png");
  }

  #GROUP337 {
    width: 347px;
    height: 267.677px;
    top: 33.521px;
    left: 25px;
  }

  #SECTION338 {
    height: 63px;
  }

  #SECTION338 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION338 > .ladi-section-background {
    background-color: rgb(5, 31, 77);
  }

  #HEADLINE339 {
    width: 391px;
    top: 21px;
    left: 20.9997px;
  }

  #HEADLINE339 > .ladi-headline {
    color: rgb(255, 255, 255);
    font-size: 12px;
    text-align: center;
    line-height: 1.2;
  }

  #SECTION340 {
    height: 258.52px;
  }

  #SECTION340 > .ladi-overlay {
    background-color: rgb(10, 0, 112);
    opacity: 0.9;
  }

  #SECTION340 > .ladi-section-background {
    background-size: cover;
    background-attachment: scroll;
    background-origin: content-box;
    background-image: url("@/assets/landing/uploads/images/380beead-cde1-45cc-b464-72893e246558.jpg");
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  #IMAGE197 {
    width: 264.309px;
    height: 169.737px;
    top: 344.752px;
    left: 1.2205px;
  }

  #IMAGE197 > .ladi-image > .ladi-image-background {
    width: 265.215px;
    height: 265.215px;
    top: -21px;
    left: -0.906px;
    background-image: url("@/assets/landing/s600x600/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #IMAGE196 {
    width: 57.2088px;
    height: 29.2696px;
    top: 3.73043px;
    left: 54.1289px;
  }

  #IMAGE196 > .ladi-image > .ladi-image-background {
    width: 255.765px;
    height: 255.765px;
    top: -99px;
    left: 0px;
    background-image: url("@/assets/landing/s400x350/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE195 {
    width: 51.6522px;
    height: 31.5652px;
    top: 0px;
    left: 0px;
  }

  #IMAGE195 > .ladi-image > .ladi-image-background {
    width: 54.1189px;
    height: 32.0654px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s400x350/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }
  #IMAGE194 {
    width: 46.9151px;
    height: 18.1509px;
    top: 9.82912px;
    left: 177.158px;
  }

  #IMAGE194 > .ladi-image > .ladi-image-background {
    width: 47.2818px;
    height: 47.0984px;
    top: -14.484px;
    left: 0px;
    background-image: url("@/assets/landing/s600x600/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE193 {
    width: 264.309px;
    height: 106.63px;
    top: 197.69px;
    left: 0px;
  }

  #IMAGE193 > .ladi-image > .ladi-image-background {
    width: 264.309px;
    height: 262.552px;
    top: -76.7221px;
    left: 0px;
    background-image: url("@/assets/landing/s600x600/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE350 {
    width: 46.9151px;
    height: 18.1509px;
    top: 9.82912px;
    left: 177.158px;
  }

  #IMAGE350 > .ladi-image > .ladi-image-background {
    width: 47.2818px;
    height: 47.0984px;
    top: -14.484px;
    left: 0px;
    background-image: url("@/assets/landing/s350x350/5eccf0a3fe0845247513b20a/download-2-20210920085106.png");
  }

  #IMAGE351 {
    width: 51.6522px;
    height: 31.5652px;
    top: 0px;
    left: 0px;
  }

  #IMAGE351 > .ladi-image > .ladi-image-background {
    width: 54.1189px;
    height: 32.0654px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s400x350/5eccf0a3fe0845247513b20a/honda-logo-20210920084936.jpg");
  }

  #IMAGE352 {
    width: 57.2088px;
    height: 29.2696px;
    top: 3.73043px;
    left: 54.1289px;
  }

  #IMAGE352 > .ladi-image > .ladi-image-background {
    width: 65.8611px;
    height: 65.8612px;
    top: -18.0939px;
    left: -3.99131px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/146983259_470953157644083_5952808177623982164_n-20210920085035.png");
  }

  #IMAGE353 {
    width: 54.1981px;
    height: 17.9331px;
    top: 9.82912px;
    left: 118.93px;
  }

  #IMAGE353 > .ladi-image > .ladi-image-background {
    width: 54.1981px;
    height: 54.1982px;
    top: -18.4237px;
    left: 0px;
    background-image: url("@/assets/landing/s400x400/5eccf0a3fe0845247513b20a/558b23447b2fa5ee53cc508da516c608-20210920085222.png");
  }

  #IMAGE354 {
    width: 48.2188px;
    height: 31.1009px;
    top: 1.67712px;
    left: 229.842px;
  }

  #IMAGE354 > .ladi-image > .ladi-image-background {
    width: 48.5058px;
    height: 48.2187px;
    top: -3.73115px;
    left: 0px;
    background-image: url("@/assets/landing/s350x350/5eccf0a3fe0845247513b20a/sailun-20210920084955.png");
  }

  #GROUP349 {
    width: 278.061px;
    height: 33px;
    top: 24px;
    left: 420px;
    display: none !important;
  }

  #IMAGE355 {
    width: 372.711px;
    height: 273.153px;
    top: 353.748px;
    left: 22.289px;
  }

  #IMAGE355 > .ladi-image > .ladi-image-background {
    width: 372.711px;
    height: 273.153px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s750x650/5eccf0a3fe0845247513b20a/lap-trang-20210924051936.png");
  }

  #IMAGE333 {
    width: 400px;
    height: 300px;
    top: 26.6212px;
    left: -411px;
    display: none !important;
  }

  #IMAGE333 > .ladi-image > .ladi-image-background {
    width: 400px;
    height: 300px;
    top: 0px;
    left: 0px;
    background-image: url("https://w.ladicdn.com/s750x650/5eccf0a3fe0845247513b20a/lap-trang-danh-gia-nhan-su-20210924052206.png");
  }

  #IMAGE341 {
    width: 205px;
    height: 49.0196px;
    top: 21px;
    left: 108.721px;
  }

  #IMAGE341 > .ladi-image > .ladi-image-background {
    width: 205px;
    height: 50.2282px;
    top: 0px;
    left: 0px;
    background-image: url("@/assets/landing/s550x400/5eccf0a3fe0845247513b20a/testcenter-001_w-20210920071701.png");
  }

  #HEADLINE342 {
    width: 358px;
    top: 96.02px;
    left: 24.0328px;
  }

  #HEADLINE342 > .ladi-headline {
    font-family: "SF-Pro-Text-Bold.otf";
    color: rgb(255, 255, 255);
    font-size: 17px;
    font-weight: bold;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP343 {
    width: 398px;
    height: 40px;
    top: 165.52px;
    left: 17.0328px;
  }

  #SHAPE344 {
    width: 22.5469px;
    height: 22.5469px;
    top: 1px;
    left: 0px;
  }

  #SHAPE344 svg:last-child {
    fill: rgb(255, 255, 255);
  }

  #HEADLINE345 {
    width: 365px;
    top: 1px;
    left: 33px;
  }

  #HEADLINE345 > .ladi-headline {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP346 {
    width: 325px;
    height: 22.5469px;
    top: 217.973px;
    left: 17.0328px;
  }

  #SHAPE347 {
    width: 22.5469px;
    height: 22.5469px;
    top: 1px;
    left: 0px;
  }

  #SHAPE347 svg:last-child {
    fill: rgb(255, 255, 255);
  }

  #HEADLINE348 {
    width: 292px;
    top: 2px;
    left: 33px;
  }

  #HEADLINE348 > .ladi-headline {
    font-family: "SF-Pro-Text-Regular.otf";
    color: rgb(255, 255, 255);
    font-size: 14px;
    text-align: left;
    line-height: 1.4;
  }

  #GROUP192 {
    width: 265.53px;
    height: 732.202px;
    top: 133.223px;
    left: 77.2353px;
  }
}
</style>
