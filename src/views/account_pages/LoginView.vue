<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
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
  setTimeout(() => {
    router.push(route);
  }, 0);
};
const password = ref('')
const showPassword = ref(false)
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
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
        <div class="option" @click="selectOption('ENG', '/login')">
          <img src="/src/assets/country/uk_flag.png" alt="ENG" class="option-img">
          <span>ENG</span>
        </div>
        <div class="option" @click="selectOption('VIE', '/login/vn')">
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
    <h2 class="auth-title">Login</h2>
  </div>
  <form action method="POST" role="form">
    <div class="card-body p-0">
      <div class="email form-group custom-input text-left">
        <span class="form-icon">
                     <i class="bi bi-envelope"></i>
                </span>
        <input type="email" class="form-control" id="email" placeholder="Email">
      </div>
      <div class="password-container form-group custom-input text-left">
        <span class="form-icon">
                     <i class="bi bi-lock"></i>
                </span>
        <input
          :type="showPassword ? 'text' : 'password'"
          class="form-control"
          id="password"
          placeholder="Password"
          v-model="password"
        />
        <i
          :class="showPassword ? 'fas fa-eye eye-icon' : 'fas fa-eye-slash eye-icon'"
          @click="togglePassword"
          id="togglePassword"
        ></i>
      </div>
      <div class=" mt-4 d-flex justify-content-between mb-3">
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
        <div class="forgot"><router-link :to="{name:'forgetPassword'}">Forget password</router-link></div>
      </div>
      <div class="login-container">
        <button class="topCv-login-button">Login</button>
        <div class="line">
          <hr class="mb-0">
          <span class="or-separator">Or</span>
        </div>
        <div class="topCv-logo">
          <img src="/src/assets/card/topcv-logo-4.png" alt="TopCV Logo"/>
          <span>Login with TopCV</span>
        </div>
        <div class="register-link">
          Do you have a account? <router-link :to="{name:'register'}">Register</router-link>
        </div>
      </div>
    </div>
  </form>
</template>
<style>
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
  margin-top: 20px;
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
.line{
  top:-20px ;
}
.login-container .line {
  width: 100%;
  margin-bottom: 10px;
  border: 0 !important;
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
  margin: 20px 0 30px 0;
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
}
.custom-select{
  padding:0;
  border:0;
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
.password-container input[type=password] .password-again-container {
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


[role=button] {
  cursor: pointer;
}


.carousels-control-next-icon i, .carousels-control-prev-icon i {
  width: 0.813rem;
  height: 1.25rem;
  line-height: 1.25rem;
  color: #000;
}


/*# sourceMappingURL=account.css.map */

</style>
