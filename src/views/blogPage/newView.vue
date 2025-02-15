<template>
  <div>
    <div class="people-header-title container">
      <div class="headerBlog-container">
        <div class="link">
          <span class="nav-link"><a href="#">Trang chủ</a>> Tin tức
 </span>
        </div>
        <div class="dropdown">
          <button class="dropdown-button">
            MỚI NHẤT
            <span class="arrow">▼</span>
          </button>
          <div class="dropdown-menu">
            <a href="#">Mới nhất</a>
            <a href="#">Tin tiêu biểu</a>
            <a href="#">Phổ biến nhất</a>
            <a href="#">Xem nhiều theo tuần</a>
            <a href="#">Bảng Điểm Đánh Giá</a>
            <a href="#">Ngẫu nhiên</a>
          </div>
        </div>
      </div>
      <div class="td-category-title">
        <h1 class="td-page-title">Tin tức
        </h1>
        <div class="description">
          <p>Testcenter.vn – Nơi cập nhật những tin tức, xu hướng mới nhất về mô hình vận hành, cách thức quản trị và thông tin về các hoạt động của doanh nghiệp thành công trong và ngoài nước.</p>
        </div>
      </div>
    </div>
    <div class="td-main-content-wrap td-container-wrap">
      <div class="td-container">
        <div class="td-pb-row">
          <div class="td-pb-span8 td-main-content">
            <div class="td-ss-main-content">
              <div v-for="(news, index) in paginatedArticles" :key="index"
                   class="td_module_11 mt-5 td_module_wrap td-animation-stack">
                <div class="td-module-thumb mb-2">
                  <a :href="news.url" rel="bookmark" class="td-image-wrap" :title="news.title">
                    <img class="entry-thumb animation" :src="news.image_url" :alt="news.title" width="324"
                         height="235"/>
                  </a>
                </div>
                <div class="item-details">
                  <h3 class="entry-title td-module-title mb-2">
                    <a :href="news.url" rel="bookmark">{{ news.title }}</a>
                  </h3>
                  <div class="module-meta-info mb-2">
                    <router-link to="/blog/tin-tuc" class="td-post-category">Tin tức</router-link>
                  </div>
                  <div class="excerpt mb-3">
                    {{ news.excerpt }}
                  </div>
                  <div class="read-more">
                    <router-link to="/blog/lean-la-gi" class="td-post-category" >Xem thêm</router-link>
                  </div>
                </div>
              </div>
              <nav class="pagination-footer" aria-label="Page pagination navigation example">
                <ul class="pagination justify-content-start">

                  <li class="page-item" :class="{ active: currentPage === 1 }">
                    <button class="page-link" @click="changePage(1)">1</button>
                  </li>
                  <li class="page-item" :class="{ active: currentPage === 2 }">
                    <button class="page-link" @click="changePage(2)">2</button>
                  </li>
                  <li class="page-item" :class="{ disabled: currentPage === totalPages }">
                    <button class="page-link" @click="changePage(currentPage + 1)"
                            :disabled="currentPage === totalPages"> >
                    </button>
                  </li>
                </ul>
                <div class="page-info">
                  Trang {{ currentPage }} của {{ totalPages }}
                </div>
              </nav>
              <div class="search-box">
                <input v-model="searchQuery" type="text" placeholder="Tìm kiếm bài viết"/>
                <button @click="performSearch">Tìm kiếm</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue';

const news = ref([
  {
    title: 'Reference check là gì? 4 điểm cần lưu ý khi kiểm tra tham chiếu 6',
    image_url: 'https://www.testcenter.vn/blog/wp-content/uploads/2023/06/reference-check-la-gi-testcenter-324x235.jpg',
    excerpt: 'Reference check là khâu vô cùng quan trọng trong quá trình tuyển dụng...'
  },
  {
    title: '5 nhóm chỉ số nhất định phải có trong KPI cho Content Marketing',
    image_url: 'https://www.testcenter.vn/blog/wp-content/uploads/2023/06/reference-check-la-gi-testcenter-324x235.jpg',
    excerpt: 'Trong thế giới kỹ thuật số ngày nay, Content Marketing đã trở thành một phần quan trọng của chiến lược tiếp thị. Tuy nhiên, để đánh giá đúng hiệu suất của chiến dịch Content...'
  },
  {
    title: 'Mẫu bài test cho nhân viên chăm sóc khách hàng mới nhất',
    image_url: 'https://www.testcenter.vn/blog/wp-content/uploads/2023/06/bai-test-cho-nhan-vien-cham-soc-khach-hang-testcenter-324x235.jpg',
    excerpt: 'Sử dụng Bài test cho nhân viên chăm sóc khách hàng là cách hiệu quả giúp nhà tuyển dụng chọn lọc được những người có năng lực và phù hợp với nhu cầu của...'
  },
  {
    title: 'Bí quyết tạo bài test nhân viên bán hàng giúp chiêu mộ người tài',
    image_url: 'https://www.testcenter.vn/blog/wp-content/uploads/2023/06/bai-test-nhan-vien-ban-hang-testcenter-324x235.jpg',
    excerpt: 'Cho ứng viên thực hiện bài test nhân viên bán hàng là bước quan trọng giúp nhà tuyển dụng chọn lọc được người tài năng và phù hợp. Trong bài viết này, Testcenter xin...'
  },
  {
    title: 'Bí quyết tạo bài test tuyển dụng nhân viên hành chính nhanh và chuẩn',
    image_url: 'https://www.testcenter.vn/blog/wp-content/uploads/2023/06/bai-test-tuyen-dung-nhan-vien-hanh-chinh-testcenter-324x235.jpg',
    excerpt: 'Đưa ra các bài test tuyển dụng nhân viên hành chính là bước quan trọng giúp công ty chọn lọc được người tài và phù hợp với văn hóa doanh nghiệp. Trong bài viết...'
  },
  {
    title: '25+ lời nhận xét cho nhân viên thử việc công tâm',
    image_url: 'https://www.testcenter.vn/blog/wp-content/uploads/2023/07/nhan-xet-5-324x235.jpg',
    excerpt: 'Đưa ra lời nhận xét cho nhân viên thử việc được xem là khâu giữ vai trò vô cùng quan trọng trong công tác quản trị nhân sự. Vậy, nhà quản lý phải nhận...'
  },
]);
const searchQuery = ref('');

