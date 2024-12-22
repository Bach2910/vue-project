<template>
  <div class="row">
    <div class="col-md-2 col-2 d-flex align-items-start mt-2 ml-3 p-md-0 pl-2">
      <slot name="img"></slot>
    </div>
    <div class="col-md-9 col-9 p-md-0">
      <p class="product-section-benefit-list-title"><slot name="title"></slot></p>
      <p>
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
