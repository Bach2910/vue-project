<template>
  <div class="image-item">
    <img class="w-100" :src="imageSrc" alt="Homepage">
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  imageSrc: {
    type: String,
    required: true
  }
});
</script>
