<template>
  <div class="row">
    <div class="col-lg-6 col-md-12 col-sm-12 container-content">
      <div class="features-box">
        <div class="d-flex flex-column align-items-center">
            <div class="title">
              <slot name="title"></slot>
            </div>
            <div class="description">
              <slot name="description"></slot>
            </div>
            <slot name="img"></slot>
          </div>
        </div>
    </div>
    <div class="col-lg-6 col-md-12 col-sm-12 container-content">
      <div class="features-box">
        <div class="d-flex flex-column align-items-center">
          <div class="title">
            <slot name="title2"></slot>
          </div>
          <div class="description">
            <slot name="description2"></slot>
          </div>
          <slot name="img2"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