const performSearch = () => {
  if (searchQuery.value) {
    alert(`Tìm kiếm bài viết với từ khóa: ${searchQuery.value}`);
    const filteredArticles = news.value.filter(news =>
      news.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    console.log(filteredArticles);
  }
};
const currentPage = ref(1);
const newsPerPage = 3; // Số bài viết hiển thị trên mỗi trang
const totalPages = computed(() => Math.ceil(news.value.length / newsPerPage));
const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * newsPerPage;
  const end = start + newsPerPage;
  return news.value.slice(start, end);
});

// Chuyển trang
const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return;
  currentPage.value = page;
};
</script>
<style scoped>
.td-header .tdc-row {
  padding: 0 !important;
}

.td_module_wrap {
  position: relative;
}

.form-logo img {
  padding: 3px 0;
  position: relative;
  vertical-align: middle;
  max-height: 48px;
  width: auto;
}

.item-details {
  margin-left: 20px;
}

#navbarSupportedContent {
  justify-content: space-between;
  align-items: center;
}

.form-menu {
  display: block;
}

.form-menu a {
  color: black;
}

.form-menu a:hover {
  color: black;
  text-decoration: none;
}

li {
  background: 0 0;
  list-style: none;
  line-height: 1.6;
  margin: 0;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

th {
  background-color: blue;
}

*, :after, :before {
  box-sizing: border-box;
}

.card {
  align-items: center;
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  overflow: hidden;
}

.card .link {
  position: relative;
  top: -20px;
  left: 0;
  background-color: red;
  text-align: center;
  width: 50px;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

.pagination-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.card-main-footer {
  width: 100%;
}

.card-body .link {
  display: block;
}

.card-body-footer {
  display: flex;
  padding: 20px 0 0 0;
  gap: 20px;
  border-radius: 2px;
}

.card-main-footer img {
  display: flex;
  align-items: center;
  width: 100%;
}

.next-button {
  margin-top: 10px;
  font-size: 10px;
  color: gray;
  gap: 10px;
}

.end-first {
  display: flex;
  gap: 3px;
}

.end-first button {
  font-size: 10px;
}

.tag {
  font-size: 12px;
  border-radius: 1px;
  color: white;
  background-color: black;
  font-weight: bolder;
  padding: 5px;
}

i {
  font-size: 12px;
  margin-bottom: 10px;
}

.bolder {
  font-weight: bolder;
}

.high-light {
  color: #ADD8E6;
  font-weight: bolder;
}

h6 {
  font-size: 16px;
  font-weight: lighter;
}

.button-inform {
  display: flex;
  gap: 5px;
  margin: 30px 0 20px 0;
  width: 300px;
}

.button-inform span {
  width: 100px;
  padding: 5px;
  align-items: center;
  text-align: center;
  color: white;
  border-radius: 3px;
}

.button-inform i {
  font-size: 20px;
}

.button-inform .facebook {
  background: #3B5998;
}

.button-inform .twitter {
  background-color: #0a8ed2;
}

.button-inform .pinterest {
  background-color: red;
}

.button-inform .whatsapp {
  background-color: #1c7430;
}

.button-inform .linkedin {
  background-color: #2B4AA0;
}

.button-inform .tumblr {
  background-color: #636b6f;
}

.first-title {
  margin-top: 10px;
  width: 64%;
}

.first-title .button-link .link-a {
  background-color: black;
  font-size: 14px;
  padding: 5px;
}

.first-title .button-link a:hover {
  color: white;
}

.first-title .button-link span:hover {
  background-color: #636b6f;
}

.first-title h1 {
  line-height: 50px;
  margin-top: 33px;
  margin-bottom: 23px;
  color: #111;
  font-weight: 400;
}

.first-title h3 {
  font-size: 22px;
  line-height: 30px;
  margin-top: 27px;
  margin-bottom: 17px;
}

.first-title h2 {
  font-size: 27px;
  line-height: 38px;
  margin-top: 30px;
  margin-bottom: 20px;
}

.toc-wrapper {
  position: relative;
  width: 450px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.toc {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  max-height: 300px;
  overflow-y: auto;
  display: none; /* Hidden by default */
  color: black;
}

.icon {
  cursor: pointer;
  font-size: 20px;
  background-color: white;
  color: gray;
  text-align: center;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  justify-items: start;
}

.icon.open {
  background-color: whitesmoke;
}

.toc.open {
  display: block;
}

.name {
  width: 220px;
  padding: 10px;
  align-items: center;
  display: flex;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
}

.link {
  display: flex;
  font-size: 13px;
  color: #c3c3c3;
}

.link a {
  margin: 0 5px 0 5px;
}
.load-more {
  color: gray;
}
.load-more #viewMoreBtnExam {
  cursor: pointer;
  display: inline-block;
  font-family: open sans, open sans regular, sans-serif;
  font-size: 12px;
  line-height: 1;
  padding: 8px 10px;
  border: 1px solid #c9c9c9;
  vertical-align: middle;
  margin: 20px 0 0 290px;
}

.load-more #viewMoreBtn, .load-more #viewMoreBtnNews {
  cursor: pointer;
  display: inline-block;
  font-family: open sans, open sans regular, sans-serif;
  font-size: 12px;
  line-height: 1;
  padding: 8px 10px;
  border: 1px solid #c9c9c9;
  vertical-align: middle;
  margin: 20px 0 0 80px;
}

.hidden-div-exam {
  display: none;
}

.hidden-div {
  display: none;
}

.hidden-news-div {
  display: none; /* Ẩn các thẻ tin tức ban đầu */
}

.show {
  display: flex; /* Or block depending on your layout */
}

#viewMoreBtnExam:hover, #viewMoreBtn:hover, #viewMoreBtnNews:hover {
  background-color: #1a4c9d;
}

