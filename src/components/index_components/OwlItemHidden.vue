<template>
  <div class="owl-carousel owl-theme" ref="owlCarousel">
    <div class="owl-item mt-3">
      <div class="card card-item">
        <a target="_blank" href="/public">
          <slot name="img"></slot>
        </a>
        <div class="card-body">
          <div class="title-post">
            <h3 class="card-title">
              <a target="_blank" href="/public"><slot name="title"></slot></a>
            </h3>
          </div>
          <div class="short-post">
            <slot name="description"></slot>
          </div>
          <div class="more text-center mt-3">
            <div class="button-more">
              <a
                target="_blank"
                style="color: #fff"
                href="/public"
                class="btn btn-primary border-0 font-weight-normal"
              >
                Đọc thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";

const owlCarousel = ref(null);

onMounted(() => {
  $(owlCarousel.value).owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
</script>
