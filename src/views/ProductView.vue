<template>
  <div class="container product-section">
    <div class="mb-4 product-section-intro product-section-intro-pc">
      <div class="row">
        <div class="col-md-5 product-section-intro-left p-0 pt-3">
          <h1><span>Tiêu chuẩn đánh giá</span><br><span
            class="highlight p-0">năng lực nhân sự</span><br><span>cho doanh nghiệp</span></h1>
          <div class="mt-4">
            <DetailProduct>
              <template #detail>
                Hơn 300 đề thi tuyển dụng nhân sự mẫu
              </template>
            </DetailProduct>
            <DetailProduct>
              <template #detail>
                Tạo bài test online nhanh chóng chỉ trong 5 phút
              </template>
            </DetailProduct>
            <DetailProduct>
              <template #detail>
                Công cụ quản lý năng lực ứng viên thông minh
              </template>
            </DetailProduct>
            <DetailProduct>
              <template #detail>
                Đánh giá năng lực làm việc của nhân viên trực quan
              </template>
            </DetailProduct>
          </div>
          <div class="mt-5">
            <router-link :to="{path:'/register'}" class="btn btn-primary btn-register ">Đăng ký miễn phí</router-link>
            <router-link :to="{path:'/blog'}" class="btn btn-link font-weight-500 primary-color">Tìm hiểu thêm</router-link>
          </div>
        </div>
        <div class="col-md-7 product-section-intro-right">
          <img src="@/assets/group_8710.png" alt class="img-fluid">
        </div>
      </div>
    </div>
    <div class="mb-4 product-section-intro product-section-intro-mobi">
      <div class="product-section-intro-left p-0 pt-3">
        <h1 class="text-center"><span>Tiêu chuẩn đánh giá</span> <span
          class="highlight p-0">năng lực nhân sự</span> <span>cho doanh nghiệp</span></h1>
        <div class="align-items-center d-flex">
          <img src="@/assets/group_8677.png" alt class="img-fluid">
        </div>
        <div class="mt-4">
          <DetailProduct>
            <template #detail>
              Hơn 300 đề thi tuyển dụng nhân sự mẫu
            </template>
          </DetailProduct>
          <DetailProduct>
            <template #detail>
              Tạo bài test online nhanh chóng chỉ trong 5 phút
            </template>
          </DetailProduct>
          <DetailProduct>
            <template #detail>
              Công cụ quản lý năng lực ứng viên thông minh
            </template>
          </DetailProduct>
          <DetailProduct>
            <template #detail>
              Đánh giá năng lực làm việc của nhân viên trực quan
            </template>
          </DetailProduct>
        </div>
        <div class="mt-4 text-center">
          <router-link :to="{path:'/register'}" class="btn btn-primary btn-register ">Đăng ký miễn phí</router-link>
          <router-link :to="{path:'/blog'}" class="btn btn-link font-weight-500 primary-color">Tìm hiểu thêm</router-link>
        </div>
      </div>
    </div>
    <div class="mt-4 mb-4 pt-4 product-section-problem">
      <p class="product-section-title mt-4">
        Problem
      </p>
      <div class="row">
        <h5 class="font-weight-500 p-4 mobile-show pc-hidden text-center">Doanh nghiệp bạn có đang gặp phải vấn
          đề này?</h5>
        <div class="col-md-5 align-items-center d-flex p-0 product-section-problem-left">
          <img src="https://www.testcenter.vn/images/products/problem/group_8676.png" class="img-fluid"
               alt=""/>
        </div>
        <div class="col-md-7 pl-5 product-section-problem-right">
          <h4 class="font-weight-bold mb-4 mobile-hidden pc-show">Doanh nghiệp bạn có đang gặp phải vấn đề
            này?</h4>
          <ul class="pl-3">
            <DetailProblem>
              <template #title>
                Khó khăn trong tìm kiếm ứng viên phù hợp
              </template>
              <template #detail>
                70% nhà tuyển dụng có hơn 2 lần tuyển ứng viên không phù hợp
              </template>
            </DetailProblem>
            <DetailProblem>
              <template #title>
                Chi phí tuyển dụng nhân sự lớn
              </template>
              <template #detail>
                Ngân sách cho tuyển dụng ứng viên tiềm năng lên tới hàng trăm
                triệu/năm
              </template>
            </DetailProblem>
            <DetailProblem>
              <template #title>
                Chưa đánh giá đúng năng lực ứng viên
              </template>
              <template #detail>
                Khó khăn trong đánh giá năng lực nhân sự trên nhiều khía cạnh khác
                nhau.
              </template>
            </DetailProblem>
            <DetailProblem>
              <template #title>
                Đào tạo nhân viên chưa đúng mục đích
              </template>
              <template #detail>
                Khó khăn trong đào tạo nhân viên vì không nắm rõ điểm mạnh và điểm
                yếu của từng cá nhân
              </template>
            </DetailProblem>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="product-section product-container-fluid product-section-function" style="overflow: hidden;">
    <p class="product-section-title mb-4 mt-4">
      Function
    </p>
    <h5 class="font-weight-500 mb-4 mobile-show pc-hidden text-center">Các tính năng nổi bật của TestCenter.vn</h5>
    <div class="row">
      <p class="mobile-show pc-hidden text-center">Testcenter.vn là nền tảng số cung cấp giải pháp test online
        đánh giá năng lực nhân sự toàn diện</p>
      <div class="col-md-5 col-12">
        <img alt="Công cụ test online" src="https://www.testcenter.vn/images/products/group-1.png"
             class="product-feature-image mobile-hidden pc-show"/>
        <div class="d-flex justify-content-center mobile-show pc-hidden text-center-mobile">
          <img class="img-fluid" alt="Công cụ test online"
               src="@/assets/image-function-mobile.png"/>
        </div>
      </div>
      <div class="col-md-7 product-section-function-right">
        <h4 class="font-weight-bold mb-4 mobile-hidden pc-show">Các tính năng nổi bật của TestCenter.vn</h4>
        <p class="mobile-hidden pc-show">Testcenter.vn là nền tảng số cung cấp giải pháp test online đánh giá
          năng lực nhân sự toàn diện</p>
        <ProductSection>
          <template #title>Đa dạng hình thức câu hỏi</template>
          <template #img>
            <ImageLink :imageSrc="'src/assets/icon-question.png'" :imageAlt="'Mô tả ảnh'"/>
          </template>
          <template #description>Cung cấp nhiều loại câu hỏi khác nhau như Trắc nghiệm online, Tự luận, Đúng/Sai,
            Matching, SQL, Coding,...
          </template>
        </ProductSection>
        <ProductSection>
          <template #title>Cá nhân hóa đề thi</template>
          <template #img>
            <ImageLink :imageSrc="'src/assets/icon-protection.png'" :imageAlt="'Mô tả ảnh'"/>
          </template>
          <template #description>Hoàn toàn chủ động thao tác trong nội dung từng câu hỏi</template>
        </ProductSection>
        <ProductSection>
          <template #title>Quản lý đề thi dễ dàng</template>
          <template #img>
            <ImageLink :imageSrc="'src/assets/icon-to-do-list.png'" :imageAlt="'Mô tả ảnh'"/>
          </template>
          <template #description>Tạo và quản lý đề thi trực tuyến theo nhu cầu của doanh nghiệp</template>
        </ProductSection>
        <ProductSection>
          <template #title>Thống kê kết quả trực quan</template>
          <template #img>
            <ImageLink :imageSrc="'src/assets/icon-chart.png'" :imageAlt="'Mô tả ảnh'"/>
          </template>
          <template #description>Kết quả được biểu thị thông qua nhiều loại biểu đồ khác nhau kết hợp với số liệu cụ
            thể.
          </template>
        </ProductSection>
        <div class="d-flex justify-content-start">
          <a class="btn btn-primary btn-register" href="https://app.testcenter.vn/register/?source=web">Đăng
            ký miễn phí</a>
        </div>
      </div>
    </div>
  </div>
  <div class="product-section container product-section-advantage">
    <p class="product-section-title mb-2 mt-4">Advantage</p>
    <div class="mb-4 text-center pl-4 pr-4">
      <h4 class="font-weight-bold mb-2 mobile-hidden pc-show">Ưu điểm vượt trội của TestCenter.vn</h4>
      <h5 class="font-weight-bold mb-2 mobile-show pc-hidden">Ưu điểm vượt trội của TestCenter.vn</h5>
      <p>Số hóa quy trình đánh giá năng lực nhân viên của Doanh nghiệp Việt Nam</p>
    </div>
    <div class="row product-section-advantage-box"
         style="padding-right:0px !important;background: linear-gradient(180deg, #F3F9FF 0%, #EDEEFB 100%);">
      <div class="col-md-6 p-4">
        <div class="mb-4 text-center-mobile">
          <p class="primary-color product-section-advantage-title">
            Giải pháp test online với hình thức câu hỏi đa dạng
          </p>
          <div class="feature-item-des mt-2 mb-4">
            Chỉ với 5 phút để có thể xây dựng một bộ đề thi theo ý muốn với đa dạng hình thức câu hỏi. Hãy
            để Testcenter.vn đồng hành cùng bạn!
          </div>
          <FeatureItem>
            <template #font>Tùy chọn dạng câu hỏi</template>
            <template #item>Đa dạng câu hỏi: Trắc nghiệm, Đúng – Sai, Hình ảnh, Video,…</template>
          </FeatureItem>
          <FeatureItem>
            <template #font>Ngân hàng đề với 300+ đề thi mẫu</template>
            <template #item>Đa dạng các test trắc nghiệm MBTI, DISC, EQ, IQ, đề thi TOEIC,...</template>
          </FeatureItem>
          <FeatureItem>
            <template #font>Thiết lập thời gian dễ dàng</template>
            <template #item>Cài đặt thời gian cho từng câu hỏi và từng bộ đề thi</template>
          </FeatureItem>
          <FeatureItem>
            <template #font>Tương thích với mọi thiết bị</template>
            <template #item>Tương thích với máy tính, máy tính bảng và điện thoại di động</template>
          </FeatureItem>
        </div>
      </div>
      <div class="col-md-6 pt-4 mobile-hidden pc-show" style="padding-right: 0;">
        <img alt="Giải pháp test online" src="@/assets/group-2.png"
             style="width: 100%;"/>
      </div>
      <div
        class="col-md-6 mobile-show pc-hidden d-flex align-items-center text-center-mobile justify-content-center">
        <img alt="Giải pháp test online" src="@/assets/group-2.png" class="img-fluid"/>
      </div>
    </div>
    <div class="row mt-4 product-section-advantage-box"
         style="background: linear-gradient(180deg, #F3F9FF 0%, #EDFBF3 100%);">
      <div class="col-md-6 mobile-hidden pc-show">
        <img alt="Số hóa quy trình đánh giá nhân sự" src="@/assets/group-3.png"
             style="width: 100%;"/>
      </div>
      <div class="col-md-6 p-4">
        <div class="mb-4 text-center-mobile">
          <p class="primary-color product-section-advantage-title">
            Số hóa quy trình đánh giá nhân sự
          </p>
          <div class="feature-item-des mt-2">
            Đánh giá năng lực nhân sự toàn diện đòi hỏi rất nhiều nguồn lực của tổ chức. Hãy để Testcenter
            giảm bớt gánh nặng cho doanh nghiệp Việt Nam!
          </div>
        </div>
        <FeatureItem>
          <template #font>Chủ động upload và tạo ra kho đề thi riêng</template>
          <template #item>Xây dựng bài test online dành riêng cho mô hình doanh nghiệp</template>
        </FeatureItem>
        <FeatureItem>
          <template #font>Thiết lập mã khóa nâng cao bảo mật đề thi</template>
          <template #item>Bảo mật tuyệt đối bằng QR code</template>
        </FeatureItem>
      </div>
      <div class="col-md-6 mobile-show pc-hidden">
        <img alt="Số hóa quy trình đánh giá nhân sự" src="@/assets/group-3.png" style="width: 100%;">
      </div>
    </div>
    <div class="row mt-4 product-section-advantage-box"
         style="background: linear-gradient(180deg, #FFF9F3 0%, #E8EEFF 100%);">
      <div class="col-md-6 p-4">
        <div class="mb-4 text-center-mobile">
          <p class="primary-color product-section-advantage-title">
            Thống kê kết quả trực quan
          </p>
          <div class="feature-item-des mt-2">
            Với sự trợ giúp đắc lực của Testcenter, việc đánh giá kết quả sau đợt thi trở nên vô cùng
            đơn giản
          </div>
        </div>
        <FeatureItem>
          <template #font>Kết quả được biểu thị dưới dạng biểu đồ</template>
          <template #item>Biểu đồ cột, biểu đồ tròn, phần trăm,…</template>
        </FeatureItem>
        <FeatureItem>
          <template #font>Báo cáo và phân tích dễ dàng</template>
          <template #item>Tự động tổng hợp kết quả phục vụ cho đánh giá nhân sự</template>
        </FeatureItem>
      </div>
      <div class="col-md-6 mobile-hidden pc-show" style="padding-right: 0;">
        <img alt="Thống kê kết quả trực quan" src="@/assets/group-4.png"
             style="width: 100%;"/>
      </div>
      <div class="col-md-6 mobile-show pc-hidden">
        <img alt="Số hóa quy trình đánh giá nhân sự" src="@/assets/group-4.png" style="width: 100%;">
      </div>
    </div>
    <div class="d-flex justify-content-center mt-4">
      <a class="btn btn-primary btn-register">Đăng ký miễn phí</a>
    </div>
  </div>
  <div class="product-section product-section-price mt-4 mb-md-4 pb-4 pt-2" id="price">
    <div class="container">
      <p class="product-section-title mt-4">
        Pricing
      </p>
      <h3 class="font-weight-bold text-center mb-4 mobile-hidden pc-show">
        Bảng giá dịch vụ TestCenter.vn
      </h3>
      <h4 class="font-weight-500 text-center mobile-show pc-hidden">
        Bảng giá dịch vụ TestCenter.vn
      </h4>
      <div class="row">
        <div class="col-md-3 col-12 product-section-price-box product-section-price-box-primary"
             style="height:1066.03px;">
          <ProductPriceBox>
            <template #img>
              <ImgPriceBox :imageSrc="'src/assets/diamond-1.png'" :imageAlt="'Mô tả ảnh'"/>
            </template>
            <template #status><span :style="{color:fontColor}">Free</span></template>
            <template #price>Miễn phí</template>
            <template #currency><span :style="{color:fontColor}">Sử dụng trọn đời</span></template>
            <template #p>
              <PofPriceBox>
                <template #item>Mở khóa toàn bộ tính
                  năng Premium
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tạo đề thi online dễ
                  dàng
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tổ chức nhiều đợt thi cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>300+ bộ đề mẫu đa dạng</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>300+ bộ đề mẫu đa20 lượt test mỗi tháng</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Thống kê kết quả chi tiết trực quan</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hỗ trợ trong giờ hành chính 24/7</template>
              </PofPriceBox>
            </template>
          </ProductPriceBox>
          <a class="btn btn-register btn-secondary">Đăng ký miễn phí</a>
        </div>
        <div class="col-md-2 col-12 product-section-price-box" style="height: 1066.03px;">
          <ProductPriceBox>
            <template #img>
              <ImgPriceBox :imageSrc="'src/assets/diamond-2.png'" :imageAlt="'Mô tả ảnh'"/>
            </template>
            <template #status>Starter</template>
            <template #price>3.000.000</template>
            <template #currency>VND/năm</template>
            <template #p>
              <PofPriceBox>
                <template #item>Mở khoá toàn bộ tính năng sản phẩm
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Miễn phí cập nhật tính năng mới
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tổ chức nhiều đợt thi cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>300+ bộ đề mẫu đa dạng</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tối đa 1 tài khoản quản lý</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>200 người test cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hỗ trợ trong giờ hành chính 24/7</template>
              </PofPriceBox>
            </template>
          </ProductPriceBox>
          <a class="btn btn-register btn-secondary">Trải nghiệm ngay</a>
        </div>
        <div class="col-md-2 col-12 product-section-price-box" style="height: 1066.03px;">
          <ProductPriceBox>
            <template #img>
              <ImgPriceBox :imageSrc="'src/assets/diamond-3.png'" :imageAlt="'Mô tả ảnh'"/>
            </template>
            <template #status>Business</template>
            <template #price>25.000.000</template>
            <template #currency>VND/năm</template>
            <template #p>
              <PofPriceBox>
                <template #item>Mở khoá toàn bộ tính năng sản phẩm
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Miễn phí cập nhật tính năng mớ
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tổ chức nhiều đợt thi cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>300+ bộ đề mẫu đa dạng</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>500 lượt test mỗi tháng</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tối đa 3 tài khoản quản lý</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>500 người test cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hỗ trợ trong giờ hành chính 24/7</template>
              </PofPriceBox>
            </template>
          </ProductPriceBox>
          <a class="btn btn-register btn-secondary">Trải nghiệm ngay</a>
        </div>
        <div class="col-md-2 col-12 product-section-price-box" style="height: 1066.03px;">
          <ProductPriceBox>
            <template #img>
              <ImgPriceBox :imageSrc="'src/assets/diamond-4.png'" :imageAlt="'Mô tả ảnh'"/>
            </template>
            <template #status>Business Plus</template>
            <template #price>50.000.000</template>
            <template #currency>VND/năm</template>
            <template #p>
              <PofPriceBox>
                <template #item>Mở khoá toàn bộ tính năng sản phẩm
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Miễn phí cập nhật tính năng mới
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tổ chức nhiều đợt thi cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>300+ bộ đề mẫu đa
                  dạng</template>
              </PofPriceBox>
              <PofPriceBox>
              <template #item>Unlimited lượt kiểm tra</template>
            </PofPriceBox>
              <PofPriceBox>
                <template #item>Tối đa 5 tài khoản quản lý</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>200 - 500 người test cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hướng dẫn sử dụng trực tiếp</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hỗ trợ trong giờ hành chính 24/7</template>
              </PofPriceBox>
            </template>
          </ProductPriceBox>
          <a class="btn btn-register btn-secondary">Trải nghiệm ngay</a>
        </div>
        <div class="col-md-2 col-12 product-section-price-box" style="height: 1066.03px;">
          <ProductPriceBox>
            <template #img>
              <ImgPriceBox :imageSrc="'src/assets/diamond-5.png'" :imageAlt="'Mô tả ảnh'"/>
            </template>
            <template #status>Enterprise</template>
            <template #price>Liên hệ</template>
            <template #currency>Liên hệ để có giá tốt nhất</template>
            <template #p>
              <PofPriceBox>
                <template #item>Mở khoá toàn bộ tính năng sản phẩm
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Miễn phí cập nhật tính năng mới
                </template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tổ chức nhiều đợt thi cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>300+ bộ đề mẫu đa dạng</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Unlimited lượt kiểm tra</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Tối đa 10 tài khoản quản lý</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>10.000 người test cùng lúc</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>API tích hợp app nội bộ của Công ty</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hướng dẫn sử dụng trực tiếp</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hỗ trợ cài đặt trên server riêng</template>
              </PofPriceBox>
              <PofPriceBox>
                <template #item>Hỗ trợ trong giờ hành chính 24/7</template>
              </PofPriceBox>
            </template>
          </ProductPriceBox>
          <a class="btn btn-register btn-secondary">Trải nghiệm ngay</a>
        </div>
      </div>
    </div>
  </div>
  <div class="container product-section">
    <div class="mt-4 pb-0">
      <div class="product-section-benefit">
        <p class="product-section-title mb-4 mt-md-4 text-left text-center-mobile">
          Benefit
        </p>
        <div class="row">
          <div class="col-md-7 col-12 product-section-problem-right">
            <h4 class="font-weight-bold mb-4 mobile-hidden pc-show">Những lợi ích khi doanh nghiệp sử dụng
              TestCenter.vn</h4>
            <h5 class=" text-center font-weight-500 mb-4 mobile-show pc-hidden text-center-mobile">Những lợi
              ích khi doanh nghiệp sử dụng TestCenter.vn</h5>
            <ProductBenefit>
              <template #img>
                <ImageLink imageAlt='"Moo tar"' :imageSrc='"src/assets/line-chart-icon.png"'></ImageLink>
              </template>
              <template #title>
                Nâng tầm thương hiệu tuyển dụng</template>
              <template #description>Chỉ thêm vài bước nhỏ trong quá trình tuyển dụng, ứng viên có thể thấy được sự chuyên nghiệp và chỉn chu trong từng hoạt động của doanh nghiệp.</template>
            </ProductBenefit>
            <ProductBenefit>
              <template #img>
                <ImageLink imageAlt='"Moo tar"' :imageSrc='"src/assets/users-icon.png"'></ImageLink>
              </template>
              <template #title>
                Tối ưu nguồn lực</template>
              <template #description>Bằng cách tạo các bài test kiểm tra năng lực đơn giản, nhanh chóng, Doanh nghiệp đã tiết kiệm được 30% chi phí so với cách tuyển dụng truyền thống.</template>
            </ProductBenefit>
          </div>
          <div
            class="col-md-5 align-items-center d-flex p-0 product-section-problem-left mobile-hidden pc-show">
            <img src="@/assets/benefit.png" class="img-fluid" alt>
          </div>
          <div
            class="col-md-5 align-items-center d-flex p-0 product-section-problem-left mobile-show pc-hidden pr-5 pl-5">
            <img src="@/assets/benefit.png" class="img-fluid" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="product-section product-section-operate pt-4">
    <div class="container">
      <p class="product-section-title mb-4 text-left text-center-mobile">
        Operate
      </p>
      <h4 class="font-weight-bold mb-4 mobile-hidden pc-show">TestCenter.vn vận hành như thế nào?</h4>
      <h5 class="font-weight-500 mb-4 text-center-mobile mobile-show pc-hidden">TestCenter.vn vận hành như thế
        nào?</h5>
      <div class="step-wrapper-mobile mobile-hidden pc-hidden">
        <div>
          <div class="row">
            <div class="col-md-1 col-2 d-flex align-items-start ml-3 p-0 pl-2">
              <div class="vertical-line">
              </div>
              <div
                class="step-number step-number-1 text-white font-weight-500 d-flex justify-content-center align-items-center">
                <span>1</span>
              </div>
            </div>
            <div class="col-md-9 col-9">
              <p class="font-weight-bold">Bước 1</p>
              <p>
                Xây dựng kho đề thi dựa trên nhu cầu
                tuyển dụng của doanh nghiệp
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 col-2 d-flex align-items-start ml-3 p-0 pl-2">
              <div class="vertical-line">
              </div>
              <div
                class="step-number step-number-2 text-white font-weight-500 d-flex justify-content-center align-items-center">
                2
              </div>
            </div>
            <div class="col-md-9 col-9">
              <p class="font-weight-bold">Bước 2</p>
              <p>
                Tổ chức thi online cho ứng viên hoặc
                nhóm nhân sự
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-1 col-2 d-flex align-items-start ml-3 p-0 pl-2">
              <div
                class="step-number step-number-3 text-white font-weight-500 d-flex justify-content-center align-items-center">
                3
              </div>
            </div>
            <div class="col-md-9 col-9">
              <p class="font-weight-bold">Bước 3</p>
              <p>
                Tổng hợp kết quả và xuất báo cáo file excel
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="step-wrapper mobile-hidden">
        <div class="step-item text-center">
          <div class="d-flex justify-content-center align-items-center">
            <div
              class="step-number step-number-1 text-white font-weight-500 d-flex justify-content-center align-items-center">
              <span>1</span>
            </div>
          </div>
          <div class="my-3 font-weight-bold">
            Bước 1
          </div>
          <div class="step-des">
            Xây dựng kho đề thi dựa trên
            nhu cầu tuyển dụng của doanh nghiệp
          </div>
        </div>
        <div class="line "></div>
        <div class="step-item text-center">
          <div class="d-flex justify-content-center align-items-center">
            <div
              class="step-number step-number-2 text-white font-weight-500 d-flex justify-content-center align-items-center">
              2
            </div>
          </div>
          <div class="my-3 font-weight-bold">
            Bước 2
          </div>
          <div class="step-des">
            Tổ chức thi online cho ứng viên hoặc nhóm nhân sự
          </div>
        </div>
        <div class="line "></div>
        <div class="step-item text-center">
          <div class="d-flex justify-content-center align-items-center">
            <div
              class="step-number step-number-3 text-white font-weight-500 d-flex justify-content-center align-items-center">
              3
            </div>
          </div>
          <div class="my-3 font-weight-bold">
            Bước 3
          </div>
          <div class="step-des">
            Tổng hợp kết quả và
            xuất báo cáo file excel
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import DetailProduct from '@/components/product_components/productSectionIntroLeft.vue'
import DetailProblem from '@/components/product_components/productSectionProblemRight.vue'
import ProductSection from "@/components/product_components/productSection.vue";
import ImageLink from '@/components/img/imageLink.vue'
import FeatureItem from "@/components/product_components/featureItem.vue";
import ProductPriceBox from "@/components/product_components/productSectionPriceBox.vue";
import ImgPriceBox from '@/components/img/imgPriceBox.vue'
import PofPriceBox from '@/components/smallOne/PofPriceBox.vue'
import ProductBenefit from "@/components/product_components/productBenefit.vue";
import {RouterLink} from "vue-router";
const fontColor = 'white'
</script>
<style scoped>
a:visited{
  color:white
}
a:link{
  color:white
}
</style>