.title-titles {
  margin-bottom: 10px;
}

.title-titles .title-textTitle {
  font-family: roboto, sans-serif;
  font-size: 14px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 26px;
  border-bottom: 2px solid #295fcc;
}

.title-titles .title-textTitle span {
  line-height: 17px;
  display: inline-block;
  padding: 7px 12px 4px;
  background-color: #295fcc;
  color: #fff;
}

.title-titles .title-textTitle .title-more {
  background-color: white;
  color: black;
}

.td-pb-row [class*=td-pb-span] {
  display: block;
  min-height: 1px;
  float: left;
  padding-right: 24px;
  padding-left: 24px;
  position: relative;
}

.news {
  background-color: white;
}

.news .tdc-news-row {
  display: flex;
  min-height: 0;
  gap: 20px;
}

.news .vc-column {
  display: block;
  min-height: 1px;
  float: left;
  padding-right: 24px;
  padding-left: 24px;
  position: relative;
}

.news .item-details {
  width: 25%;
}

.news .item-details .img-info-bottom {
  padding: 13px 0 0;
}

.news .item-details .card-text {
  margin: 20px 0 0;
  line-height: 21px;
  font-family: roboto, sans-serif;
  font-size: 13px;
  color: #767676;
}

.news .title-titles {
  margin-bottom: 10px;
}

.news .title-titles .title-textTitle span {
  line-height: 17px;
  display: inline-block;
  padding: 7px 12px 4px;
  background-color: #295fcc;
  color: #fff;
}

.news .td-pb-row {
  width: 1068px;
  margin-right: auto;
  margin-left: auto;
}

.news .button-link {
  margin-top: 10px;
  width: 50px;
  padding: 2px;
  text-align: center;
  background-color: black;
  font-weight: bold;
  font-family: open sans, open sans regular, sans-serif;
  font-size: 11px;
  margin-bottom: 7px;
  line-height: 1;
  min-height: 17px;
}

.news .title-mb2 {
  margin-bottom: 11px;
  font-size: 25px;
  line-height: 29px;
}

.news .title-small {
  text-align: start;
  font-size: 17px;
  line-height: 23px;
  min-height: 0;
  padding-left: 0;
  margin-bottom: 10px;
}

.news .button-link:hover {
  background-color: #1a4c9d;
}

.news .description-mb2 {
  font-size: 13px;
  color: #767676;
  font-family: open sans, open sans regular, sans-serif;
  margin-top: 9px;
  margin-bottom: 11px;
}

.news .watch-more {
  width: 100px;
  padding: 8px;
  text-align: center;
  background-color: #2C4A9F;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  display: inline-block;
  font-family: roboto, sans-serif;
}

.news .watch-more:hover {
  background-color: black;
}

.news .td-left-blog {
  width: 66.6667%;
}

.news .td-left-blog .td-pb-row {
  display: block;
  min-height: 1px;
  float: left;
  padding-right: 24px;
  padding-left: 24px;
  position: relative;
}

.news .td-left-blog .td-mb-5 {
  margin-bottom: 50px;
}

.news .td-left-blog .tb-row-8 {
  width: 100%;
}

.news .td-left-blog .title-begin {
  position: relative;
  display: flex;
  margin-bottom: 20px;
}

.news .td-left-blog .title-begin .title-titles {
  background-color: #1a4c9d;
  color: white;
  padding: 10px 10px;
  position: relative;
}

.news .td-left-blog .title-begin .title-titles span {
  line-height: 17px;
  display: inline-block;
  padding: 7px 12px 4px;
  background-color: #222;
  color: #fff;
}

.news .td-left-blog a {
  cursor: pointer;
  z-index: 2;
}

.news .td-left-blog .img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  margin-bottom: 40px;
  z-index: 0;
}

.news .td-left-blog .item-detail {
  margin-left: 330px;
  min-height: 235px;
  z-index: 1 !important;
}

.news .td-right-blog {
  width: 33.33333%;
}

.news .td-right-blog .card-image {
  width: 100%;
  height: auto;
}

.news .td-right-blog .card-image img {
  width: 100%;
  transition: transform 0.3s ease;
}

.news .td-right-blog .card-image:hover img {
  opacity: 1;
}

