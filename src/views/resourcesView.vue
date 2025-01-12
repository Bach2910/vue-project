<script setup>
import {onMounted,ref} from "vue";
import ImgFluid from '../components/img/imgFluild.vue';
import BlogItem from "@/components/resource_pages/blogItem.vue";
import ImgPriceBox from "@/components/img/imgPriceBox.vue";
import carouselItem from '../components/resource_pages/carouselItem.vue';
import CardNewList from "@/components/resource_pages/CardNewList.vue";
import HiddenDiv from "@/components/resource_pages/HiddenDiv.vue";
import NewResource from "@/components/resource_pages/newResource.vue";
import HiddenExam from "@/components/resource_pages/HiddenExam.vue";
onMounted(() => {
  import('bootstrap/dist/css/bootstrap.min.css');
  import('bootstrap/dist/css/bootstrap-grid.min.css');
  import('bootstrap/dist/css/bootstrap-utilities.min.css');
});
const newData = ref ([
  { id: 1, img: 'src/assets/resources/324x235/equity-theory-la-gi-testcenter-1-324x235.jpg', title: 'Reference check là gì? 4 điểm cần lưu ý khi kiểm tra tham chiếu',description:'Quản trị doanh nghiệp chưa bao giờ là một nhiệm vụ dễ dàng đối với các nhà quản lý. Nhưng với sự “dẫn đường” của học thuyết Equity Theory, nhiều nhà quản lý có...' },
  { id: 2, img: 'src/assets/resources/324x235/lean-la-gi-testcenter-324x235.jpg', title: '5 nhóm chỉ số nhất định phải có trong KPI cho Content Marketing',description:'Bỏ túi những dấu hiệu nhận biết ứng viên không trung thực khi phỏng vấn sẽ giúp quá trình tìm kiếm và lựa chọn nhân tài của các nhà tuyển dụng trở nên thuận...' },
  { id: 3, img: 'src/assets/resources/324x235/iq-va-eq-cai-nao-quan-trong-hon-testcenter-324x235.jpg', title: 'Mẫu bài test cho nhân viên chăm sóc khách hàng mới nhất',description:'Bộ phận QC nói chung và nhân viên QC đóng vai trò khá quan trọng, giúp thúc đẩy sự phát triển của doanh nghiệp, thông qua việc đảm bảo về chất lượng sản phẩm. Vậy, nhân viên QC là gì? Và đâu là phần mềm giúp thực hiện các bài test nhân viên QC hiệu quả. Mời bạn cùng Testcenter khám phá trong bài viết dưới đây nhé.' },
  { id: 4, img: 'src/assets/resources/324x235/batchbusinesswoman-571153_1920-324x235.jpeg', title: 'Giới thiệu phần mềm thông minh tạo bài test nhân viên thu mua',description:'Bạn đang chuẩn bị phỏng vấn ứng viên và cảm thấy bối bối, không biết bài test nhân viên thủ kho như thế nào. Nhưng đừng quá lo lắng, trong bài viết dưới đây, Testcenter sẽ chia sẻ với bạn những thông tin hữu ích để có thể thực hiện phỏng vấn vị trí nhân viên kho một cách tốt nhất.' },
  { id: 5, img: 'src/assets/resources/324x235/batchsale-3701777_1920-324x235.jpeg', title: 'Giới thiệu phần mềm thông minh tạo bài test nhân viên thủ kho￼',description:'Bạn đang chuẩn bị phỏng vấn ứng viên và cảm thấy bối bối, không biết bài test nhân viên thủ kho như thế nào. Nhưng đừng quá lo lắng, trong bài viết dưới đây, Testcenter sẽ chia sẻ với bạn những thông tin hữu ích để có thể thực hiện phỏng vấn vị trí nhân viên kho một cách tốt nhất.' },
  { id: 5, img: 'src/assets/resources/324x235/paying-1438142_1920-324x235.jpeg', title: 'Top 10 mẫu email từ chối ứng viên lịch sự và chuyên nghiệp',description:'Bạn đang chuẩn bị phỏng vấn ứng viên và cảm thấy bối bối, không biết bài test nhân viên thủ kho như thế nào. Nhưng đừng quá lo lắng, trong bài viết dưới đây, Testcenter sẽ chia sẻ với bạn những thông tin hữu ích để có thể thực hiện phỏng vấn vị trí nhân viên kho một cách tốt nhất.' },
  { id: 5, img: 'src/assets/resources/324x235/equity-theory-la-gi-testcenter-1-324x235.jpg', title: 'Top 5 mẫu thư từ chối ứng viên bằng tiếng Anh cho nhà tuyển...',description:'Ngày nay khi cuộc cách mạng công nghệ khoa học kỹ thuật bùng nổ, máy tính và internet là phương tiện không thể thiếu, giúp con người khai thác thông tin nhanh, hiệu quả...' },
  { id: 5, img: 'src/assets/resources/324x235/lean-la-gi-testcenter-324x235.jpg', title: 'Download 6 biểu mẫu nhân sự Excel miễn phí 2023',description:'Bộ phận QC nói chung và nhân viên QC đóng vai trò khá quan trọng, giúp thúc đẩy sự phát triển của doanh nghiệp, thông qua việc đảm bảo về chất lượng sản phẩm. Vậy, nhân viên QC là gì? Và đâu là phần mềm giúp thực hiện các bài test nhân viên QC hiệu quả. Mời bạn cùng Testcenter khám phá trong bài viết dưới đây nhé.' },
  { id: 5, img: 'src/assets/resources/324x235/iq-va-eq-cai-nao-quan-trong-hon-testcenter-324x235.jpg', title: 'Download 6 biểu mẫu nhân sự Excel miễn phí 2023',description:'IQ và EQ đã trở thành hai khái niệm quan trọng trong lĩnh vực tuyển dụng nhân sự. Tuy vậy, rất nhiều nhà tuyển dụng vẫn phân vân không biết IQ và EQ cái...' }
])
const visibleCountData = ref(4);
const loadMoreData = () => {
  visibleCountData.value += 2; // Mỗi lần bấm "Xem thêm" tăng thêm 2 mục
};
const newsHiddenCards = ref([
  { id: 1, img: 'src/assets/resources/280/bai-test-nhan-vien-ban-hang-testcenter-280x280.jpg', title: 'Reference check là gì? 4 điểm cần lưu ý khi kiểm tra tham chiếu',day:'12',month:'june',year:'2003'},
  { id: 2, img: 'src/assets/resources/280/equity-theory-la-gi-testcenter-1-280x280.jpg', title: '5 nhóm chỉ số nhất định phải có trong KPI cho Content Marketing',day:'12',month:'june',year:'2003'},
  { id: 3, img: 'src/assets/resources/280/reference-check-la-gi-testcenter-280x280.jpg', title: 'Mẫu bài test cho nhân viên chăm sóc khách hàng mới nhất',day:'12',month:'june',year:'2003'},
  { id: 4, img: 'src/assets/resources/280/tuyen-mass-la-gi-testcenter-280x280.jpg', title: 'Mẫu quyết định điều chuyển nhân sự và những vấn đề cần lưu ý',day:'12',month:'june',year:'2003' },
  { id: 5, img: 'src/assets/resources/280/reference-check-la-gi-testcenter-280x280.jpg', title: 'Mẫu bài test cho nhân viên chăm sóc khách hàng mới nhất',day:'12',month:'june',year:'2003' },
  { id: 5, img: 'src/assets/resources/280/kpi-cho-content-marketing-testcenter-280x280.jpg', title: 'Top 10 mẫu email từ chối ứng viên lịch sự và chuyên nghiệp',day:'12',month:'june',year:'2003'},
  { id: 5, img: 'src/assets/resources/280/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-280x280.jpg', title: 'Top 5 mẫu thư từ chối ứng viên bằng tiếng Anh cho nhà tuyển...',day:'12',month:'june',year:'2003'},
  { id: 5, img: 'src/assets/resources/280/reference-check-la-gi-testcenter-280x280.jpg', title: 'Download 6 biểu mẫu nhân sự Excel miễn phí 2023',day:'12',month:'june',year:'2003'},
  { id: 5, img: 'src/assets/resources/280/tuyen-mass-la-gi-testcenter-280x280.jpg', title: 'Download 6 biểu mẫu nhân sự Excel miễn phí 2023',day:'12',month:'june',year:'2003' }
])
const visibleCount1 = ref(4);
const loadMore1 = () => {
  visibleCount1.value += 2; // Mỗi lần bấm "Xem thêm" tăng thêm 2 mục
};
const newsCards = ref([
  { id: 1, img: 'src/assets/resources/280/bai-test-nhan-vien-ban-hang-testcenter-280x280.jpg', title: 'Reference check là gì? 4 điểm cần lưu ý khi kiểm tra tham chiếu' },
  { id: 2, img: 'src/assets/resources/280/equity-theory-la-gi-testcenter-1-280x280.jpg', title: '5 nhóm chỉ số nhất định phải có trong KPI cho Content Marketing' },
  { id: 3, img: 'src/assets/resources/280/reference-check-la-gi-testcenter-280x280.jpg', title: 'Mẫu bài test cho nhân viên chăm sóc khách hàng mới nhất' },
  { id: 4, img: 'src/assets/resources/280/tuyen-mass-la-gi-testcenter-280x280.jpg', title: 'Mẫu quyết định điều chuyển nhân sự và những vấn đề cần lưu ý' },
  { id: 5, img: 'src/assets/resources/280/reference-check-la-gi-testcenter-280x280.jpg', title: 'Mẫu bài test cho nhân viên chăm sóc khách hàng mới nhất' },
  { id: 5, img: 'src/assets/resources/280/kpi-cho-content-marketing-testcenter-280x280.jpg', title: 'Top 10 mẫu email từ chối ứng viên lịch sự và chuyên nghiệp' },
  { id: 5, img: 'src/assets/resources/280/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-280x280.jpg', title: 'Top 5 mẫu thư từ chối ứng viên bằng tiếng Anh cho nhà tuyển...' },
  { id: 5, img: 'src/assets/resources/280/reference-check-la-gi-testcenter-280x280.jpg', title: 'Download 6 biểu mẫu nhân sự Excel miễn phí 2023' },
  { id: 5, img: 'src/assets/resources/280/tuyen-mass-la-gi-testcenter-280x280.jpg', title: 'Download 6 biểu mẫu nhân sự Excel miễn phí 2023' }
]);

