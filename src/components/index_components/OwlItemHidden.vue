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