.news .td-right-blog .news-content .img-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1; /* Đảm bảo img không đè lên a */
}

.news .td-right-blog .news-content .img-wrapper img {
  width: 100px;
  height: 100px;
}

.news .td-right-blog .news-content .item-small-detail {
  margin-left: 115px;
  min-height: 100px;
  width: 60%;
}

.news .td-right-blog .news-content a {
  cursor: pointer;
  position: relative; /* Đảm bảo thẻ a có thể nổi lên trên */
  z-index: 2; /* Ưu tiên z-index cao hơn để tương tác */
}

.news .td-right-blog .more {
  display: flex;
  align-items: center;
  gap: 10px;
}

.news .td-right-blog .more .datetime {
  font-size: 10px;
  color: gray;
}

.news .td-right-blog .form-register {
  width: 100%;
}

.news .td-right-blog .form-register label {
  width: 98%;
  font-size: 15px;
  line-height: 1.74;
  color: #222;
}

.news .td-right-blog .form-register input[type=text], .news .td-right-blog .form-register input[type=email] {
  font-size: 12px;
  line-height: 21px;
  color: #444;
  border: 1px solid #e1e1e1;
  height: 34px;
  width: 98%;
  margin-bottom: 20px;
}

.news .td-right-blog .form-register input[type=submit] {
  font-family: roboto, sans-serif;
  font-size: 13px;
  background-color: #222;
  border-radius: 0;
  color: #fff;
  border: none;
  padding: 8px 15px;
  font-weight: 500;
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
}

.news .td-right-blog .form-register input[type=submit]:hover {
  background-color: #1a4c9d;
}

.tdc-row {
  width: 1068px;
  margin-right: auto;
  margin-left: auto;
}

.highlighted-post {
  display: flex;
  align-items: center;
  margin: 20px; /* Optional: Adds margin around the container */
  padding: 0 40px 0 40px;
}

.highlighted-post img {
  margin-top: 200px;
  width: 100%;
  height: 300px;
}

.card-image img {
  width: 350px;
  height: 300px;
  margin-bottom: 20px;
}

.picture1 img {
  width: 100%;
  object-fit: unset;
  height: auto;
}

.card-body .link {
  position: relative;
  top: -28px;
  left: 0;
  background-color: red;
  text-align: center;
  width: 50px;
  font-size: 12px;
  color: white;
  font-weight: bold;
}

.card-body img {
  width: 100%;
  object-fit: cover;
  margin-bottom: 10px;
}

.card-body .card-title {
  display: inline-block; /* Hoặc block */
  margin: 0 0 6px;
  font-size: 21px;
  font-weight: 500;
  line-height: 25px;
}

.card-body p {
  font-size: 13px;
  color: gray;
}

.carousel-item img {
  width: 100%;
  height: 500px;
}

.slide {
  display: flex;
  height: auto !important;
  width: 100%;
  animation: bounceIn 0.6s ease-out;
}

.carousel-inner:after {
  display: block;
  clear: both;
  content: "";
}

.carousel-control-prev {
  position: absolute;
  top: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #fff;
  text-align: center;
  background: none;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

.carousel-caption button {
  margin-bottom: 20px;
  padding: 10px;
}

.container-fluid {
  margin-bottom: 20px;
  width: 100%;
  background-color: white;
}

.footer-resources {
  display: flex;
  justify-content: space-between;
  background-color: white;
  gap: 20px;
}

.logo {
  width: 25%;
}

.logo img {
  width: 90%;
  margin-top: 35px;
  margin-bottom: 0;
  margin-left: 30px;
}

.watch-us {
  width: 33.33333333%;
}

.about-us-footer {
  width: 41.66666667%;
}

.about-us-footer a {
  color: #2B4AA0;
  text-decoration: none;
}

.footer-resources .about-us-footer p {
  font-size: 14px;
}

.watch-us .button {
  display: flex;
  padding: 10px 0 0 0;
  color: white; /* Màu chữ */
  cursor: pointer; /* Hiển thị con trỏ khi hover */
  gap: 20px;
}

.watch-us button:hover {
  background-color: #1a4c9d; /* Màu nền khi hover */
}

.navbar-resources {
  width: auto;
  margin-right: auto;
  margin-left: auto;
}

form {
  display: block;
  margin-top: 0em;
  unicode-bidi: isolate;
}

#prevBtn {
  display: inline-block;
  margin-right: 7px;
  width: 25px;
  height: 25px;
  border: 1px solid #dcdcdc;
  line-height: 24px;
  text-align: center;
  vertical-align: middle;
  font-size: 7px;
  color: #b7b7b7;
}

#nextBtn {
  display: inline-block;
  margin-right: 7px;
  width: 25px;
  height: 25px;
  border: 1px solid #dcdcdc;
  line-height: 24px;
  text-align: center;
  vertical-align: middle;
  font-size: 7px;
  color: #b7b7b7;
}

.entry-title {
  word-wrap: break-word;
}

.p-5 {
  padding: 0 50px 0 50px;
}

.search-box {
  z-index: 9999;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  display: none; /* Ẩn cả input và button ban đầu */
  transform: translateY(20px); /* Dịch chuyển lên trên icon ban đầu */
  position: absolute; /* Định vị tuyệt đối */
  top: 47px;
  right: 0;
}

.search-box .search-button {
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  width: auto;
  font-size: 17px;
}

.search-icon {
  font-size: 20px;
  cursor: pointer;
  margin-right: 15px;
  margin-left: 10px;
}

