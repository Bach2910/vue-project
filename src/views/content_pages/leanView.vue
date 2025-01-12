<script setup>
import { ref, computed } from 'vue';
const isTocOpen = ref(false);
const toggleContent = () => {
  isTocOpen.value = !isTocOpen.value;
};
const articles = ref([
  {
    link: "Tin tức",
    url: "{{route('news')}}",
    summary: "Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1-218x150.jpg",
  },
  {
    link: "Tài liệu",
    url: "{{route('news')}}",
    summary: "Lean là gì? Phương pháp ứng dụng mô hình Lean để tối ưu chi phí cho doanh nghiệp",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-218x150.jpg",
  },
  {
    link: "Tin tức",
    url: "{{route('news')}}",
    summary: "Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1-218x150.jpg",
  },
  {
    link: "Tin tức",
    url: "{{route('news')}}",
    summary: "Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1-218x150.jpg",
  },
  {
    link: "Tin tức",
    url: "{{route('news')}}",
    summary: "Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1-218x150.jpg",
  },
  {
    link: "Tin tức",
    url: "{{route('news')}}",
    summary: "Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1-218x150.jpg",
  }, {
    link: "Tin tức",
    url: "{{route('news')}}",
    summary: "Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1-218x150.jpg",
  },
  {
    link: "Tài liệu",
    url: "{{route('news')}}",
    summary: "Lean là gì? Phương pháp ứng dụng mô hình Lean để tối ưu chi phí cho doanh nghiệp",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-218x150.jpg",
  },
  {
    link: "Tài liệu",
    url: "{{route('news')}}",
    summary: "Lean là gì? Phương pháp ứng dụng mô hình Lean để tối ưu chi phí cho doanh nghiệp",
    image_url: "https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-218x150.jpg",
  },
]);

const articlesPerPage = 3;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(articles.value.length / articlesPerPage));

const currentArticles = computed(() => {
  const startIndex = (currentPage.value - 1) * articlesPerPage;
  const endIndex = currentPage.value * articlesPerPage;
  return articles.value.slice(startIndex, endIndex);
});

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--;
};
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++;
};
</script>

