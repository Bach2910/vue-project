<template>
    <img :src="imageSrc"/>
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