const visibleCount = ref(4);
const loadMore = () => {
  visibleCount.value += 2; // Mỗi lần bấm "Xem thêm" tăng thêm 2 mục
};
</script>
<template>
  <div class="tdc-row td-pb-span2">
    <div id="exampleCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner slide">
        <div class="carousel-item h-100 active">
          <div class="slide-img"><img
            src="../assets/resources/equity-theory-la-gi-testcenter-1.jpg"
            alt="Image 1"
            class="d-block w-100 mx-auto"></div>
          <div class="title">
            <div class="link-button">
              <router-link to="/blog/tin-tuc" class="button-link" type="submit">Tin tức</router-link>
            </div>
            <router-link to="/blog/tuyen-mass">Dấu hiệu nhận biết ứng viên không trung thực nhà quản trị
              cần biết</router-link>
          </div>
        </div>
        <carouselItem>
          <template #img>
            <ImgFluid :imageSrc='"src/assets/resources/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter.jpg"'></ImgFluid>
          </template>
          <template #title>
            Tin tức
          </template>
          <template #description>
            Dấu hiệu nhận biết ứng viên không trung thực nhà quản trị
            cần biết
          </template>
        </carouselItem>
        <carouselItem>
          <template #img>
            <ImgFluid :imageSrc='"src/assets/resources/tuyen-mass-la-gi-testcenter.jpg"'></ImgFluid>
          </template>
          <template #title>
            Tin tức
          </template>
          <template #description>
            Tuyển mass là gì
          </template>
        </carouselItem>
        <carouselItem>
          <template #img>
            <ImgFluid :imageSrc='"src/assets/resources/equity-theory-la-gi-testcenter-1.jpg"'></ImgFluid>
          </template>
          <template #title>
            Tin tức
          </template>
          <template #description>
            Lean là gì? Phương pháp ứng dụng mô hình Lean để tối ưu chi phí cho doanh nghiệp
            cần biết
          </template>
        </carouselItem>
      </div>
      <!-- Carousel controls -->
      <div class="carousel-controls">
        <button class="carousel-control-prev" type="button" data-bs-target="#exampleCarousel"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#exampleCarousel"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
  <div class="tdc-row td-pb-row mt-5">
    <div class="tdc-news-row ">
      <BlogItem>
        <template #img>
          <ImgPriceBox :imageSrc='"src/assets/resources/nang-luc-nghe-nghiep-324x160.jpeg"'></ImgPriceBox>
        </template>
        <template #name>
          Tài liệu
        </template>
        <template #title>
          Bài test DISC – Công cụ “sắc bén” của nhà tuyển dụng
        </template>
        <template #desc>
          Bài test DISC và các bài test online khác đang trở thành một trong những công cụ giúp đánh giá ứng viên hiệu quả....
        </template>
      </BlogItem>
      <BlogItem>
        <template #img>
          <ImgPriceBox :imageSrc='"src/assets/resources/cats1-1-1-324x160.jpg"'></ImgPriceBox>
        </template>
        <template #name>
          Tài liệu
        </template>
        <template #title>
          Sơ đồ tổ chức doanh nghiệp là gì? – Cách tạo sơ đồ tổ chức nhanh chóng
        </template>
        <template #desc>
          Testcenter - Đối với bất kỳ công ty hay doanh nghiệp, cơ cấu tổ chức doanh nghiệp đóng vai trò rất quan trọng. Nó...
        </template>
      </BlogItem>
      <BlogItem>
        <template #img>
          <ImgPriceBox :imageSrc='"src/assets/resources/bo-tri-nhan-su-324x160.jpg"'></ImgPriceBox>
        </template>
        <template #name>
          Tài liệu
        </template>
        <template #title>
          Bỏ túi “bí kíp” bố trí nhân sự hiệu quả dành...
        </template>
        <template #desc>
          Testcenter - Đối với doanh nghiệp, tuyển dụng được nhân sự giỏi và tài năng đã là một việc khó nhưng để bố trí...
        </template>
      </BlogItem>
    </div>
  </div>
  <div class="picture1 pt-5 pb-5 td-pb-row tdc-row td-pb-span3">
    <img src="@/assets/resources/panter.png" alt="">
  </div>
  <div class="blog-container tdc-row td-pb-row">
    <div class=" mt-5 news">
      <div class="tdc-row">
        <div class="td-left-blog td-pb-span8">
          <div class="title-titles">
            <h2 class="title-textTitle"><span>Bài viết mới nhất</span></h2>
          </div>
          <NewResource>
            <template #img>
              <ImgFluid :imageSrc='"src/assets/resources/324x235/equity-theory-la-gi-testcenter-1-324x235.jpg"'></ImgFluid>
            </template>
            <template #title>
              Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết...
            </template>
            <template #button>Tin tức</template>
            <template #desc>Quản trị doanh nghiệp chưa bao giờ là một nhiệm vụ dễ dàng đối với các nhà quản lý. Nhưng với sự “dẫn đường” của học thuyết Equity Theory, nhiều nhà quản lý có...</template>
          </NewResource>
          <NewResource>
            <template #img>
              <ImgFluid :imageSrc='"src/assets/resources/324x235/lean-la-gi-testcenter-324x235.jpg"'></ImgFluid>
            </template>
            <template #title>Phương pháp Lean là gì?</template>
            <template #button>Tin tức</template>
            <template #desc>Bỏ túi những dấu hiệu nhận biết ứng viên không trung thực khi phỏng vấn sẽ giúp quá trình tìm kiếm và lựa chọn nhân tài của các nhà tuyển dụng trở nên thuận...</template>
          </NewResource>
          <NewResource>
            <template #img>
              <ImgFluid :imageSrc='"src/assets/resources/324x235/iq-va-eq-cai-nao-quan-trong-hon-testcenter-324x235.jpg"'></ImgFluid>
            </template>
            <template #title>IQ và EQ: Cái nào quan trọng hơn</template>
            <template #button>Tin tức</template>
            <template #desc>Bộ phận QC nói chung và nhân viên QC đóng vai trò khá quan trọng, giúp thúc đẩy sự phát triển của doanh nghiệp, thông qua việc đảm bảo về chất lượng sản phẩm. Vậy, nhân viên QC là gì? Và đâu là phần mềm giúp thực hiện các bài test nhân viên QC hiệu quả. Mời bạn cùng Testcenter khám phá trong bài viết dưới đây nhé.</template>
          </NewResource>
          <NewResource>
            <template #img>
              <ImgFluid :imageSrc='"src/assets/resources/micromanage-la-gi-testcenter-324x235.jpg"'></ImgFluid>
            </template>
            <template #title>Micromanagement là gì? Dấu hiệu của Micromanagement</template>
            <template #button>Tin tức</template>
            <template #desc>Hiểu rõ Micromanagement là gì sẽ giúp nhà quản lý biết cách áp dụng phương pháp này đúng thời điểm, tránh gây nên tác động xấu tới doanh nghiệp của mình. Vậy, thực hư...</template>
          </NewResource>
        </div>
        <div class="td-right-blog td-pb-span4">
          <div class="card-image">
            <a href="https://example.com">
              <img src="../assets/resources/panter2.png"
                   alt="Image">
            </a>
          </div>
          <div class="form-register mb-5">
            <div class="card-body">
              <div class="title-titles">
                <div class="title-titles">
                  <h2 class="title-textTitle"><span>Bài viết mới nhất</span></h2>
                </div>
              </div>
              <form>
                <p>
                  <label>
                    Họ tên
                    <br>
                    <input value type="text">
                  </label>
                </p>
                <p>
                  <label>
                    Email
                    <br>
                    <input value type="email">
                  </label>
                </p>
                <p>
                  <input type="submit" value="Đăng ký">
                </p>
              </form>
            </div>
          </div>
          <div class="news-content card-news-list">
            <div class="title-titles">
              <div class="title-titles">
                <h2 class="title-textTitle"><span>Tin tức</span></h2>
              </div>
            </div>
            <CardNewList :newsCards="newsCards" :visibleCount="visibleCount" />
          </div>
          <div class="load-more">
            <a type="button" v-if="visibleCount < newsCards.length"
               id="viewMoreBtnNews"
               @click="loadMore">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class=" mt-5 news">
      <div class="tdc-row">
        <div class="td-left-blog card-list-exam td-pb-span8">
          <div class="title-titles">
            <div class="title-titles">
              <h2 class="title-textTitle"><span>Mẫu đề</span></h2>
            </div>
          </div>
          <HiddenExam :newData="newData" :visibleCountData="visibleCountData" />
          <div class="load-more">
            <a type="button" v-if="visibleCountData < newData.length"
               id="viewMoreBtnExam"
               @click="loadMoreData">
              Xem thêm
            </a>
          </div>
        </div>
        <div class="td-right-blog td-pb-span4">
          <div class="news-content card-list">
            <div class="title-titles">
              <div class="title-titles">
                <h2 class="title-textTitle"><span>Tài liệu</span></h2>
              </div>
            </div>
              <HiddenDiv :newsHiddenCards="newsHiddenCards" :visibleCount1="visibleCount1" />
          </div>
          <div class="load-more">
            <a type="button" v-if="visibleCount1 < newsHiddenCards.length"
               id="viewMoreBtnNews"
               @click="loadMore1">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="picture2 mt-5 mb-5 td-pb-row tdc-row">
    <img src="../assets/resources/Thumbnail-Testcenter-30.6-01-1.png" alt="" class="img-fluid">
  </div>
  <div class="news td-pb-row tdc-row">
    <div class="title-titles">
      <div class="td-pb-span12">
        <div class="title-titles ">
          <h2 class="title-textTitle "><span>Bài viết mới nhất</span></h2>
        </div>
      </div>
    </div>
    <div class="tdc-news-row mb-0">
      <BlogItem>
        <template #img>
          <ImgPriceBox :imageSrc='"src/assets/resources/an-toan-thong-tin-696x464.png"'></ImgPriceBox>
        </template>
        <template #name>
          Tài liệu
        </template>
        <template #title>
          KRI là gì và những ứng dụng của KRI trong quản trị doanh nghiệp
        </template>
        <template #desc>
          Chỉ số đo lường kết quả trọng yếu (KRI - Key Result Indicator) là một chỉ số quan trọng. Cùng tìm hiểu ngay KRI là gì nhé!
        </template>
      </BlogItem>
      <BlogItem>
        <template #img>
          <ImgPriceBox :imageSrc='"src/assets/resources/chien-luoc-nhan-su-696x464.jpg"'></ImgPriceBox>
        </template>
        <template #name>
          Tài liệu
        </template>
        <template #title>
          “Bỏ túi” các tiêu chí đánh giá nhân viên kinh doanh hiệu quả nhất hiện nay
        </template>
        <template #desc>
          Đánh giá nhân viên kinh doanh luôn rất được các doanh nghiệp chú trọng, bởi không chỉ đây là vị trí tạo ra doanh thu trực tiếp cho doanh nghiệp mà còn là vị trí rất khó xây dựng các tiêu chí đánh giá một cách hiệu quả. Hiểu được những khó khăn này, bài viết dưới đây, Testcenter sẽ chia sẻ với bạn những tiêu chí đánh giá nhân viên kinh doanh hiệu quả nhất hiện nay.
        </template>
      </BlogItem>
      <BlogItem>
        <template #img>
          <ImgPriceBox :imageSrc='"src/assets/resources/mau-danh-gia-thu-viec-1-696x464.jpeg"'></ImgPriceBox>
        </template>
        <template #name>
          Tài liệu
        </template>
        <template #title>
          Năng lực làm việc là gì? Cách đánh giá năng lực làm việc của nhân viên
        </template>
        <template #desc>
          Bên cạnh một thái độ cầu tiến, một nhân cách tốt thì năng lực làm việc chính là thế mạnh cạnh tranh của từng nhân viên. Năng lực làm việc tốt sẽ là tiền đề giúp nhân viên có thể hoàn thành tốt các công việc được giao, đóng góp tích cực cho doanh nghiệp. Bài viết dưới đây chúng ta sẽ cùng nhau tìm hiểu kỹ hơn về năng lực làm việc là gì, cách đánh giá năng lực làm việc của nhân viên, các nền tảng đánh giá năng lực làm việc của nhân viên hiệu quả.
        </template>
      </BlogItem>
      <BlogItem>
        <template #img>
          <ImgPriceBox :imageSrc='"src/assets/resources/de-test-tuyen-dung-696x464.png"'></ImgPriceBox>
        </template>
        <template #name>
          Tài liệu
        </template>
        <template #title>
          3 mẫu bài test tuyển dụng được doanh nghiệp tin dùng nhất
        </template>
        <template #desc>
          Sử dụng mẫu bài test tuyển dụng đang trở nên phổ biến trong hầu hết doanh nghiệp, đặc biệt là trong tuyển dụng nhân...
        </template>
      </BlogItem>
    </div>
  </div>
