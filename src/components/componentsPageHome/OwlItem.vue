<template>
  <slot name="OwlItem">
    <div class="owl-item" :style="card">
      <div class="card card-item">
        <a target="_blank"
           href="">
          <img class="card-img-top"
               src="@/assets/paying-1438142_1920.jpeg"
               alt="/">
        </a>
        <div class="card-body">
          <div class="title-post">
            <h3 class="card-title">
              <a target="_blank" href="/">Chia sẻ phần mềm tạo bài test nhân viên QC chuyên nghiệp nhất</a>
            </h3>
          </div>
          <div class="short-post">
            Bộ phận QC nói chung và nhân viên QC đóng vai trò khá quan trọng, giúp thúc đẩy sự phát triển của doanh nghiệp, thông qua việc đảm bảo về chất lượng sản phẩm. Vậy, nhân viên QC là gì? Và đâu là phần mềm giúp thực hiện các bài test nhân viên QC hiệu quả. Mời bạn cùng Testcenter khám phá trong bài viết dưới đây nhé.'
          </div>
          <div class="more text-center mt-3">
            <div class="button-more">
              <a target="_blank" style="color: #fff"
                 href="/"
                 class="btn btn-primary border-0 font-weight-normal">
                Đọc thêm
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </slot>
</template>
<style>
.owl-item .card-item {
  box-shadow: none;
  padding: 0;
  border-color: #EEEEEE;
  font-weight: 400;
}
.card {
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.02) !important;
  padding: 2px !important;
}
</style>
<script>
export default {

  data() {
    return {
      card:{
        width:'360px',
        marginRight:'15px'
      }
    }
  }
}
</script>