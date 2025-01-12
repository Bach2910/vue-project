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
      <h1>Dấu hiệu nhận biết ứng viên không trung thực nhà quản trị cần biết</h1>
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
            <li><a href="#section1">1. Những dấu hiệu nhận biết ứng viên không trung thực</a>
              <ul>
                <li><a href="#section1-1">1.1. Ngôn ngữ cơ thể bất thường</a></li>
                <li><a href="#section1-2">1.2. Trả lời vấn đề một cách mơ hồ</a></li>
                <li><a href="#section1-3">1.3. Tập trung quá nhiều vào thành tựu nhóm</a></li>
                <li><a href="#section1-4">1.4. Có xu hướng “phòng thủ” trước những câu hỏi khó</a></li>
              </ul>
            </li>
            <li><a href="#section2">2. Cách xử lý khi nhận thấy dấu hiệu ứng viên không trung thực</a>
              <ul>
                <li><a href="#section2-1">2.1. Dành thời gian nghiên cứu trước CV của ứng viên</a></li>
                <li><a href="#section2-2">2.2. Sử dụng các câu hỏi mang tính chi tiết</a></li>
                <li><a href="#section2-3">2.3. Quan sát thái độ và ngôn ngữ cơ thể ở ứng viên</a></li>
                <li><a href="#section2-4">2.4. Tìm hiểu trước về ứng viên trên các nền tảng mạng xã
                  hội</a></li>
                <li><a href="#section2-5">2.5. Xác định mục tiêu và kết quả mong đợi rõ ràng cho
                  nhânLiên hệ với người tham chiếu</a></li>
                <li><a href="#section2-6">2.6. Dựa vào trực giác và kinh nghiệm thực tế của bản thân</a>
                </li>
                <li><a href="#section2-6">2.7. Sử dụng bài đánh giá năng lực ứng viên</a></li>
              </ul>
            </li>
            <li><a href="#section3">3. Tổng kết
            </a></li>
          </ul>
        </div>
      </div>
      <!-- Content Sections -->
      <section id="section1">
        <h2><strong>Những dấu hiệu nhận biết ứng viên không trung thực</strong></h2>
        <p>Để nâng cao giá trị của bản thân, tạo lợi thế cũng như thu hút sự chú ý của các nhà tuyển dụng mà
          hiện nay, không ít ứng viên đã lựa chọn cách không trung thực trong CV và phỏng vấn qua việc “thổi
          phồng” những gì họ có. Thực trạng này diễn ra ngày càng phổ biến đã khiến nhiều doanh nghiệp bận rộn
          và gặp khó khăn hơn khi tìm kiếm, lựa chọn nhân tài.
        </p>
        <p>Dưới đây chính là một số dấu hiệu nhận biết ứng viên không trung thực khi phỏng vấn:</p>
      </section>
      <br>
      <section id="section1-1">
        <h3><strong>Ngôn ngữ cơ thể bất thường</strong></h3>
        <p>Không chỉ ứng viên, đa số chúng ta thường đều vô thức để lộ một vài hành động ngẫu nhiên trong quá
          trình tương tác, trò chuyện với người đối diện. Khi nói dối, ứng viên sẽ thường có tâm trạng bứt
          rứt, bồn chồn đi kèm cùng một số động tác như cọ xát hai tay, gãi cổ, nghịch tóc v.vv..</p>
        <p>Cùng với đó, việc họ liên tục đảo mắt, tránh giao tiếp bằng ánh mắt, giọng nói thay đổi khi trả lời
          câu hỏi, âm vực cao, nghẹt thở, nói lắp bắp, thường xuyên nuốt nước bọt v.vv.. cũng được xem như
          những dấu hiệu thường thấy để nhận biết tính đúng – sai trong lời nói của họ.</p>
        <p>Tuy nhiên, nhà tuyển dụng cần chú ý rằng đây cũng có thể là biểu hiện của sự lo lắng, căng thẳng khi
          ứng viên tham gia phỏng vấn. Do vậy, bạn cần kết hợp linh hoạt giữa cả dấu hiệu cùng bối cảnh hiện
          tại để đưa ra nhận định chính xác nhất về ứng viên.</p>
        <p>>>><span class="bolder">Xem thêm:</span><a href="" class="high-light"> Ứng viên là gì? Những phương
          pháp đánh giá ứng viên hiệu quả</a></p>
      </section>
      <br>
      <section id="section1-2">
        <h3><strong>Trả lời vấn đề một cách mơ hồ</strong></h3>
        <p>Trong quá trình phỏng vấn, nhà tuyển dụng có thể gặp phải tình huống đặt câu hỏi nhưng ứng viên trả
          lời không đúng trọng tâm hoặc sai vấn đề. Đây không chỉ là dấu hiệu cho thấy ứng viên chưa chuẩn bị
          kỹ càng mà còn là minh chứng cho việc họ không nói sự thật.</p>
        <p>Đối với những câu hỏi mang tính chuyên môn cao, ứng viên có năng lực thường đưa ra bằng chứng liên
          quan tới số liệu, kết quả công việc đạt được thay vì các thông tin mơ hồ.</p>
        <p>Tất nhiên, chúng ta không thể loại trừ khả năng ứng viên đang rơi vào trạng thái lo lắng khi phỏng
          vấn. Khi đối diện với thực tế này, nhà tuyển dụng hãy thúc đẩy hoặc tạo cơ hội để ứng viên đi sâu
          hơn vào chi tiết thông qua các câu hỏi nhằm xác định tâm lý hiện tại của họ (hồi hộp hay nói
          dối).</p>
        <br>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/03/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-2.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Nhà tuyển dụng nên lưu tâm tới những ứng viên trả lời vấn đề quá mức mơ hồ</i>
      </section>
      <br>
      <section id="section1-3">
        <h3><strong>Tập trung quá nhiều vào thành tựu nhóm</strong></h3>
        <p>Mặc dù là một yếu tố cần thiết để đưa ra đánh giá, vậy nhưng với những ứng viên tập trung quá nhiều
          vào thành tích của họ với tư cách là thành viên đội nhóm, nhà tuyển dụng vẫn nên dành nhiều sự chú
          ý. Ở trường hợp này, khi ứng viên đề cập đến một dự án tập thể, bạn hãy hỏi về vai trò cụ thể của họ
          là gì và yêu cầu họ nói cho bạn biết những công việc họ đã thực hiện một mình trong nhóm.</p>
      </section>
      <br>
      <section id="section1-4">
        <h3><strong>Có xu hướng “phòng thủ” trước những câu hỏi khó</strong></h3>
        <p>Trong một vài trường hợp, ứng viên có thể gây “khó dễ” cho bên tuyển dụng khi bạn đặt những câu hỏi
          liên quan tới kiến thức, kinh nghiệm chuyên môn của họ. Nếu ứng viên bạn đang phỏng vấn có xu hướng
          cố tình “lướt” qua những điều bạn đang quan tâm hoặc làm chệch hướng câu hỏi, hãy chú ý tới họ bởi
          đây có thể là biểu hiện của việc không trung thực.</p>
        <p>>>><span class="bolder">Xem thêm:</span><a href="" class="high-light"> Chuyên môn là gì? Cách đánh
          giá chuyên môn trong phỏng vấn – Testcenter</a></p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/03/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-3.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Ứng viên nói dối thường có xu hướng bỏ qua những câu hỏi khó từ nhà tuyển dụng</i>
      </section>
      <br>
      <section id="section2">
        <h2><strong>Cách xử lý khi nhận thấy dấu hiệu ứng viên không trung thực</strong></h2>
        <p>Sau khi bỏ túi một số dấu hiệu nhận biết ứng viên không trung thực, việc nhà tuyển dụng cần thực hiện
          ngay tiếp theo là tìm ra giải pháp xử lý tình trạng này. Bạn có thể tham khảo 07 cách loại bỏ các
          “Pinocchio” và nâng cao hiệu quả tuyển dụng, sàng lọc nhân tài như sau:</p>
      </section>
      <br>
      <section id="section2-1">
        <h3><strong>Dành thời gian nghiên cứu trước CV của ứng viên</strong></h3>
        <p>Dành thời gian nghiên cứu trước CV của ứng viên là bước đầu tiên và không thể thiếu mà nhà tuyển dụng
          cần làm trước khi tiến hành phỏng vấn chính thức. Trên thực tế, bạn không thể xem xét kỹ lưỡng mọi
          hồ sơ do người ứng tuyển gửi tới. Bởi vậy, việc trang bị sẵn kỹ năng tổng hợp, đọc đúng trọng tâm,
          ghi chú lại những vấn đề quan trọng v.vv.. sẽ trở nên vô cùng cần thiết trong tình huống này.</p>
        <p>Nhà tuyển dụng cần tỉnh táo và phân biệt chính xác các nội dung được trình bày trong CV. Đôi khi, CV
          có nội dung tương tự nhau, không trình bày vấn đề một cách cụ thể mà chỉ nhắc đến khái quát, sử dụng
          ngôn từ “sáo rỗng” v.vv.. cũng là những “cảnh báo đỏ” mà bạn cần chú ý.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/03/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-4.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Nhà tuyển dụng nên dành thời gian nghiên cứu CV của ứng viên trước phỏng vấn</i>
      </section>
      <br>
      <section id="section2-2">
        <h3><strong>Sử dụng các câu hỏi mang tính chi tiết</strong></h3>
        <p>Đối mặt với ứng viên đang trình bày về những thành tích ấn tượng của họ và điều này khiến nhà tuyển
          dụng cảm thấy nghi ngờ, bạn hãy tìm kiếm sự thật bằng cách sử dụng các câu hỏi mang tính cụ thể.
          Chẳng hạn, khi người ứng tuyển cho rằng họ rất thông thạo tiếng Anh, bạn có thể đưa ra đề nghị “Vậy
          nếu tôi tiếp tục tiến hành cuộc phỏng vấn này bằng tiếng Anh, bạn sẽ thấy ổn chứ?”.</p>
      </section>
      <br>
      <section id="section2-3">
        <h3><strong>Quan sát thái độ và ngôn ngữ cơ thể ở ứng viên</strong></h3>
        <p>Như đã đề cập ở phần trên, ngôn ngữ cơ thể ở ứng viên trong buổi phỏng vấn là dấu hiệu rất quan trọng
          nếu nhà tuyển dụng cần kiểm tra tính chân thực với thông tin mà họ cung cấp.</p>
        <p>Khi nhận thấy ứng viên có một số biểu hiện không thoải mái như vặn người, sờ tay lên tóc hoặc lên
          mặt, sửa lại kính hoặc cổ áo, lảng tránh giao tiếp ánh mắt, xoắn ngón tay v.vv.. bạn cần tiếp tục
          đặt thêm câu hỏi về nội dung đang bàn luận và quan sát thái độ của họ. Thông thường, ứng viên sẽ tỏ
          ra đặc biệt không thoải mái khi phải nói dối tới lần thứ ba.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/03/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-5.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Thái độ và ngôn ngữ cơ thể của ứng viên có thể là bằng chứng cho lời nói của họ</i>
      </section>
      <br>
      <section id="section2-4">
        <h3><strong>Tìm hiểu trước về ứng viên trên các nền tảng mạng xã hội</strong></h3>
        <p>Sự phát triển của các nền tảng mạng xã hội đã trở thành nguồn tài nguyên hữu ích cho phép nhà tuyển
          dụng có thể kiểm tra thông tin về ứng viên một cách dễ dàng. Theo đó, bạn có thể tìm kiếm trên tài
          khoản Zalo, Facebook, Twitter, LinkedIn v.vv.. mà ứng viên đang sử dụng và tiến hành đối chiếu mức
          độ trùng khớp về dữ liệu tại đây với hồ sơ dự tuyển.</p>
        <p>Trong quá trình này, nhà tuyển dụng còn có cơ hội phát hiện thêm những điều ứng viên chia sẻ về công
          việc từng làm. Thông qua đó, bạn cũng sẽ phán đoán được phần nào về bản chất thực sự của họ và so
          sánh với điều họ đang thể hiện ở thực tế.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/03/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-6.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Nhà tuyển dụng có thể xác minh thêm thông tin về ứng viên qua mạng xã hội</i>
      </section>
      <br>
      <section id="section2-5">
        <h3><strong>Liên hệ với người tham chiếu</strong></h3>
        <p>Đối với những vị trí quan trọng, nhà tuyển dụng hãy kết hợp sử dụng phương pháp người tham chiếu (<a
          href="#" class="high-light">Reference Check</a>) để kiểm chứng thông tin của ứng viên. Việc
          không trung thực trong thời gian làm việc, chức danh công việc, trách nhiệm v.vv.. là những vấn đề
          xảy ra tương đối phổ biến.</p>
        <p>Thậm chí, ứng viên còn có thể “tạo ra” người tham chiếu giả. Nếu cảm thấy nghi ngờ, nhà tuyển dụng
          nên kiểm tra bằng cách trích dẫn sai thông tin ứng viên và xem xét phản ứng ở người tham chiếu. Giả
          sử, ứng viên xác nhận mức lương công ty cũ chi trả cho họ là 08 triệu VNĐ/tháng, bạn cần hỏi người
          tham khảo rằng “A từng được trả mức lương 07 triệu VNĐ/tháng khi làm việc ở công ty bạn đúng
          không?”.</p>
      </section>
      <br>
      <section id="section2-6">
        <h3><strong>Dựa vào trực giác và kinh nghiệm thực tế của bản thân</strong></h3>
        <p>Với trường hợp đã làm việc thời gian dài trong lĩnh vực tuyển dụng, bạn sẽ có khả năng nhận biết một
          ứng viên nói dối mà thường không gặp quá nhiều khó khăn. Đôi khi, hãy chú ý và lắng nghe “tiếng
          lòng” của mình. Tuy nhiên, đây là phương pháp chỉ mang tính chủ quan. Vì vậy, nhà tuyển dụng cũng
          cần thận trọng và không nên để bản thân bị phụ thuộc quá nhiều vào trực giác.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/03/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-7.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Dựa vào kinh nghiệm cũng là cách hay để nhận biết ứng viên trung thực hay không</i>
      </section>
      <br>
      <section id="section2-7">
        <h3><strong>Sử dụng bài đánh giá năng lực ứng viên</strong></h3>
        <p>Cuối cùng, kiểm tra kỹ năng chuyên môn thông qua bài test năng lực cũng là cách ứng phó với tình
          trạng ứng viên không trung thực vô cùng hiệu quả mà nhà tuyển dụng nên tham khảo.</p>
        <p>Hiện nay, với sự ra đời của Testcenter.vn – nền tảng đánh giá năng lực nhân sự hàng đầu Việt Nam, các
          doanh nghiệp đã có thể thu thập dữ liệu thông tin nhằm mục đích kiểm tra <span class="high-light">IQ, EQ</span>
          cùng năng lực thực sự của ứng viên vô cùng dễ dàng.</p>
        <p>Sử dụng Testcenter.vn, nhà tuyển dụng sẽ được hỗ trợ tạo form mẫu đánh giá người ứng tuyển ngay sau
          phỏng vấn, giúp đưa ra quyết định chính xác và hạn chế tối đa tuyển sai người hoặc nhân viên nghỉ
          việc chỉ sau một thời gian ngắn đi làm.</p>
        <p>Không chỉ hỗ trợ doanh nghiệp tiết kiệm lên tới 50% thời gian đánh giá ứng viên, rút ngắn quy trình
          tuyển dụng, Testcenter.vn còn giảm tới 30% chi phí thuê cơ sở vật chất, trang thiết bị và xây dựng
          đề thi cho việc đánh giá nhân sự.</p>
        <p>Thông qua bài test được xây dựng dựa trên tiêu chuẩn quốc tế của Testcenter.vn, nhà tuyển dụng có thể
          xác định việc liệu ứng viên có đang “phóng đại” khả năng của mình hay không một cách khách quan
          nhất.</p>
        <img
          src="https://www.testcenter.vn/blog/wp-content/uploads/2024/03/dau-hieu-nhan-biet-ung-vien-khong-trung-thuc-testcenter-8.jpg"
          alt="" style="width: 100%;height:430px"><br>
        <i>Bài test năng lực là minh chứng phản ánh rõ nét nhất khả năng của ứng viên</i>
      </section>
      <br>
      <section id="section3">
        <h2><strong>Tổng kết</strong></h2>
        <p>Như vậy, bài viết do Testcenter.vn mang tới trên đây đã giúp bạn tổng hợp nhanh những <span
          class="bolder"> dấu hiệu nhận biết ứng viên không trung thực </span>chính xác. Nhìn chung, trung
          thực luôn được xem là một trong các tiêu chí hàng đầu để đánh giá nhân sự. Do đó, nhà tuyển dụng hãy
          chú ý rà soát, sàng lọc kỹ càng để đảm bảo có thể tìm ra ứng viên tiềm năng nhất cho tổ chức của
          mình!</p>
        <p><b>TestCenter.vn – Nền tảng đánh giá năng lực nhân sự cung cấp giải pháp test online dành cho doanh
          nghiệp Việt Nam. TestCenter.vn với ngân hàng 300+ đề thi tuyển dụng nhân sự mẫu hỗ trợ quy trình
          đánh giá năng lực nhân sự. Tự hào đồng hành cùng +500 khách hàng doanh nghiệp hàng đầu như
          Honda, Sailun, Petrolimex, Ngân hàng TMCP Hàng Hải Việt Nam (MSB),…</b></p>
        <p><b>Doanh nghiệp sẽ tiết kiệm được 30% chi phí so với cách tuyển dụng truyền thống khi sử dụng
          Testcenter. <a href="" class="highlight">Vui lòng ĐĂNG KÝ TẠI ĐÂY</a> để nhận tư vấn 1-1 về các
          tính năng của Nền tảng đánh giá năng lực nhân sự TestCenter</b></p>
      </section>
      <div class="end-first">
        <div class="tag">
          TAGS
        </div>
        <button type="button" class="btn btn-outline-secondary">dấu hiệu nhận biết ứng viên không trung thực
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
