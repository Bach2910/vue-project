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
<template>
  <img class="card-img-top"
       :src="imageSrc" :alt="imageAlt">
</template>

