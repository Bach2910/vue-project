<template>
  <div class="product-section-function-right-box col-12 col-md-10 p-2 mb-4">
    <div class="row pt-3">
      <div class="col-md-1 col-2 d-flex align-items-start mt-2 ml-3 p-0 pl-2">
        <slot name="img"></slot>
      </div>
      <div class="col-md-9 col-9">
        <p class="product-section-function-right-box-title"><slot name="title"></slot></p>
        <p>
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
</script>
