<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router';

const selectedLanguage = ref('ENG');
const selectedFlag = ref('/src/assets/country/uk_flag.png');
const optionsVisible = ref(false);
const router = useRouter();
const toggleOptions = () => {
  optionsVisible.value = !optionsVisible.value;
};
const selectOption = (language, route) => {
  selectedLanguage.value = language;
  selectedFlag.value = language === 'ENG'
    ? '/src/assets/country/uk_flag.png'
    : '/src/assets/country/vietnam_flag.jpeg';
  optionsVisible.value = false;
  router.push(route);
};
</script>
<template>
  <div class="country mb-5 mb-md-5">
    <div class="custom-select" style="width:120px">
      <div class="selected-option" id="selected-text" @click="toggleOptions">
        <img :src="selectedFlag" alt="selected-flag" class="option-img">
        <span>{{ selectedLanguage }}</span>
        <span class="arrow">&#9662;</span>
      </div>
      <!-- Hiển thị danh sách tùy chọn khi optionsVisible = true -->
      <div class="option-list" v-show="optionsVisible">
        <div class="option" @click="selectOption('ENG', '/forget-password')">
          <img src="/src/assets/country/uk_flag.png" alt="ENG" class="option-img">
          <span>ENG</span>
        </div>
        <div class="option" @click="selectOption('VIE', '/forget-password/vn')">
          <img src="/src/assets/country/vietnam_flag.jpeg" alt="VIE" class="option-img">
          <span>VIE</span>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center mb-2 mb-md-4"><img class="img-responsive"
                                             src="/src/assets/logo/new_logo.png" alt="icon">
  </div>
  <div class="text-center mb-2 mb-md-4 ">
    <h2 class="auth-title">Quên mật khẩu</h2>
  </div>
  <form action method="POST" role="form">
    <div class="card-body p-0">
      <div class="note-pass w-100 text-left">
        Nhập email dùng để đăng ký tài khoản, hệ thống sẽ gửi
        thông tin để thiết lập lại mật khẩu.
      </div>
      <div class="email">
        <span class="form-icon">
                     <i class="bi bi-envelope"></i>
                </span>
        <input type="email" class="form-control" id="email" placeholder="Email">
      </div>
      <div data-sitekey="6LcPcj4gAAAAANx3PcPgkvA4ZE0Fk8sKlwH8kVdF" data-size="normal" data-theme="light"
           data-badge="bottomright" data-tabindex="0" data-callback="recaptchaSuccessCallback"
           data-expired-callback="recaptchaExpiredCallback" data-error-callback="recaptchaErrorCallback"
           class="g-recaptcha">
        <div style="width: 304px; height: 78px;">
          <div>
            <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-i1kspycse71w"
                    frameborder="0" scrolling="no"
                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                    src="https://www.recaptcha.net/recaptcha/api2/anchor?ar=1&amp;k=6LcPcj4gAAAAANx3PcPgkvA4ZE0Fk8sKlwH8kVdF&amp;co=aHR0cHM6Ly9hcHAudGVzdGNlbnRlci52bjo0NDM.&amp;hl=vi&amp;v=xds0rzGrktR88uEZ2JUvdgOY&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=w5ioyq77063f"></iframe>
          </div>
          <textarea id="g-recaptcha-response-2" name="g-recaptcha-response" class="g-recaptcha-response"
                    style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
        </div>
        <iframe style="display: none;"></iframe>
      </div>
      <div class="login-container">
        <button class="topCv-login-button">Xác nhận</button>
        <div class="register-link">
          Bạn đã nhớ lại mật khẩu <router-link :to="{name:'loginVN'}">Đăng nhập</router-link>
        </div>
      </div>
    </div>
  </form>
</template>
<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.row {
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  height: auto;
}

.slide {
  height: 100%;
  background: #f0f6ff !important;
}

.left-div {
  width: 50%;
  padding-right: 40px;
}

.login-line {
  padding: 10px;
  display: inline-block;
  position: relative;
  top: 0.7rem;
  background: #fff;
  width: 100%;
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.login-container .topCv-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f8ff; /* Tùy chỉnh màu nền */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100%; /* Điều chỉnh chiều rộng của logo */
  color: #1a4c9d;
  font-weight: bold;
}

.login-container .topCv-logo img {
  width: 50px; /* Giảm kích thước logo */
  height: auto;
}

.login-container .topCv-login-button {
  background-color: #2C4A9F;
  font-weight: bold;
  color: white;
  padding: 5px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%; /* Điều chỉnh chiều rộng của button */
  text-align: center;
  margin: 30px 0 30px 0;
}

.login-container .topCv-login-button:hover {
  background-color: #1e3a6f; /* Màu khi hover */
}

.login-container .line {
  width: 100%;
  margin-bottom: 10px;

}

.login-container .line .or-separator {
  position: relative;
  top: -14px;
  font-size: 14px;
  color: #888;
  margin: 30px 0 30px 0;
  z-index: 1;
  background-color: white;
  padding: 5px;
}

.login-container .register-link {
  font-size: 14px;
  color: #333;
  margin: 30px 0 30px 0;
}

.login-container .register-link a {
  text-decoration: none;
  color: #2C4A9F;
  font-weight: bold;
}