.search-icon i {
  font-size: 18px;
}

.people-header-title {
  position: relative;
  margin-right: auto;
  margin-left: auto;
}

.people-header-title .button-selection {
  text-align: right !important;
}

.people-header-title .button-selection a {
  text-align: center !important;
}

.people-header-title .td-page-title {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
}

.people-header-title p {
  font-style: italic;
}

.people-header-title .btn-dark {
  text-align: right !important;
}

.people-header-title .description {
  text-align: center;
}

.people-header-title .description p {
  font-style: italic;
  font-family: open sans, open sans regular, sans-serif;
  color: #777;
  font-size: 16px;
  line-height: 26px;
  margin-bottom: 0;
  margin-top: 15px;
}

.td-pb-span2, .td-pb-span3 {
  float: none !important;
}

.td-pb-span12 {
  width: 100%;
  float: none !important;
}

.td-container-wrap {
  background-color: #fff;
  margin-left: auto;
  margin-right: auto;
}

.td-container-wrap .td-container {
  margin-right: auto;
  margin-left: auto;
}

.td-container-wrap .td-container .td-pb-row [class*=td-pb-span] {
  display: block;
  min-height: 1px;
  float: left;
  padding-right: 24px;
  padding-left: 24px;
}

.td-container-wrap .td-container .td_module_11 {
  display: flex;
  gap: 30px;
}

.td-container-wrap .td-container .td_module_11 .td-module-thumb {
  width: 30%;
}

.td-container-wrap .td-container .td_module_11 .td-module-thumb img {
  height: 250px;
}

.td-container-wrap .td-container .td_module_11 .item-details .td-module-title {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 23px;
  text-align: left !important;
  width: 48%;
}

.td-container-wrap .td-container .td_module_11 .item-details .module-meta-info {
  font-family: open sans, open sans regular, sans-serif;
  font-size: 11px;
  margin-bottom: 7px;
  line-height: 1;
  min-height: 17px;
  width: 40px;
  padding: 1px;
}

.td-container-wrap .td-container .td_module_11 .item-details .module-meta-info .td-post-category {
  font-family: open sans, open sans regular, sans-serif;
  font-size: 10px;
  font-weight: 600;
  line-height: 1;
  background-color: #222;
  color: #fff;
  padding: 3px;
  display: block;
  text-align: center;
  width: 70px;
}

.td-container-wrap .td-container .td_module_11 .item-details .excerpt {
  font-size: 13px;
  color: #767676;
  font-family: open sans, open sans regular, sans-serif;
  margin-top: 9px;
  width: 48%;
}

.td-container-wrap .td-container .td_module_11 .item-details .read-more {
  display: inline-block;
  font-family: roboto, sans-serif;
  margin-bottom: 20px;
  background-color: #2C4A9F;
  width: 120px;
  height: 30px;
  text-align: center;
  padding-top: 1px;
}

.td-container-wrap .td-container .td_module_11 .item-details .read-more .td-post-category {
  color: white;
  font-size: 14px;
  font-weight: bold;
}

.td-container-wrap .td-container .td_module_11 .item-details .read-more:hover {
  background-color: black;
}

.pagination-wrapper {
  margin-top: 100px;
}

#scrollToTopBtn {
  position: fixed;
  bottom: 20px;
  right: 0;
  padding: 10px 20px;
  background-color: #007bff; /* Màu nút */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: none; /* Ẩn nút khi trang mới tải */
}

#scrollToTopBtn:hover {
  background-color: #0056b3; /* Màu khi hover */
}

.title {
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-size: 37px;
  color: white;
}

.title .button-link {
  padding: 2px;
  margin-bottom: 20px;
  font-size: 15px;
  background-color: red;
  text-align: center;
  border-radius: 5px;
}

.title a {
  color: inherit; /* Giữ nguyên màu chữ của phần tử cha */
  text-decoration: none; /* Loại bỏ gạch chân */
}

.title a:hover, .title a:focus {
  text-decoration: none; /* Đảm bảo không có gạch chân khi hover hoặc focus */
  color: ivory;
}

.carousel-control-prev,
.carousel-control-next {
  width: 5%; /* Giảm độ rộng của nút để không che nội dung */
  background: none; /* Loại bỏ nền để không ảnh hưởng tới ảnh */
  pointer-events: all; /* Cho phép tương tác với nội dung phía dưới */
}

.carousel-control-prev {
  left: 0; /* Đưa nút Previous sát góc trái của carousel */
}

.carousel-control-next {
  right: 0; /* Đưa nút Next sát góc phải của carousel */
}

.carousel-controls {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: none; /* Cho phép tương tác với nội dung phía dưới */
}

.resources-main {
  padding-top: 20px;
  margin-bottom: 60px;
  overflow: hidden;
}

.resources-main .tdc-news-row {
  display: flex;
}

a {
  color: inherit; /* Giữ nguyên màu chữ của phần tử cha */
  text-decoration: none; /* Loại bỏ gạch chân */
}

a:hover, a:focus {
  text-decoration: none; /* Đảm bảo không có gạch chân khi hover hoặc focus */
  color: #2C4A9F; /* Giữ màu không thay đổi khi hover */
}

.button-footer .button {
  display: inline-block;
  padding: 10px 15px;
  margin: 5px;
  background-color: #6c757d; /* Màu nền cho button */
  color: white;
  border-radius: 5px;
  text-align: center;
  text-decoration: none; /* Bỏ gạch chân */
}

