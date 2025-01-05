<script setup>
import { defineProps } from 'vue';
defineProps({
  imageSrc: {
    type: String,
    required: true
  }
});
</script>

<template>
  <img
    :src="imageSrc"
    alt="Micromanagement image" class="animation">
</template>

<style scoped>

</style>
