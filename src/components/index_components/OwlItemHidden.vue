<template>
    <div class="owl-item mt-3">
      <div class="card card-item">
        <router-link target="_blank" :to="{path:'/blog'}">
          <slot name="img"></slot>
        </router-link>
        <div class="card-body">
          <div class="title-post">
            <h3 class="card-title">
              <router-link :to="{path:'/blog'}" target="_blank" ><slot name="title"></slot></router-link>
            </h3>
          </div>
          <div class="short-post">
            <slot name="description"></slot>
          </div>
          <div class="more text-center mt-3">
            <div class="button-more">
              <router-link :to="{path:'/blog'}"
                target="_blank"
                style="color: #fff"
                class="btn btn-primary border-0 font-weight-normal"
              >
                Đọc thêm
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

