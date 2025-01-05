<script setup>
</script>
<template>
  <div class="carousel-item">
    <slot name="img"></slot>
    <div class="title">
      <div class="link-button">
        <router-link to="" class="button-link" type="submit"><slot name="title"></slot></router-link>
      </div>
      <router-link to=""><slot name="description"></slot></router-link>
    </div>
  </div>
</template>
<style scoped>
@media (max-width: 767px) {
  .title {
    font-family: Tahoma, Verdana, Geneva, Verdana, sans-serif !important;
    padding-bottom: 30px;
  }
}
@media (max-width: 1024px) {
  .title{
    font-size: 20px!important;
  }
}
.title {
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 37px;
  color: white;
  text-align: left;
  line-height: normal;
}
.title .button-link {
  padding: 2px;
  margin-bottom: 20px;
  font-size: 15px;
  background-color: red;
  text-align: center;
  border-radius: 5px;
}
.title a {
  color: inherit; /* Giữ nguyên màu chữ của phần tử cha */
  text-decoration: none; /* Loại bỏ gạch chân */
}
.title a:hover, .title a:focus {
  text-decoration: none; /* Đảm bảo không có gạch chân khi hover hoặc focus */
  color: ivory;
}
</style>