.button-footer .button:hover {
  background-color: #0056b3; /* Màu khi hover */
}

.button-footer .button i {
  font-size: 16px;
}

.no-scroll {
  overflow: hidden !important;
}

.picture2 img {
  width: 100%;
  object-fit: unset;
  height: auto;
  padding: 0 100px 0 100px;
}

.header-mobi {
  width: 100%;
  z-index: 999;
}

.header-mobi .mobi-telephone {
  text-align: center;
  align-items: center;
  background-color: #295fcc !important;
  padding: 30px 20px 20px 30px;
  display: flex;
  width: 100%;
  height: 54px;
  justify-content: space-between;
  /* Overlay style */
}

.header-mobi .mobi-telephone .telephone-hidden .overlay {
  display: none; /* Ẩn overlay lúc đầu */
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 40, 85, 0.5), rgba(255, 158, 77, 0.7) 50%, rgba(255, 158, 77, 0.5));
  color: #fff;
  z-index: 1000;
  font-size: 24px;
  overflow-y: auto;
}

.header-mobi .mobi-telephone .telephone-hidden .header-overlay {
  display: flex;
  justify-content: space-between;
  margin: 30px 30px 20px 40px;
}

.header-mobi .mobi-telephone .telephone-hidden .header-overlay .link-inform i {
  font-size: 23px;
  margin-right: 20px;
}

.header-mobi .mobi-telephone .telephone-hidden .header-overlay span i {
  font-size: 23px;
}

.header-mobi .mobi-telephone .telephone-hidden .menu-form {
  text-align: left !important;
  line-height: 3rem;
  margin-left: 40px;
}

.header-mobi .mobi-telephone .telephone-hidden .menu-form .nav-link {
  font-weight: bold;
}

.header-mobi .mobi-telephone .telephone-hidden .close-btn {
  font-size: 24px;
  cursor: pointer;
}

.header-mobi .mobi-telephone .telephone-hidden .hamburger i {
  cursor: pointer;
  width: auto;
  line-height: 54px;
  font-size: 22px;
  color: white;
}

.header-mobi .mobi-telephone .search-hidden .search-button i {
  cursor: pointer;
  height: 54px;
  width: auto;
  line-height: 54px;
  font-size: 22px;
  color: white;
  margin-right: 20px;
}

.header-mobi .mobi-telephone .search-hidden .overlay-search {
  display: none; /* Ẩn overlay lúc đầu */
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 40, 85, 0.5), rgba(255, 158, 77, 0.7) 50%, rgba(255, 158, 77, 0.5));
  color: #fff;
  z-index: 1000;
  font-size: 24px;
}

.header-mobi .mobi-telephone .search-hidden .overlay-search.open {
  display: flex;
}

.header-mobi .mobi-telephone .search-hidden .search-close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
}

.header-mobi .mobi-telephone .search-hidden .no-scroll {
  overflow: hidden !important;
}

.header-mobi .mobi-telephone .search-hidden .tdc-title {
  margin-top: 40px;
  position: relative;
}

.header-mobi .mobi-telephone .search-hidden .tdc-title span {
  font-size: 14px;
  color: white;
}

.header-mobi .mobi-telephone .search-hidden .tdc-title .input-search {
  width: 90%; /* Giảm chiều rộng để tránh tràn lề */
  color: #fff;
  font-weight: 700;
  font-size: 26px;
  height: 40px;
  line-height: 36px;
  border: 0;
  background: transparent;
  outline: 0;
  padding: 0 10px; /* Thêm padding để tạo khoảng cách */
  text-align: center;
  border: none;
  border-bottom: 2px solid white;
  margin: 20px 0;
}

@media (max-width: 1024px) {
  .title {
    font-size: 20px;
  }

  .slide {
    padding: 0 !important;
    height: 500px !important;
  }
}

