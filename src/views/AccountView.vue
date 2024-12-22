<template>
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
      <input type="password" class="form-control" id="password" placeholder="Password">
      <i id="togglePassword" class="fas fa-eye eye-icon"></i>
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
      <div class="forgot"><a href="/">Forgot Password</a></div>
    </div>
    <div class="login-container">
      <button class="topCv-login-button">Login</button>
      <div class="line">
        <hr class="mb-0">
        <span class="or-separator">Or</span>
      </div>
      <div class="topCv-logo">
        <img src="src/assets/card/topcv-logo-4.png" alt="TopCV Logo"/>
        <span>Login with TopCV</span>
      </div>
      <div class="register-link">
        Do not have an account? <a href="/">Register</a>
      </div>
    </div>
  </div>
</template>
