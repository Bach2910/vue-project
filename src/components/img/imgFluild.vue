<template>
    <img :src="imageSrc"
    alt="Image 1"
    class="d-block mx-auto w-100 img-fluid animation">
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
});
</script>

