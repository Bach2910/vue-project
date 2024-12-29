<template>
  <div class="custom-select" style="width:120px">
    <div class="selected-option" id="selected-text" @click="toggleOptions">
      <img :src="selectedFlag" alt="selected-flag" class="option-img">
      <span>{{ selectedLanguage }}</span>
      <span class="arrow">&#9662;</span>
    </div>
    <!-- Hiển thị danh sách tùy chọn khi optionsVisible = true -->
    <div class="option-list" v-show="optionsVisible">
      <div class="option" @click="selectOption('ENG', '/en')">
        <img src="/src/assets/country/uk_flag.png" alt="ENG" class="option-img">
        <span>ENG</span>
      </div>
      <div class="option" @click="selectOption('VIE', '/vn')">
        <img src="/src/assets/country/uk_flag.png" alt="VIE" class="option-img">
        <span>VIE</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Biến để lưu trạng thái chọn quốc gia và hiển thị các tùy chọn
const selectedLanguage = ref('ENG');
const selectedFlag = ref('/src/assets/country/uk_flag.png');
const optionsVisible = ref(false);
const router = useRouter();

// Hàm toggle để hiển thị hoặc ẩn danh sách lựa chọn
const toggleOptions = () => {
  optionsVisible.value = !optionsVisible.value;
};

// Hàm để xử lý khi người dùng chọn quốc gia
const selectOption = (language, route) => {
  selectedLanguage.value = language;
  selectedFlag.value = language === 'ENG'
    ? '/src/assets/country/uk_flag.png'
    : '/src/assets/country/uk_flag.png';
  optionsVisible.value = false;
  router.push(route);
};
</script>