@media (min-width: 1019px) and (max-width: 1140px) {
  .td-container, .tdc-row {
    width: 980px !important;
  }

  .td-pb-row [class*=td-pb-span] {
    padding-right: 20px;
    padding-left: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1080px) {
  .td-pb-row [class*=td-pb-span] {
    padding-right: 14px;
    padding-left: 14px;
  }

  .form-menu {
    padding-left: 20px;
    font-size: 12px;
  }

  .title {
    font-family: Tahoma, Verdana, Geneva, Verdana, sans-serif !important;
    font-size: 35px !important;
  }

  .tdc-row {
    width: 740px;
  }

  .tdc-row .td-left-blog {
    max-width: 70% !important;
  }

  .tdc-row .td-left-blog .td-pb-row {
    display: block;
    min-height: 1px;
    float: left;
    padding-right: 10px !important;
    padding-left: 24px;
    position: relative;
  }

  .tdc-row .td-left-blog .td-mb-5 {
    margin-bottom: 6px !important;
  }

  .tdc-row .td-left-blog .tb-row-8 {
    width: 100%;
  }

  .tdc-row .td-left-blog .title-begin {
    position: relative;
    display: flex;
    margin-bottom: 20px;
  }

  .tdc-row .td-left-blog .title-begin .title-titles {
    background-color: blue;
    color: white;
    padding: 10px 10px;
    position: relative;
  }

  .tdc-row .td-left-blog .title-begin .title-titles span {
    line-height: 17px;
    display: inline-block;
    padding: 7px 12px 4px;
    background-color: #222;
    color: #fff;
  }

  .tdc-row .td-left-blog a {
    cursor: pointer;
    z-index: 2; /* Ưu tiên z-index cao hơn để tương tác */
  }

  .tdc-row .td-left-blog .img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 40px;
    z-index: 0;
  }

  .tdc-row .td-left-blog .img-wrapper img {
    width: 192px;
  }

  .tdc-row .td-left-blog .title-mb2 {
    text-align: start;
    font-size: 20px;
    line-height: 24px;
    min-height: 0;
    padding-left: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }

  .tdc-row .td-left-blog .item-detail {
    margin-left: 180px !important;
    min-height: 165px !important;
  }

  .tdc-row .td-left-blog .watch-more {
    display: none;
  }

  .tdc-row .td-right-blog {
    margin-right: 0 !important;
    max-width: 30% !important;
  }

  .tdc-row .td-right-blog .form-register {
    max-width: 20rem;
  }

  .tdc-row .td-right-blog .news-content {
    width: 20rem;
  }

  .tdc-row .td-right-blog .img-wrapper img {
    width: 50px !important;
    height: 50px !important;
  }

  .tdc-row .td-right-blog .item-small-detail {
    margin-left: 60px !important;
    min-height: 50px !important;
    width: 70% !important;
    align-items: start !important;
  }

  .tdc-row .td-right-blog .item-small-detail .title-small {
    font-size: 14px;
    line-height: 21px;
    text-align: left !important;
    max-width: 10rem;
  }

  .td-container-wrap {
    background-color: #fff;
    margin-left: auto;
    margin-right: auto;
  }

  .td-container-wrap .td-container {
    width: 1068px;
    margin-right: auto;
    margin-left: auto;
  }

  .td-container-wrap .td-container .td_module_11 {
    display: flex;
    gap: 30px;
  }

  .td-container-wrap .td-container .td_module_11 .td-module-thumb {
    width: 30%;
  }

  .td-container-wrap .td-container .td_module_11 .td-module-thumb img {
    height: 250px;
    width: 100%;
  }

  .td-container-wrap .td-container .td_module_11 .item-details {
    width: 70%;
    font-size: 14px !important;
    line-height: 21px !important;
  }

  .td-container-wrap .td-container .td_module_11 .item-details .td-module-title {
    font-size: 23px;
    text-align: left !important;
    width: 48%;
  }

  .td-container-wrap .td-container .td_module_11 .item-details .module-meta-info {
    font-size: 11px;
    margin-bottom: 7px;
    line-height: 1;
    min-height: 17px;
    width: 40px;
    padding: 1px;
  }

  .td-container-wrap .td-container .td_module_11 .item-details .module-meta-info .td-post-category {
    font-size: 10px;
    font-weight: 600;
    line-height: 1;
    background-color: #222;
    color: #fff;
    padding: 3px;
    display: block;
    text-align: center;
    width: 70px;
  }

  .td-container-wrap .td-container .td_module_11 .item-details .excerpt {
    font-size: 13px;
    color: #767676;
    font-family: open sans, open sans regular, sans-serif;
    margin-top: 9px;
    width: 48%;
  }

  .td-container-wrap .td-container .td_module_11 .item-details .read-more {
    display: none;
  }

  .td-container-wrap .td-container .td_module_11 .item-details .read-more:hover {
    background-color: black;
  }
}
.td-category-title{
  padding: 80px 15% 89px;
  display: table;
  width: 100%;
}
@media (max-width: 767px) {
  .td-pb-row [class*=td-pb-span] {
    padding-right: 0;
    padding-left: 0;
    float: none;
    width: 100%;
  }
  .justify-content-start {
    justify-content: flex-start;
  }
  .td-module-thumb img {
    width: 200px !important;
    height: 145.06px !important;
  }

  .item-details {
    margin-left: 25px !important;
    min-height: 145px !important;
  }
  .item-details .td-module-title {
    font-size: 18px;
    width: 100% !important;
  }

  .excerpt {
    display: none !important;
  }
  .read-more {
    display: none !important;
  }

  .people-header-title {
    display: flex;
    flex-direction: column;
  }

  .container {
    max-width: 100%;
  }

  .title {
    font-family: Tahoma, Verdana, Geneva, Verdana, sans-serif !important;
    padding-bottom: 30px;
  }

  .tdc-row {
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  .navbar {
    --bs-navbar-padding-x: 0;
    --bs-navbar-padding-y: 1px;
    padding: var(--bs-navbar-padding-y);
  }

  .resources-main {
    padding-top: 0 !important;
  }

  .slide {
    width: 100% !important;
    height: 220px !important;
  }

  .tdc-news-row {
    flex-direction: column;
  }

  .tdc-row {
    flex-direction: column;
  }

  .tdc-row .td-left-blog {
    width: 100% !important;
  }

  .tdc-row .td-left-blog .td-pb-row {
    display: block;
    min-height: 1px;
    float: left;
    padding-right: 24px;
    padding-left: 24px;
    position: relative;
  }

  .tdc-row .td-left-blog .td-mb-5 {
    margin-bottom: 6px !important;
  }

  .tdc-row .td-left-blog .tb-row-8 {
    width: 100%;
  }

  .tdc-row .td-left-blog .title-begin {
    position: relative;
    display: flex;
    margin-bottom: 20px;
  }

  .tdc-row .td-left-blog .title-begin .title-titles {
    background-color: #1a4c9d;
    color: white;
    padding: 10px 10px;
    position: relative;
  }

  .tdc-row .td-left-blog .title-begin .title-titles span {
    line-height: 17px;
    display: inline-block;
    padding: 7px 12px 4px;
    background-color: #222;
    color: #fff;
  }

  .tdc-row .td-left-blog a {
    cursor: pointer;
    z-index: 2; /* Ưu tiên z-index cao hơn để tương tác */
  }

  .tdc-row .td-left-blog .img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 40px;
    z-index: 0; /* Đảm bảo img không đè lên a */
  }

  .tdc-row .td-left-blog .img-wrapper img {
    width: 200px !important;
    height: 145.06px !important;
  }

  .tdc-row .td-left-blog .item-detail {
    margin-left: 200px !important;
    min-height: 145px !important;
  }

  .tdc-row .td-left-blog .item-detail .description-mb2 {
    display: none;
  }

  .tdc-row .td-left-blog .watch-more {
    display: none;
  }

  .tdc-row .td-right-blog {
    width: 100% !important;
  }

  .tdc-row .td-right-blog .card-image img {
    padding-top: 20px !important;
    height: 330px !important;
    width: 330px !important;
  }

  .tdc-row .td-right-blog img {
    width: 80px !important;
    height: 80px !important;
  }

  .tdc-row .td-right-blog .item-small-detail {
    margin-left: 95px !important;
    min-height: 80px !important;
    width: 88% !important;
  }

  .tdc-row .td-right-blog .item-small-detail .title-small {
    font-size: 22px;
    line-height: 28px;
    font-weight: 500;
    margin-bottom: 0 !important;
  }

  .tdc-row .td-right-blog .item-small-detail .datetime {
    display: none;
  }

  .footer-resources {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem !important;
  }

  .footer-resources .logo, .footer-resources .watch-us, .footer-resources .about-us-footer {
    width: 100%;
    text-align: center;
    align-items: center;
  }

  .td-category-title-holder {
    padding: 0 5% 69px !important;
  }
  .headerBlog-container {
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
    position: relative; /* Đặt làm gốc cho menu */
    top: 0 !important;
  }
  .dropdown{
    top:300px;
    right: 220px;
  }
  .td-page-title {
    font-size: 30px !important;
    line-height: 40px !important;
  }
  .description p {
    margin-bottom: 28px !important;
    margin-top: 7px !important;
  }
}

