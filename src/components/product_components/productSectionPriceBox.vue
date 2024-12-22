<template>
  <div class="product-section-price-box-header" style="height:197.597px;">
    <slot name="img"></slot>
    <p class="text-uppercase mt-2 font-weight-500 price-color"><slot name="status"></slot></p>
    <h3 class="font-weight-bold price-color"><slot name="price"></slot></h3>
    <p class="price-color"><slot name="currency"></slot></p>
  </div>
  <hr>
  <slot name="p"></slot>
</template>
<script setup lang="ts">
</script>
