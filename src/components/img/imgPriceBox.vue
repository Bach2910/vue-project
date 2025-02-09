<template>
    <img ref="image" :src="imageSrc" class="hidden-img" />
</template>
<script setup>
import {defineProps, onMounted, ref} from 'vue';
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
});
const image = ref(null);
onMounted(() => {
  const showUp = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.5 }
  );

  if (image.value) {
    showUp.observe(image.value);
  }
});
</script>
