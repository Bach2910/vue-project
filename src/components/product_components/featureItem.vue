<template>
  <div class="d-flex">
    <img src="@/assets/check.png" class="arrow-icon"/>
    <div>
      <p class="font-weight-bold mb-1">
        <slot name="font"></slot>
      </p>
      <p class="item-content-value">
        <slot name="item"></slot>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
