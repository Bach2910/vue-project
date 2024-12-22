<template>
  <div class="image-container">
    <img :src="imageSrc" :alt="imageAlt" class="img-fluid"/>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    required: true
  }
});
</script>