</template>
<style scoped>
.td-header .tdc-row {
  padding: 0 !important;
}
.form-logo img {
  padding: 3px 0;
  position: relative;
  vertical-align: middle;
  max-height: 48px;
  width: auto;
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
  position: relative;
  top: 20px;
  left: 10px;
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
  display: grid;
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
  display: table;
  margin-right: auto;
  margin-left: auto;
  text-align: center !important;
}
.people-header-title .button-selection {
  text-align: right !important;
}
.people-header-title .button-selection a {
  text-align: center !important;
}
.people-header-title .td-page-title {
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
  width: 100%;
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
  display: block;
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
  text-align: left;
  line-height: normal;
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
  display: block; /* Ẩn overlay lúc đầu */
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
  display: block; /* Ẩn overlay lúc đầu */
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
@media (max-width: 767px) {
  .td-pb-row [class*=td-pb-span] {
    padding-right: 0;
    padding-left: 0;
    float: none;
    width: 100%;
  }
  .td-module-thumb img {
    width: 200px !important;
    height: 145.06px !important;
  }
  .item-details {
    margin-left: 0 !important;
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
  .dropdown-container {
    display: flex;
    justify-content: center; /* Căn giữa theo chiều ngang */
    align-items: center; /* Căn giữa theo chiều dọc */
    position: relative; /* Đặt làm gốc cho menu */
    top: 217px !important;
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
  .dropdown-container {
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

.dropdown-container {
  text-align: right;
  position: relative;
  top: -2px;
  right: 0;
  width: 100%;
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

.dropdown-menu {
  border-radius: unset;
  border: none;
  display: none;
  position: absolute;
  right: 0;
  top: 100%;
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
  margin: 4px 0 0;
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

