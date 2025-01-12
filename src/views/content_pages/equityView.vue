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
      <h2>Equity Theory là gì? Cách quản trị doanh nghiệp hiệu quả với học thuyết cân bằng
      </h2>
      <h6>Bởi <b>Testcenter</b> - April 24, 2024</h6>
      <div class="button-inform">
        <span type="button" class="facebook"><i class="fa-brands fa-facebook-f"></i></span>
        <span type="button" class="twitter"><i class="fa-brands fa-twitter"></i></span>
        <span type="button" class="pinterest"><i class="fa-brands fa-pinterest-p"></i></span>
        <span type="button" class="whatsapp"><i class="fa-brands fa-whatsapp"></i></span>
        <span type="button" class="linkedin"><i class="fa-brands fa-linkedin-in"></i></span>
        <span type="button" class="tumblr"><i class="fa-brands fa-tumblr"></i></span>
      </div>
      <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1.jpg"
           alt="" style="width: 100%;height:430px"><br>
      <em>Quản trị doanh nghiệp chưa bao giờ là một nhiệm vụ dễ dàng đối với các nhà quản lý. Nhưng với sự “dẫn
        đường” của học thuyết Equity Theory, nhiều nhà quản lý có thể sẽ bớt “nặng gánh” trong công việc và vận
        hành doanh nghiệp hiệu quả hơn. Vậy cụ thể <a href="#" class="high-light">Equity Theory</a> là gì và làm
        thế nào để ứng dụng lý thuyết này hiệu quả khi quản trị doanh nghiệp? Hãy cùng <a href="{{route('index')}}"
                                                                                          class="high-light">Testcenter</a>
        tìm hiểu về “bí quyết” đặc biệt này ngay sau đây. </em>

      <div class="toc-wrapper">
        <div class="name">
          <h5>Table of Contents</h5>
          <div class="icon" @click="toggleContent">☰</div>
        </div>
        <div :class="['toc', { open: isTocOpen }]" id="toc">
          <ul>
            <li><a href="#section1">1. Equity Theory là gì?</a></li>
            <li><a href="#section2">2. Nội dung tổng quát của học thuyết cân bằng</a>
            </li>
            <li><a href="#section3">3. Tìm hiểu về tâm lý của nhân viên theo Equity Theory</a></li>
            <li><a href="#section4">4. Yếu tố để đánh giá nhân viên dựa theo Equity Theory</a></li>
            <li><a href="#section5">5. Ưu điểm và nhược điểm của học thuyết cân bằng</a>
              <ul>
                <li><a href="#section5-1">5.1 Ưu điểm</a></li>
                <li><a href="#section5-2">5.2 Nhược điểm</a></li>
              </ul>
            </li>
            <li><a href="#section6">6. Hướng dẫn tạo động lực cho nhân viên bằng việc áp dụng học thuyết cân bằng</a>
              <ul>
                <li><a href="#section6-1">Đặt mục tiêu rõ ràng</a></li>
                <li><a href="#section6-2">Đúng người đúng việc</a></li>
                <li><a href="#section6-3">Thưởng phạt hợp lý</a></li>
              </ul>
            </li>
            <li><a href="#section7">7. Tổng kết</a></li>
          </ul>
        </div>
      </div>
      <!-- Content Sections -->
      <section id="section1">
        <h2>Equity Theory là gì?</h2>
        <p><b>Equity Theory</b> là gì luôn là câu hỏi đầu tiên cần phải giải đáp, bởi khi nghe đến một học thuyết quản trị nào đó, mọi người cũng đều cho rằng nó rất khó hiểu. Kỳ thực, Equity vô cùng dễ hiểu. John Stacey Adams, một nhà tâm lý học hành vi đã cho ra đời lý thuyết này vào năm 1963. Thuyết này hiểu đơn giản là thuyết động viên nhân viên, nó cũng đưa ra các yếu tố mang tính biến đổi tập trung vào nhân viên, xem xét tác động về sự đánh giá của nhân viên trong công việc cũng như doanh nghiệp họ đang làm.
        </p>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-1.jpg"
             alt="" style="width: 100%;height:430px"><br>
        <i>John Stacey Adams – Người đưa ra thuyết Equity</i>
        <p>Cụ thể, John Stacey Adams – “cha đẻ” của lý thuyết này cho rằng: “Được đối xử công bằng luôn là mong muốn của mọi con người. Bởi vậy, nhân viên có xu hướng tự đánh giá xem mình có được đối xử công bằng không. Trong công việc họ sẽ tự so sánh công sức mà mình bỏ ra so với những thứ nhận được có tương xứng không và so với đồng nghiệp có chênh lệch ra sao”</p>
      </section>
      <br>
      <section id="section2">
        <h2>Nội dung tổng quát của học thuyết cân bằng</h2>
        <p>Phát biểu của John Stacy Adams về Thuyết cân bằng Equity Theory như sau: Nhân viên (người lao động) sẽ luôn không ngừng so sánh nỗ lực của họ trong công việc với những gì họ nhận lại được sau khi hoàn thành, và họ còn so sánh điều này với nhân viên khác. </p>
        <p>Nhân viên thường so sánh dựa trên cơ sở về thù lao nhận được, phúc lợi công ty với công sức, nỗ lực họ bỏ ra như kiến thức, thời gian và thái độ làm việc. Khi nhận thấy tỉ lệ ngang nhau, nhân viên hoàn toàn không bất mãn và duy trình năng suất làm việc ổn định. Nhưng ngược lại, tỉ lệ so sánh này bị lệch đi kiểu như nhân viên bỏ nhiều thời gian làm mà lương thưởng ít, họ sẽ có phản ứng tiêu cực, năng suất giảm đi. Nếu họ lại so sánh được thêm là đồng nghiệp làm ít hơn mà lương cao hơn thì phản ứng còn gay gắt nữa.</p>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-3.jpg"
             alt="" style="width: 100%;height:430px"><br>
        <i>Equity cho thấy nhân viên luôn luôn so sánh những gì mình bỏ ra và nhận lại</i>
        <p>Đương nhiên cái nhìn đều mang tính chủ quan từ phía nhân viên chứ không phải là sự đánh giá công bằng chính xác. Chính vì thế doanh nghiệp luôn phải là bên đưa ra giải pháp xử lý phù hợp nếu cán cân bị lệch. Tránh tình trạng nhân viên hiểu lầm, bất mãn ảnh hưởng đến kết quả hoạt động kinh doanh của doanh nghiệp.</p>
      </section>
      <br>
      <section id="section3">
        <h2>Tìm hiểu về tâm lý của nhân viên theo Equity Theory</h2>
        <p>Tâm lý của nhân viên được chứng minh trong Equity Theory là tâm lý so sánh. Lý thuyết của John Stacy Adams đã chỉ ra được một sự thật ngầm hiểu trong lòng người lao động hay nhân viên của công ty. Tâm lý so sánh luôn tồn tại trong mỗi người điều này đã được Equity diễn giải một cách rõ ràng hơn. Và cái tâm lý này của nhân viên sẽ tác động đến hành vi của họ, hành vi đó lại ảnh hưởng trực tiếp đến hiệu quả công việc. </p>
        <p>Hãy thử tưởng tượng, nếu cùng làm chung 1 nơi mà bạn phải làm việc nhiều, lương ít còn đồng nghiệp làm việc ít lương cao, còn quản lý thì lại cho rằng như vậy là hợp lý rồi. Họ còn cho rằng công việc của đồng nghiệp thì quan trọng hơn và xứng đáng nhận lương cao hơn bạn. Như vậy, từ việc so sánh dẫn đến tâm lý bất mãn, cảm thấy không công bằng. Điều này dẫn đến một loạt các suy nghĩ và hành vi tiêu cực, nhẹ thì buông xuôi, năng suất giảm, hiệu quả cv kém đi. Nặng thì bôi xấu công ty, đồng nghiệp và xin thôi việc hoặc phá hoại công ty. </p>
        <p><b>Doanh nghiệp sẽ tiết kiệm được 30% chi phí so với cách tuyển dụng truyền thống khi sử dụng
          Testcenter. <a href="">Vui lòng ĐĂNG KÝ TẠI ĐÂY</a> để nhận tư vấn 1-1 về các tính năng của Nền
          tảng đánh giá năng lực nhân sự TestCenter</b></p>
        <p>>>><i><span class="bolder">Xem thêm:</span><a href="" class="high-light"> Bí quyết tối ưu hóa hiệu suất làm việc</a></i></p>
      </section>
      <br>
      <section id="section4">
        <h2>Yếu tố để đánh giá nhân viên dựa theo Equity Theory</h2>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-4.jpg"
             alt="" style="width: 100%;height:430px"><br>
        <i>Yếu tố đầu vào và đầu ra là cơ sở của Equity Theory</i>
        <p>Equity Theory không chỉ phát biểu về tâm lý so sánh của nhân viên, nó còn được dùng để đánh giá và tìm phương án cải thiện hiệu quả làm việc của nhân viên. Quản lý cần nắm rõ lý thuyết này để điều phối các hoạt động trong bộ phận của mình tốt hơn. Dưới đây là những yếu tố đầu vào và đầu ra mà các nhân viên thường áp dụng để tự so sánh, và đây là thứ quản lý cần biết để kịp thời đưa ra thông tin đúng đắn, giúp nhân viên hiểu mình không bị đối xử bất công.</p>
        <p><b>Các yếu tố input đầu vào:</b></p>
        <ul>
          <li>Sự chăm chỉ, nỗ lực và sự cam kết gắn bó cùng lòng trung thành của nhân viên với tổ chức.</li>
          <li>Khả năng thích ứng với những kỹ năng chuyên môn và kiến thức nhân viên có để làm tốt công việc được giao.</li>
          <li>Mức độ khó khăn của công việc mà nhân viên đang đảm nhận. </li>
          <li>Nhân viên sẽ phải hy sinh điều gì để thực hiện tốt công việc, hay họ có được đồng nghiệp và cấp trên hỗ trợ không.</li>
          <li>Đặc biệt là sự công nhận của cấp trên và đồng nghiệp xung quanh đối với nhân viên.</li>
          <li>Thái độ với công việc như ý chí quyết tâm, sự nhiệt tình trong công việc. </li>
        </ul>
        <p><b>Các yếu tố đầu ra output:</b></p>
        <p>Với những sự “cống hiến” kể trên thì nhân viên sẽ nhận lại được điều gì đáp lại?</p>
        <ul>
          <li>Về vật chất đó là tiền và lợi ích: Khoản này bao gồm lương thưởng, phụ cấp, hoa hồng, ưu đãi và phúc lợi dành cho họ. </li>
          <li>Về tinh thần: Gồm khen thưởng hay sự công nhận của mọi người xung quanh. </li>
          <li>Và quan trọng nhất là công việc có thể giúp nhân viên thăng tiến trong sự nghiệp ở mức độ nào.</li>
        </ul>
        <p>>>><i><span class="bolder">Xem thêm:</span><a href="" class="high-light"> Bí quyết tối ưu hóa hiệu suất làm việc</a></i></p>
      </section>
      <br>
      <section id="section5">
        <h2>Ưu điểm và nhược điểm của học thuyết cân bằng</h2>
        <p>Bất kể một học thuyết nào dù chỉ ra điểm có lợi ra sao, thì cũng có hai mặt ưu và nhược. Nhà quản lý có thể cân nhắc các ưu nhược điểm của Equity để áp dụng quản trị doanh nghiệp sao cho hợp lý</p>
        <h1>Ưu điểm</h1>
        <p>Sau đây là 4 ưu điểm cơ bản nhất mà học thuyết Equity mang đến cho doanh nghiệp cũng như các nhà quản lý:</p>
        <ul>
          <li>Tạo động lực làm việc – Tối ưu hóa nguồn lực</li>
        </ul>
        <p>Thuyết cân bằng của John Stacy Adams đã nêu lên sự phù hợp giữa kỳ vọng của doanh nghiệp và hiệu suất làm việc của nhân viên. Nó cho thấy để doanh nghiệp vận hành hiệu quả, cần phải tạo được môi trường công bằng lành mạnh cho nhân viên. Người nhân viên nhận được đền đáp xứng đáng với công sức và nỗ lực bỏ ra sẽ luôn cảm thấy vui vẻ. Từ đó họ có động lực tiếp tục cống hiến vì biết mình sẽ được nhận lại xứng đáng. Và cũng chính nhờ điều này, nhân viên làm việc hết khả năng tạo ra năng suất cao, hiệu quả tốt cho mọi công việc được giao.</p>
        <ul>
          <li>Giữ chân nhân viên lâu năm và thu hút nhân tài mới</li>
        </ul>
        <p>Chẳng ai thích làm việc ở một nơi mà mình luôn bị thiệt, học thuyết Equity sẽ giúp nhà quản lý đánh giá được cán cân công bằng trong công việc. Doanh nghiệp kịp thời nhận ra mình có đang thiên lệch hay chưa công bằng trong việc hay không để điều chỉnh sẽ giúp nhân viên hài lòng hơn, giảm bất mãn và tiếp tục cố gắng làm việc. Đồng thời với môi trường luôn có sự công bằng và đãi ngộ xứng đáng sẽ thu hút nhiều nhân tài muốn gia nhập tổ chức.</p>
        <p>>>><i><span class="bolder">Xem thêm:</span><a href="" class="high-light"> Cách thu hút nhân tài đến với doanh nghiệp</a></i></p>
        <ul>
          <li>Tiết kiệm chi phí tuyển nhân viên mới và gia tăng lợi nhuận: </li>
        </ul>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-6.jpg"
             alt="" style="width: 100%;height:430px"><br>
        <i>Equity giữ chân được nhân viên thì cũng giúp tiết kiệm chi phí tuyển dụng</i>
        <p>Một chế độ đãi ngộ không công bằng thì nhân viên không gắn bó, mà không gắn bó thì công ty mất thêm phí tuyển dụng, đào tạo, v.vv.. Bởi vậy nên có thể thấy áp dụng được thuyết công bằng khi quản lý còn có thêm một lợi ích to lớn là tiết kiệm chi phí cho doanh nghiệp. Đồng thời với sự đãi ngộ tốt, năng suất hiệu quả làm việc của nhân viên tăng giúp công ty phát triển tốt hơn, gia tăng lợi nhuận. </p>
        <ul>
          <li>Tạo ra môi trường không ganh đua tiêu cực xây văn hóa lành mạnh</li>
        </ul>
        <p>Môi trường công bằng, đãi ngộ tốt sẽ giảm bớt sự cạnh tranh trong công việc xây dựng văn hóa doanh nghiệp lành mạnh. Các nhân viên sẽ thoải mái với nhau hơn, khi lợi ích của ai cũng được đảm bảo họ sẽ cùng nhau nỗ lực để đưa doanh nghiệp phát triển lớn mạnh hơn. </p>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-7.jpg"
             alt="" style="width: 100%;height:430px"><br>
        <i>Chủ quan, tương đối và dễ bỏ sót là những hạn chế lớn của Equity</i>
      </section>
      <br>
      <section id="#section5-2">
        <h2>Nhược điểm</h2>
        <p>Ngoài những lợi ích, học thuyết cân bằng cũng đối mặt với một số điểm hạn chế:</p>
        <ul>
          <li><b>Mỗi người một ý</b></li>
        </ul>
        <p>Không nhân viên nào giống nhân viên nào, họ sẽ có những kỳ vọng và tiêu chuẩn riêng.Do đó, khi đối mặt với cùng một công việc và mức thù lao, sẽ xuất hiện sự chênh lệch trong cách họ đánh giá đồng nghiệp hoặc cấp trên. Vậy nên khó mà xây dựng được một khung tiêu chuẩn chung để mà cân bằng.</p>
        <ul>
          <li><b>So sánh còn chủ quan tương đối</b></li>
        </ul>
        <p>Không có số liệu cụ thể nào để nhân viên hay doanh nghiệp đong đếm thật công bằng. Và lợi ích với hiệu suất của nhân viên phụ thuộc vào nhiều yếu tố như độ khó của công việc, chênh lệch về kiến thức, v.vv.. Bởi vậy khi đo lường đúng tỉ lệ giữa đầu vào và đầu ra trở nên khó khăn để có thể áp dụng được thuyết này. </p>
        <ul>
          <li><b>Bỏ qua yếu tố quan trọng</b></li>
        </ul>
        <p>Thuyết cân bằng tập trung vào các yếu tố đầu vào và đầu ra trong quá trình đánh giá, nhưng nó không thể bao quát tất cả các yếu tố quan trọng. Điều này có thể tác động đến quá trình đánh giá và quản lý, bởi với mỗi doanh nghiệp hay các loại hình, hạng mục công việc khác nhau sẽ có những yếu tố đầu vào đầu ra riêng biệt.</p>
      </section>
      <br>
      <section id="section6">
        <h2>Hướng dẫn tạo động lực cho nhân viên bằng việc áp dụng học thuyết cân bằng</h2>
        <p>Học thuyết cân bằng Equity đem đến nhiều lợi ích và hạn chế, xong nó vẫn là một công cụ tốt để tạo động lực cho nhân viên, thúc đẩy hiệu quả công việc chung. Sau đây là một số cách áp dụng học thuyết này mà các nhà quản lý nên tham khảo.</p>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-8.jpg"
             alt="" style="width: 100%;height:430px"><br>
        <i>Tạo động lực cho nhân viên bằng Equity sẽ rất hiệu quả</i>
      </section>
      <br>
      <section id="section6-1">
        <h1>Đặt mục tiêu rõ ràng</h1>
        <p>Làm việc gì cũng phải có mục tiêu cụ thể, đích đến rõ ràng, bởi vậy rất cần đưa ra chi tiết khung xác định trước các input và output về kỳ vọng của nhân viên. Đưa ra được khung này nhân viên sẽ biết những mốc mình cần đạt tới, doanh nghiệp thì theo dõi được sự tăng trưởng của nhân viên và có chế độ đãi ngộ tương xứng nhất. </p>
      </section>
      <br>
      <section id="section6-2">
        <h1>Đúng người đúng việc</h1>
        <p>Nhà quản lý cần phải hiểu được năng lực cụ thể của nhân viên, phân công đúng việc hợp khả năng của họ. Từ đó mới có cơ sở để nhân viên kỳ vọng đúng đắn đồng thời quản lý đưa ra được cơ chế phù hợp. Chẳng hạn một thiết kế giỏi làm ảnh quảng cáo lại đưa vào công việc thiết kế web thì dễ khiến nhân viên bị chán nản, nỗ lực rất nhiều nhưng so với thiết kế chuyên cũng vẫn không bằng. Nhân viên nản còn doanh nghiệp không thu được kết quả tốt và có muốn trao thưởng thì cũng không hợp lý.</p>
      </section>
      <br>
      <section id="section6-3">
        <h1>Lương 3P</h1>
        <p>Quá trình xác định tiền lương cho nhân viên nên dựa trên ba yếu tố chính: vị trí công việc, năng lực cá nhân và thành tựu đạt được. Điều này giúp tạo nên một giải pháp tính lương mang lại sự cân bằng giữa đầu vào và đầu ra một cách khách quan nhất. Hệ thống này giúp nhân viên nhận được đúng giá trị của công sức và đóng góp mà họ mang lại cho doanh nghiệp, không phải dựa trên các tiêu chuẩn thị trường. Như thế nhân viên biết mình làm ở vị trí gì, công việc ra sao năng lực thế nào và đạt được gì nên mới có lương thế, họ sẽ thất công bằng hơn.</p>
      </section>
      <br>
      <section id="section6-4">
        <h1>Thưởng phạt hợp lý</h1>
        <p>Việc doanh nghiệp truyền đạt thông tin về hệ thống khen thưởng và phê bình nội bộ không chỉ mang lại hiệu quả mà còn là một biện pháp rất có ý nghĩa. Điều này tạo ra động lực mạnh mẽ cho nhân viên học tập những cá nhân xuất sắc vinh danh. Quan trọng hơn là, việc tôn vinh những nỗ lực, sự tiến bộ và thành tích của nhân viên không chỉ cổ vũ họ cống hiến hơn mà còn tạo ra lòng trung thành với doanh nghiệp. Do đó, chế độ khen ngợi và đối đãi hấp dẫn không chỉ là nguồn động viên chính, mà còn là đòn bẩy quan trọng để thúc đẩy nhân viên nỗ lực và góp phần tăng cường hiệu suất làm việc.</p>
      </section>
      <br>
      <section id="section7">
        <h2>Tổng kết</h2>
        <p>Nhìn chung áp dụng được học thuyết cân bằng sẽ giúp từng cá nhân trong tổ chức hài lòng và như vậy sẽ thúc đẩy cả tổ chức phát triển. Tuy nhiên, như đã nói ở trên để đưa ra được một khung kỳ vọng của nhân viên các nhà quản lý cũng phải nắm rõ năng lực người đó ở khoảng nào để phân tích kỳ vọng và làm thỏa mãn nó. </p>
        <img src="https://www.testcenter.vn/blog/wp-content/uploads/2024/02/equity-theory-la-gi-testcenter-10.jpg"
             alt="" style="width: 100%;height:430px"><br>
        <i>Đánh giá năng lực nhân viên giúp doanh nghiệp áp dụng Equity dễ dàng hơn</i>
        <p>Việc đánh giá năng lực có thể diễn ra khi mới tuyển dụng hoặc định kỳ khi nhân viên đã làm việc một khoảng thời gian nhất định. Đánh giá những kỹ năng chuyên môn của nhân viên ở mức độ nào, có phù hợp với vị trí hiện tại hay không, không chỉ giúp doanh nghiệp phân loại nhân viên sắp xếp công việc, mà còn giúp xác định điểm kỳ vọng tương xứng với năng lực, kỹ năng để áp dụng thuyết cân bằng.</p>
        <p>Những lúc như vậy, một giải pháp đánh giá năng lực hiệu quả như Testcenter sẽ là sự lựa chọn hoàn hảo dành cho các nhà quản lý. Testcenter sở hữu công cụ tạo bài test năng lực online nhanh chóng, kết hợp với “ngân hàng” hơn 300 đề thi mẫu được thiết kế khoa học, sẽ giúp đánh giá năng lực nhân sự một cách nhanh chóng và chính xác nhất. Ngoài ra, các nhà quản lý doanh nghiệp còn có thể theo dõi kết quả cụ thể thông qua hệ thống báo cáo trực quan với các số liệu chi tiết trên nền tảng Testecenter. Nhờ những báo cáo trực quan đó, nhà quản lý dễ dàng nắm được khả năng của các nhân viên ở mức độ nào để áp dụng được các mô hình cũng như lý thuyết quản trị phù hợp, giúp doanh nghiệp ngày càng phát triển mạnh mẽ. Với Testcenter – Nền tảng đánh giá năng lực nhân sự hàng đầu Việt Nam, hành trình thấu hiểu nhân viên, phát triển doanh nghiệp sẽ dễ dàng hơn bao giờ hết, hãy truy cập <b>Testcenter</b> để tìm hiểu thêm thông tin chi tiết nhé!</p>
        <p><b>TestCenter.vn – Nền tảng đánh giá năng lực nhân sự cung cấp giải pháp test online dành cho doanh nghiệp Việt Nam. TestCenter.vn với ngân hàng 300+ đề thi tuyển dụng nhân sự mẫu hỗ trợ quy trình đánh giá năng lực nhân sự. Tự hào đồng hành cùng +500 khách hàng doanh nghiệp hàng đầu như Honda, Sailun, Petrolimex, Ngân hàng TMCP Hàng Hải Việt Nam (MSB),…</b></p>
        <p><b>Doanh nghiệp sẽ tiết kiệm được 30% chi phí so với cách tuyển dụng truyền thống khi sử dụng Testcenter. <a href="" class="highlight">Vui lòng ĐĂNG KÝ TẠI ĐÂY</a> để nhận tư vấn 1-1 về các tính năng của Nền tảng đánh giá năng lực nhân sự TestCenter</b></p>
      </section>
      <div class="end-first">
        <div class="tag">
          TAGS
        </div>
        <button type="button" class="btn btn-outline-primary">equity là gì
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