.dad {
  width: 100%;
}

@media (max-width: 500px) {
  .tdc-row .td-left-blog .img-wrapper img {
    width: 100px !important;
    height: 72.52px !important;
  }
  .dropdown{
    top:330px;
    right: 130px;
  }
  .tdc-row .td-left-blog .item-detail {
    margin-left: 0 !important;
    min-height: 73px !important;
    padding-left: 90px;
    width: 100% !important;
  }

  .tdc-row .td-right-blog .item-small-detail .title-small {
    font-size: 17px !important;
    line-height: 22px !important;
  }

  .item-details .entry-title {
    font-size: 17px !important;
    line-height: 23px;
    font-weight: 500;
    margin-bottom: 8px !important;
  }

  .news .title-mb2 {
    font-size: 17px !important;
    line-height: 23px !important;
    font-weight: 500 !important;
    margin-bottom: 8px !important;
  }

  .td-module-thumb img {
    width: 100px !important;
    height: 72.52px !important;
  }

  .item-details {
    margin-left: 0 !important;
    min-height: 73px !important;
    padding-left: 0 !important;
  }

  .headerBlog-container {
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
    position: relative; /* Đặt làm gốc cho menu */
  }
}

@media (max-width: 414px) {
  .card-body-footer {
    flex-direction: column;
  }
  .dropdown{
    top:330px;
    right: 110px;
  }
  .first-title {
    width: 100%;
  }

  .card {
    display: flex;
  }

  .card .img-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    margin-bottom: 40px;
    z-index: 0; /* Đảm bảo img không đè lên a */
  }

  .card .img-wrapper img {
    width: 100px;
    height: 100px;
  }

  .card .img-wrapper .link {
    position: absolute;
    top: 84px;
    left: 2px !important;
    background-color: black;
  }

  .card .img-wrapper a:hover {
    background-color: #1a4c9d;
  }

  .card .item-detail {
    margin-left: 120px !important;
    min-height: 165px !important;
    font-weight: bold;
  }
}

@keyframes bounceIn {
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

.zoomed {
  transform: translateY(-20px) rotateX(5deg);
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  transform-origin: center center;
}

.animation {
  animation: bounceIn 0.6s ease-out;
}
.headerBlog-container {
  text-align: right;
  display: flex;
  width: 100%;
  justify-content: space-between;
}
.dropdown-button {
  border: none;
  cursor: pointer;
  background-color: #222222;
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  padding: 5px 13px 4px 13px;
  font-size: 11px;
  white-space: nowrap;
}
/* Dropdown menu */
.dropdown-menu {
  display: none;
  border-radius: unset;
  border: none;
  position: absolute;
  top: 60%;
  left: -49px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 2;
  background-color: #222222;
  color: #fff;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 11px;
  white-space: nowrap;
  min-width: 113px;
  padding: 6px 0;
  text-align: left;
  margin-top: 4px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}
.dropdown-menu a {
  display: block;
  color: white;
  text-decoration: none;
  padding: 8px 8px;
}
.dropdown-menu a:hover {
  color: #2B4AA0;
}
.td-category-title-holder {
  padding: 80px 15% 89px;
  display: table;
  width: 100%;
}
</style>