<template>
  <div class="td-container-wrap">
    <div class="link">
      <span><a href="#" >Trang chủ</a> > Tin tức</span>
    </div>
    <div class="first-title">
      <ul class="td-category">
        <li class="entry-category">
          <a href="#">Tin tức</a>
        </li>
      </ul>
      <h2>Lean là gì? Phương pháp ứng dụng mô hình Lean để tối ưu chi phí cho doanh nghiệp</h2>
      <h6>Bởi - </h6>
      <div class="button-inform">
        <span type="button" class="facebook"><i class="fa-brands fa-facebook-f"></i></span>
        <span type="button" class="twitter"><i class="fa-brands fa-twitter"></i></span>
        <span type="button" class="pinterest"><i class="fa-brands fa-pinterest-p"></i></span>
        <span type="button" class="whatsapp"><i class="fa-brands fa-whatsapp"></i></span>
        <span type="button" class="linkedin"><i class="fa-brands fa-linkedin-in"></i></span>
        <span type="button" class="tumblr"><i class="fa-brands fa-tumblr"></i></span>
      </div>
      <p>Nắm được khái niệm <a href="{{route('blog_lean')}}"><b>Lean là gì</b></a> sẽ giúp nhà quản trị tìm ra phương pháp để giảm
        thiểu chi phí sản xuất nhằm tối ưu lợi nhuận hiệu quả. Chi tiết về khái niệm Lean cũng như những cách
        ứng dụng mô hình này cho tổ chức,
        <a href=""><b>Testcenter.vn</b></a> sẽ giúp bạn khai thác sâu trong bài viết thuộc chuyên mục tin tức
        dưới đây!</p>
      <div class="toc-wrapper">
        <div class="name">
          <h5>Table of Contents</h5>
          <div class="icon" @click="toggleContent">☰</div>
        </div>
        <div :class="['toc', { open: isTocOpen }]" id="toc">
          <ul>
            <li><a href="#section1">1. Tổng quan về Lean</a>
              <ul>
                <li><a href="#section1-1">1.1. Nguồn gốc hình thành của mô hình Lean</a></li>
                <li><a href="#section1-2">1.2. Lean là gì?</a></li>
                <li><a href="#section1-3">1.3. Sự khác biệt giữa mô hình sản xuất truyền thống với mô
                  hình Lean là gì?</a></li>
              </ul>
            </li>
            <li><a href="#section2">2. Nguyên tắc cốt lõi của mô hình Lean là gì?</a></li>
            <li><a href="#section3">3. Lợi ích mà mô hình Lean mang lại cho doanh nghiệp</a></li>
            <li><a href="#section4">4. Đối tượng áp dụng của mô hình Lean là gì?</a></li>
            <li><a href="#section5">5. Sử dụng mô hình Lean để nhận diện các loại lãng phí trong sản
              xuất</a>
              <ul>
                <li><a href="#section5-1">5.1 Lỗi sản phẩm (Defects)</a></li>
                <li><a href="#section5-2">5.2 Sản xuất dư thừa (Over Production)</a></li>
                <li><a href="#section5-3">5.3 Thời gian chờ đợi (Waiting)</a></li>
                <li><a href="#section5-4">5.4 Không tận dụng tài năng (Non-utilized Talent)</a></li>
                <li><a href="#section5-5">5.5 Vận chuyển (Transportation)</a></li>
                <li><a href="#section5-6">5.6 Chuyển động (Motion)</a></li>
                <li><a href="#section5-7">5.7 Quy trình dư thừa (Extra Process)</a></li>
                <li><a href="#section5-8">5.8 Kho hàng (Inventory)</a></li>
              </ul>
            </li>
            <li><a href="#section6">Phương pháp ứng dụng để phát huy tối đa hiệu quả của Lean trong doanh
              nghiệp</a>
              <ul>
                <li><a href="#section6-1">6-1. Thiết lập chiến lược mục tiêu rõ ràng</a></li>
                <li><a href="#section6-2">6-2. Kiên định với mô hình Lean</a></li>
                <li><a href="#section6-4">6-4. Đặt tiêu chuẩn rõ ràng ngay từ đầu</a></li>
                <li><a href="#section6-5">6-5. Tập trung vào nhóm lãnh đạo tuyến đầu</a></li>
                <li><a href="#section6-6">6-6. Phân bổ hợp lý các nguồn lực</a></li>
                <li><a href="#section6-7">6-7. Sát sao ngay từ quy trình tuyển dụng</a></li>
              </ul>
            </li>
            <li><a href="#section7">7. Tổng kết</a></li>
          </ul>
        </div>
      </div>
      <!-- Content Sections -->
      <section id="section1">
        <h2>Tổng quan về Lean</h2>
        <p>Đối với Lean, trước khi đi vào tìm hiểu những phương pháp ứng dụng hiệu quả mô hình này để tối ưu chi
          phí cho doanh nghiệp, chúng ta sẽ cần nắm được một thông tin cơ bản về nguồn gốc hình thành và khái
          niệm Lean:
        </p>
      </section>
      <br>
      <section id="section1-1">
        <h3>Nguồn gốc hình thành của mô hình Lean</h3>
        <p>Vào những năm 1980, nhiều công ty sản xuất phương Tây nhận ra rằng họ đang đánh mất thị phần với tốc
          độ nhanh chóng vào tay các doanh nghiệp Nhật Bản. Từ đây, một cuộc nghiên cứu sự khác biệt giữa
          Toyota – tập đoàn ô tô hàng đầu Nhật Bản – với những tổ chức đến từ khu vực Mỹ, châu Âu – đã được mở
          ra.</p>
        <p>Sau đó, kết quả của quá trình điều tra chỉ ra rằng việc Toyota tập trung loại bỏ tối đa yếu tố gây
          lãng phí thay vì sản xuất ồ ạt trong khi hoạt động giúp thương hiệu này thu về khoản lợi nhuận khổng
          lồ. Cũng nhờ sự kiện nói trên, thuật ngữ Lean Manufacturing (tên viết tắt: Lean) hay Toyota
          Production System – quy trình sản xuất tinh gọn – đã chính thức ra đời.</p>
      </section>
      <br>
      <section id="section1-2">
        <h3>Lean là gì?</h3>
        <p>Vậy, Lean là gì? Lean là mô hình quản trị doanh nghiệp theo triết lý tinh gọn có nguồn gốc từ lĩnh
          vực sản xuất và dần được ứng dụng phổ biến trong nhiều ngành nghề khác nhau. Mô hình ra đời dựa trên
          ý tưởng về cải thiện năng suất cũng như giảm thiểu lãng phí khi kinh doanh.</p>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-1.jpg" alt=""
             style="width: 100%;height:430px"><br>
        <i>Lean là mô hình quản trị tinh gọn có nguồn gốc từ lĩnh vực sản xuất</i>
      </section>
      <br>
      <section id="section1-3">
        <h3>Sự khác biệt giữa mô hình sản xuất truyền thống với mô hình Lean là gì?</h3>
        <p>So với mô hình sản xuất truyền thống, Lean sở hữu những điểm khác biệt rõ ràng như sau:</p>
        <table>
          <tr>
            <th>Tiêu chí</th>
            <th>Sản xuất truyền thống</th>
            <th>Sản xuất tinh gọn</th>
          </tr>
          <tr>
            <td>Triết lý</td>
            <td>Tập trung vào sản xuất hàng loạt và tối đa hóa tài nguyên có sẵn</td>
            <td>Tập trung vào tạo giá trị cho khách hàng, loại bỏ yếu tố lãng phí và tối ưu quy trình sản xuất</td>
          </tr>
          <tr>
            <td>Chiến lược</td>
            <td>Sản xuất được thúc đẩy nhờ dự báo doanh số</td>
            <td>Sản xuất được thúc đẩy nhờ nhu cầu của khách hàng</td>
          </tr>
          <tr>
            <td>Tầm nhìn và mục tiêu</td>
            <td>Tập trung vào lợi nhuận ngắn hạn và tăng năng suất</td>
            <td>Tập trung vào lợi nhuận dài hạn, tạo giá trị cho khách hàng, tăng chất lượng, giảm lãng phí và xây dựng môi trường làm việc tốt</td>
          </tr>
          <tr>
            <td>Quy trình sản xuất</td>
            <td>Quy trình sản xuất không linh hoạt, các công đoạn bị tách rời</td>
            <td>Quy trình sản xuất linh hoạt, các công đoạn liên mạch</td>
          </tr>
          <tr>
            <td>Đổi mới và cải tiến</td>
            <td>Nếu quy trình sản xuất hiện tại ổn định, doanh nghiệp sẽ không thay đổi mà tập trung <a href="" class="high-light">đào tạo nội bộ</a> yếu tố con người để giảm thiểu lỗi sai</td>
            <td>Doanh nghiệp không ngừng cải tiến quy trình sản xuất và con người</td>
          </tr>
        </table>
      </section>
      <br>
      <section id="section2">
        <h2>Nguyên tắc cốt lõi của mô hình Lean là gì?</h2>
        <p>Mô hình Lean hoạt động dựa trên 05 nguyên tắc cốt lõi, bao gồm:</p>
        <ul>
          <li><b>Nguyên tắc 01:</b> Tập trung vào quy trình sản xuất.</li>
          <li><b>Nguyên tắc 02:</b> Tối đa hóa giá trị và tối thiểu hóa lãng phí.</li>
          <li><b>Nguyên tắc 03:</b> Tiêu chuẩn hóa mọi nhiệm vụ công việc.</li>
          <li><b>Nguyên tắc 04:</b> Tạo dòng chảy sản xuất.</li>
          <li><b>Nguyên tắc 05:</b> Nhanh chóng giải quyết vấn đề.</li>
        </ul>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-2.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Mô hình sản xuất tinh gọn hoạt động dựa trên 05 nguyên tắc cốt lõi</i>
      </section>
      <br>
      <section id="section3">
        <h2>Lợi ích mà mô hình Lean mang lại cho doanh nghiệp</h2>
        <p>Khi ứng dụng Lean, mô hình sản xuất tinh gọn này mang tới cho doanh nghiệp hàng loạt lợi ích như:</p>
        <ul>
          <li>Tối ưu hóa dòng chảy.</li>
          <li>Thúc đẩy cải tiến liên tục.</li>
          <li>Đưa ra quyền hạn và trách nhiệm với từng đội ngũ.</li>
          <li>Điều phối quy trình làm việc giữa các đội ngũ.</li>
          <li>Mở rộng quy mô đến danh mục đầu tư.</li>
          <li>Thúc đẩy sáng kiến chiến lược.</li>
        </ul>
      </section>
      <br>
      <section id="section4">
        <h2>Đối tượng áp dụng của mô hình Lean là gì?</h2>
        <p>Trên thực tế, việc ứng dụng LEAN không chỉ gói gọn trong phạm vi doanh nghiệp và thị trường kinh doanh. Thay vào đó, mọi ngành nghề cung cấp sản phẩm/dịch vụ như ngân hàng, bệnh viện, hành chính, du lịch, chăm sóc sức khỏe v.vv.. đều được xem là đối tượng phù hợp của mô hình này.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-3.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Mọi ngành nghề có cung cấp sản phẩm hoặc dịch vụ đều có thể áp dụng Lean</i>
      </section>
      <br>
      <section id="section5">
        <h2>Sử dụng mô hình Lean để nhận diện các loại lãng phí trong sản xuất</h2>
        <p>Dựa trên sự phổ biến của các loại lãng phí, đồng sáng lập của Lean Enterprise Institute – Jean Cunningham – cùng các nhà nghiên cứu khác đã phát triển và trình bày mô hình tổng hợp D.O.W.N.T.I.M.E với nội dung như sau:</p>
      </section>
      <br>
      <section id="section5-1">
        <h3>Lỗi sản phẩm (Defects)</h3>
        <p>Defects là những sản phẩm bị lỗi trong quá trình doanh nghiệp sản xuất. Đây được xem như yếu tố gây lãng phí hàng đầu bởi chúng không hề tạo ra bất cứ giá trị nào cho tổ chức.</p>
      </section>
      <br>
      <section id="section5-2">
        <h3>Sản xuất dư thừa (Over Production)</h3>
        <p>Trong một số trường hợp, sản xuất dư thừa chính là nguồn lãng phí lớn nhất do hoạt động này gây nên tình trạng gia tăng tồn kho, lao động, nguyên liệu v.v.. Vấn đề này thường xảy ra với các doanh nghiệp có quy trình phân phối không cân đối hoặc sở hữu lô hàng lớn.</p>
      </section>
      <br>
      <section id="section5-3">
        <h3>Thời gian chờ đợi (Waiting)</h3>
        <p>Waiting là khoảng thời gian mà nhân công phải chờ đợi để một sự kiện nào đó xảy ra. Lúc này, họ sẽ không thể tạo bất cứ giá trị hữu ích nào cho doanh nghiệp, khiến quỹ thời gian trôi qua lãng phí.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-4.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Thời gian chờ đợi là một trong các loại lãng phí tiêu biểu trong sản xuất</i>
      </section>
      <br>
      <section id="section5-4">
        <h3>Không tận dụng tài năng (Non-utilized Talent)</h3>
        <p>Non-utilized Talent xảy ra khi doanh nghiệp không nhận thấy và không tận dụng một cách hiệu quả những kỹ năng và khả năng mà nhân viên có thể mang lại.</p>
      </section>
      <br>
      <section id="section5-5">
        <h3>Vận chuyển (Transportation)</h3>
        <p>Transportation đề cập tới khoảng thời gian và công sức dùng cho việc di chuyển nguyên vật liệu hoặc hàng hóa trong nội bộ nhà máy hay giữa các địa điểm với nhau nhưng lại không tạo được giá trị gì. Vấn đề này sẽ biểu hiện rõ ràng hơn ở những doanh nghiệp quy mô lớn và hoạt động ở nhiều cơ sở.</p>
      </section>
      <br>
      <section id="section5-6">
        <h3>Chuyển động (Motion)</h3>
        <p>Motion là việc nhân viên phải dành nhiều thời gian để di chuyển từ nơi này tới nơi khác. Tuy nhiên, trong quá trình đó, họ không tạo ra giá trị cho sản phẩm/dịch vụ của doanh nghiệp.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-5.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Việc di chuyển từ nơi này sang nơi khác mà không tạo giá trị gây lãng phí thời gian</i>
      </section>
      <br>
      <section id="section5-7">
        <h3>Quy trình dư thừa (Extra Process)</h3>
        <p>Hiện nay, một số quy trình sản xuất có tồn tại các bước không đóng góp bất cứ giá trị nào cho tổ chức. Lúc này, doanh nghiệp cần tiến hành xem xét lại khâu vận hành này để xác định bước dư thừa và tiến tới loại bỏ nhằm tối ưu <a href="#" class="high-light">hiệu suất làm việc</a> cho công ty.</p>
      </section>
      <br>
      <section id="section5-8">
        <h3>Kho hàng (Inventory)</h3>
        <p>Mặc dù duy trì lượng hàng tồn kho nhất định là điều cần thiết trong một vài tình huống, giúp đảm bảo có thể cung ứng sản phẩm/dịch vụ đúng thời điểm cho khách hàng, vậy nhưng đây vẫn được xem như một loại lãng phí do làm tăng chi phí lưu trữ, quản lý của doanh nghiệp.</p>
      </section>
      <br>
      <section id="section6">
        <h2>Phương pháp ứng dụng để phát huy tối đa hiệu quả của Lean trong doanh nghiệp</h2>
        <p>Tùy vào từng vấn đề muốn giải quyết mà mỗi doanh nghiệp có thể lựa chọn một hay nhiều phương pháp ứng dụng Lean dưới đây:</p>
      </section>
      <br>
      <section id="section6-1">
        <h3>Thiết lập chiến lược mục tiêu rõ ràng</h3>
        <p>Để Lean phát huy tối đa hiệu quả, trước hết, doanh nghiệp cần có mục tiêu rõ ràng và truyền đạt cho nhân sự thấy tầm quan trọng của những yếu tố này. Từ đó, họ sẽ hiểu được vai trò của mô hình sản xuất tinh gọn trong việc giúp tổ chức hoàn thành kế hoạch và chủ động thực hiện.</p>
      </section>
      <br>
      <section id="section6-2">
        <h3>Kiên định với mô hình Lean</h3>
        <p>Các nhà lãnh đạo cấp cao của doanh nghiệp cần thể hiện rõ sự kiên định với mô hình sản xuất tinh gọn qua một số hành vi như truyền đạt tầm nhìn rõ ràng về việc ứng dụng Lean, thường xuyên đến xưởng sản xuất, tự tìm hiểu nguyên nhân gây vấn đề trước khi khiển trách cấp dưới v.vv..</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-6.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Nhà quản trị cần thiết lập chiến lược mục tiêu rõ ràng để Lean phát huy hiệu quả</i>
      </section>
      <br>
      <section id="section6-3">
        <h3>Vạch ra chuỗi giá trị từ đầu đến cuối</h3>
        <p>Với việc vạch ra chuỗi giá trị từ đầu đến cuối (nhập nguyên vật liệu thô → giao thành phẩm), nếu được sử dụng đúng cách, phương pháp này sẽ hướng doanh nghiệp tới một lộ trình cải tiến rõ ràng và đơn giản hơn, giúp hạn chế tối đa tình trạng bị xao nhãng hay “lạc đường” trong quy trình sản xuất.</p>
      </section>
      <br>
      <section id="section6-4">
        <h3>Đặt tiêu chuẩn rõ ràng ngay từ đầu</h3>
        <p>Tiêu chuẩn hóa môi trường làm việc cũng như bản thân công việc được xem như nền tảng cốt lõi của mô hình Lean. Theo đó, nhà quản trị có thể lựa chọn quy tắc 5S làm điểm khởi đầu cho phương pháp này. Việc đặt ra những tiêu chuẩn rõ ràng ngay từ lúc này sẽ góp phần ổn định quy trình sản xuất và mang lại chất lượng sản phẩm/dịch vụ nhất quán hơn, từ đó cung cấp cơ sở để thực hiện nhiều cải tiến khác.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-7.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Tiêu chuẩn hóa môi trường làm việc là nền tảng cốt lõi của mô hình Lean</i>
      </section>
      <br>
      <section id="section6-5">
        <h3>Tập trung vào nhóm lãnh đạo tuyến đầu</h3>
        <p><a href="#" class="high-light">Lãnh đạo</a> tuyến đầu là những người có ảnh hưởng lớn nhất về khía cạnh văn hóa trong các mô hình cải tiến như Lean. Không chỉ giữ vai trò giám sát, quản lý, dẫn đầu nhóm v.vv.., họ còn nhận được sự tin tưởng, tín nhiệm và tiếp nhận báo cáo công việc hằng ngày trực tiếp từ nhân viên.</p>
        <p>Chính vì vậy, nhóm đối tượng này cần được cung cấp những công cụ quản lý, đào tạo kỹ năng lãnh đạo và kiến thức về cải tiến để giúp họ có thể tạo ra nhiều “lực đẩy cải tiến” hơn cho nội bộ doanh nghiệp.</p>
      </section>
      <br>
      <section id="section6-6">
        <h3>Phân bổ hợp lý các nguồn lực</h3>
        <p>Một trong những lý do phổ biến khiến các doanh nghiệp ứng dụng không thành công mô hình sản xuất tinh gọn đến từ việc thiếu thốn nguồn lực. Do đó, mặc dù nhân sự tại mọi phòng ban của tổ chức đã phải đảm nhận hàng loạt nhiệm vụ riêng nhưng khi quyết định dùng Lean, nhà quản trị vẫn cần đảm bảo đầy đủ yếu tố này.</p>
        <p>Một số cách thức phân bổ phổ biến thường được nhiều công ty áp dụng có thể kể đến như thuê ngoài đội ngũ chuyên gia, tư vấn, huấn luyện về Lean hay sử dụng công cụ phần mềm giúp tiết kiệm tối đa thời gian, công sức và chi phí.</p>
      </section>
      <section id="section6-7">
        <h3>Sát sao ngay từ quy trình tuyển dụng</h3>
        <p>Bên cạnh những phương pháp kể trên, sát sao ngay từ quy trình tuyển dụng cũng chính là một cách hiệu quả để triển khai thành công mô hình sản xuất tinh gọn mà doanh nghiệp có thể tham khảo.</p>
        <p>Theo nghiên cứu của Hiệp hội Quản lý Nguồn nhân lực, chi phí trung bình để thay thế nhân viên cũ khi họ rời đi mà mỗi tổ chức phải bỏ ra tương đương từ 06 đến 09 tháng lương trả cho nhân viên thông thường. Như vậy, nếu tiến hành kiểm soát chặt chẽ ngay từ bước tuyển dụng ban đầu, nhà quản trị sẽ hạn chế được tối đa <a href="" class="high-light">tỷ lệ nghỉ việc</a> của nhân sự sau này, góp phần tối ưu chi phí cho doanh nghiệp.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/01/lean-la-gi-testcenter-8.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Sát sao quy trình tuyển dụng giúp doanh nghiệp tiết kiệm tối đa chi phí nhân sự</i>
        <p>Với mong muốn có thể cung cấp cho mọi công ty tại Việt Nam công cụ test năng lực ứng viên toàn diện để tiết kiệm thời gian và nâng cao chất lượng nhân sự, Testcenter.vn đã ra đời. Được ứng dụng nền tảng công nghệ hiện đại, Testcenter.vn cho phép nhà quản trị dễ dàng tạo bài kiểm tra online không giới hạn số lượng theo quy trình chuẩn quốc tế.</p>
        <p>Thông qua quá trình tổ chức bài test năng lực, các tổ chức sẽ có thể nhìn nhận một cách chính xác điểm mạnh, điểm yếu cũng như sự phù hợp của ứng viên với doanh nghiệp; từ đó đưa ra lộ trình, phương pháp đào tạo đúng hướng. Không chỉ vậy, hiểu rõ<a href="" class="high-light">ứng viên</a> còn giúp nhà quản trị phân công nhiệm vụ hợp lý, tạo điều kiện để mỗi cá nhân có cơ hội phát huy tối đa khả năng làm việc của mình.</p>
      </section>
      <br>
      <section id="section7">
        <h2>Tổng kết</h2>
        <p>Như vậy, bài viết do Testcenter.vn mang tới ngày hôm nay đã giúp bạn trả lời câu hỏi<b>“Lean là gì?”</b> cùng những lợi ích mà mô hình này mang lại cho doanh nghiệp. Nhìn chung, việc ứng dụng hiệu quả Lean trong thực thế được đánh giá ở mức tương đối khó khăn.</p>
        <p>Chính bởi vậy, nhà quản trị cần phải đưa ra những tiêu chí rõ ràng và hành động nhất quán với sự đoàn kết từ toàn thể nhân viên để giúp Lean phát huy hiệu quả một cách tối đa nhất!</p>
        <p><b>TestCenter.vn – Nền tảng đánh giá năng lực nhân sự cung cấp giải pháp test online dành cho doanh nghiệp Việt Nam. TestCenter.vn với ngân hàng 300+ đề thi tuyển dụng nhân sự mẫu hỗ trợ quy trình đánh giá năng lực nhân sự. Tự hào đồng hành cùng +500 khách hàng doanh nghiệp hàng đầu như Honda, Sailun, Petrolimex, Ngân hàng TMCP Hàng Hải Việt Nam (MSB),…</b></p>
        <p><b>Doanh nghiệp sẽ tiết kiệm được 30% chi phí so với cách tuyển dụng truyền thống khi sử dụng Testcenter. Vui lòng <a href="" class="highlight">ĐĂNG KÝ TẠI ĐÂY</a> để nhận tư vấn 1-1 về các tính năng của Nền tảng đánh giá năng lực nhân sự TestCenter</b></p>
      </section>
      <br>
      <div class="end-first">
        <div class="tag">
          TAGS
        </div>
        <button type="button" class="btn btn-outline-secondary">lean là gì
        </button>
      </div>
      <div class="button-inform">
        <span type="button" class="facebook"><i class="fa-brands fa-facebook-f"></i></span>
        <span type="button" class="twitter"><i class="fa-brands fa-twitter"></i></span>
        <span type="button" class="pinterest"><i class="fa-brands fa-pinterest-p"></i></span>
        <span type="button" class="whatsapp"><i class="fa-brands fa-whatsapp"></i></span>
        <span type="button" class="linkedin"><i class="fa-brands fa-linkedin-in"></i></span>
        <span type="button" class="tumblr"><i class="fa-brands fa-tumblr"></i></span>
      </div>
      <div class="next-new d-flex justify-content-between gap-6 ">
        <div class="left-new w-40 text-start">
          <span class="next-button">Bài trước</span><br>
          <a href="#">Tuyển Mass là gì? Nguyên tắc vàng để tuyển Mass hiệu quả</a>
        </div>
        <div class="right-new w-30 text-end">
          <span class="next-button">Bài tiếp theo</span><br>
          <a href="#">Lean là gì? Phương pháp ứng dụng mô hình Lean để tối ưu chi phí cho doanh nghiệp</a>
        </div>
      </div>
      <br>
      <div class="title-titles">
        <div class="title-titles">
          <h2 class="title-textTitle">
            <span>Bài viết liên quan</span>
            <span class="title-more">Xem thêm</span>
          </h2>
        </div>
      </div>
      <div class="card-main-footer">
        <div class="card-body-footer" id="articleContainer">
          <div v-for="article in currentArticles" :key="article.summary" class="card">
            <div class="img-wrapper">
              <img :src="article.image_url" alt="" class="img-fluid" />
              <a :href="article.url" type="button" class="link">{{ article.link }}</a>
            </div>
            <div class="item-detail">
              <a :href="article.url">{{ article.summary }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="next-button">
        <a type="button" class="prePage" @click="prevPage" :disabled="currentPage === 1"><i class="fa-solid fa-angle-left"></i></a>
        <a type="button" class="nextPage" @click="nextPage" :disabled="currentPage === totalPages"><i class="fa-solid fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.td-category{
  list-style: none;
  font-family: 'Open Sans', 'Open Sans Regular', sans-serif;
  font-size: 10px;
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 1;
}
.td-category li {
  display: inline-block;
  margin: 0 5px 5px 0;
  line-height: 1;
}
.td-category a{
  color: #fff;
  background-color: #222222;
  padding: 3px 6px 4px 6px;
  white-space: nowrap;
  display: inline-block;
}
ul{
  padding: 0;
}
.td-title{
  width:200px;
}
.td-header .tdc-row {
  padding: 0 !important;
}
.prePage{
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
.nextPage{
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
  padding: 10px 0 5px 0;
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
  margin-top: 20px;
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
  .first-title{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .toc-wrapper{
    width:400px
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