.country {
  margin-bottom: 100px;
  display: flex;
  justify-content: right; /* Đẩy select sang bên phải */
}

.country .custom-select {
  position: relative;
  width: 120px;
  cursor: pointer;
  padding: 0 !important;
  border: 0 !important;
}

.country .selected-option {
  width: 100%;
  border-radius: 20px;
  display: flex;
  padding: 10px 5px 5px 10px;
  background-color: white;
  border: 1px solid #ccc;
  justify-content: space-around;
  align-items: center;
}

.country .selected-option .arrow {
  font-size: 14px;
  color: #333;
  transition: transform 0.3s; /* Thêm hiệu ứng cho mũi tên */
}

.country .option-list {
  display: block;
  position: absolute;
  width: 100%;
  border-radius: 10px;
  background-color: white;
  border: 1px solid #2C4A9F;
  z-index: 100;
  justify-content: space-around;
}

.country .option {
  padding: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.country .option-img {
  width: 1.75rem !important;
  height: 1.25rem !important;
  margin-right: 1rem;
}

.country .option:hover {
  background-color: #f0f0f0;
  border-radius: 10px;
}

.form-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.form-control {
  padding-left: 40px;
}

.name {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.phone {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.company {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.email {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.password-again-container {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.password-container {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}

.right-div p {
  width: 100%;
  max-width: 300px;
  color: #718096;
  font-size: 13px;
}

input[type=password], input[type=text], input[type=email] {
  border-radius: 0;
  border: none !important;
  border-bottom: 2px solid #d3d5d7 !important;
  background: #fff;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1rem;
  padding: 0.75rem 0.75rem 0.75rem 3rem;
  height: 3rem;
}

.eye-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.right-div .btn-primary {
  position: relative;
  width: 100%;
  background-color: #1a4c9d;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 20px;
}

.carousel {
  position: relative;
  text-align: center;
  height: 100%;
  width: 100%;
}

.carousel-item {
  padding: 40px;
}

.carousel-item .item-heading {
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.875rem;
  color: #05216f;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.carousel-item .item-text {
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.75rem;
  text-align: justify;
}

.carousel .carousel-indicators button {
  background-color: #1a4c9d;
}

.note {
  font-weight: 700;
  margin-left: 200px;
}

.forgot {
  align-items: start;
  margin-bottom: 10px;
}

.forgot a {
  font-size: 15px;
  text-decoration: none;
  font-weight: 700 !important;
  color: #2B4AA0;
}

.forgot a:hover {
  text-decoration: underline;
}

.btn-topcv {
  width: 100%;
  height: 100px;
  background: #f0f6ff;
  border-radius: 0.24rem;
  text-align: center;
  text-transform: none;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  font-size: 1rem;
  line-height: 1.25rem;
  min-height: 2.5rem;
  transition: background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s;
  color: #2c4a9f;
}

.title h3 {
  font-weight: 600 !important;
  font-size: 2rem !important;
  line-height: 2.375rem !important;
  color: #0a2161;
  margin-left: 100px;
  text-align: center;
  margin-right: 100px;
}

form {
  display: block;
  margin-top: 0;
  unicode-bidi: isolate;
}

.note-pass {
  color: rgb(149, 155, 165);
  width: 100%;
  text-align: left;
  font-size: 1rem !important;
  margin-bottom: 10px;
  font-weight: lighter;
}

.box-action {
  padding: 4.25rem 8.348rem;
  text-align: center;
}

@media (max-width: 414px) {
  .box-action {
    display: block;
    padding: 3rem 1rem;
  }

  .box-slide {
    display: none;
  }
}

@media only screen and (max-width: 576px) {
  .box-slide {
    display: none;
  }

  .box-action {
    display: block;
    height: 100%;
    padding: 3rem 1rem;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1024px) {
  .box-action {
    padding: 3rem 1rem;
  }

  .box-slide {
    padding: 3rem 1rem;
  }
}

@media only screen and (max-width: 1024px) {
  .img-responsive {
    width: 80px;
  }
}

@media only screen and (min-width: 768px) {
  .carousel-item {
    padding: 5rem 1.5rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .box-action {
    padding: 2rem 0;
  }

  .box-slide {
    padding: 2rem 0;
  }
}

.box-slide .carousel-indicators {
  position: absolute;
  bottom: -100px;
}

.box-slide .carousel-indicators li {
  background-color: #2B4AA0;
  width: 24px;
  height: 8px;
  border-radius: 4px;
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid transparent;
  border-radius: 6px;
}

.carousel-controls {
  position: absolute;
  top: -100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

[role=button] {
  cursor: pointer;
}

.carousels-control-next-icon, .carousels-control-prev-icon {
  background: #fff;
  border-radius: 50%;
  width: 3.25rem;
  height: 3.25rem;
  padding: 1rem 1.25rem;
}

.carousels-control-next-icon i, .carousels-control-prev-icon i {
  width: 0.813rem;
  height: 1.25rem;
  line-height: 1.25rem;
  color: #000;
}

.auth-title {
  font-weight: 600 !important;
  font-size: 2rem !important;
  line-height: 2.375rem !important;
  color: #0a2161;
}
</style>
