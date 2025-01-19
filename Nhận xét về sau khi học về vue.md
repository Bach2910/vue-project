Vue là gì? Tại sao ta phải biết về Vue
- Vue là 1 framework khá linh động được dùng để xây dựng giao diện người dùng được kết hợp với SFA. Khai báo thư viện dễ dàng, dễ dùng chỉ cần import thư viện là dùng được (trong vue3).
- Trong cấu trúc của vue nó trong rất dễ nhìn, dễ hiểu thường trong 1 file vue sẽ có cấu trúc 1 phần để xử các sự kiện, 1 phần template, cuối là sẽ là xử lý giao diện
- Trong vue ta hoàn toàn có thể thực hiện các việc tái sử dụng lại giao diện cũ mà không nhất phải code lại từ đầu, ta sẽ truyền dữ liệu từ component cha sang cho component con
- Vue có cơ chế tự cập nhật dữ liệu mà không cần phải load lại trang khi ta thay đổi cấu trúc mà nó sẽ tự cập nhật cho ta trong qua các lệnh chỉ thị như v-bind, v-model.
- Cơ chế life hook giúp ta thực hiện được các chức năng khởi tạo, hủy bỏ, cập nhật.
- Cũng có các thứ cơ bản như vòng lặp if-else, for, nhưng có các kiểu viết khá hay như v-for nó gần như là foreach ở trong laravel. Vue xử lý các sự kiện khá là dễ dàng, ta có sử dụng các hàm như v-on, v-bind để giúp cho điều đó.
- Điều giúp cho nó trở lên khác biệt là trong vue có Watch nó sẽ là thứ giúp hỗ trợ chúng ta theo dõi các giá trị sẽ được thay đổi. Trong trường hợp bài testcenter ta có dùng watch để xem sự thay đổi của đường dẫn từ đó ta có thể thay đổi class tùy sao cho phù hợp với từng trang web
- Vue có reative giúp ta có thể quản lý nhiều dữ liệu cùng lúc.
- Vue có slot có chức năng giúp ta có thể chuyển component cha vào cho con giúp ta có thể thực hiện chức năng như là yield trong laravel.
- Điều ta cũng cần phải để ý là về vue router nó gần là sẽ góp phần chính giúp ta có thể đổi đường dẫn, chuyển tiếp giữa các trang web với nhau với việc xây dựng để có thể tích hợp được SPA giúp ta không nhất thiết phải load lại cả web mà dữ liệu vẫn tự động cập nhật được điều đã đang được sử dụng rất phổ biến trong việc xây dựng các trang web hiện nay.
- Trong router Vue nó có điều khá hay về nó là ta chuyển tiếp đến trang khác thông qua name, path, ... điều đó khá là tiện thay vì ta phải tạo 1 router, 1 hàm để xử lý chức năng đấy trong controller của laravel.
- Vue cũng có Suspense giúp ta xử lý được các việc bất đồng bộ dữ liệu. Việc bất đồng bộ dữ liệu có thể giúp thực hiện các công việc rút gọn hơn mà không nhất thiết phải thực hiện toàn bộ công việc lần lượt
- Do việc Vue có tích hợp việc SPC nên có điều khá hay về về nó là chức style scope là nó sẽ chỉ được sử dụng thuộc tính đó chỉ ở trên component này thôi giúp đỡ phải kiểu đổi tên lớp khác hoặc id khác mà ta cần chỉnh sửa thuộc tính riêng theo ý mình với từng component riêng.
- Vue còn giúp ta có thể khai báo cho từng component riêng biệt khác nhau điều đó sẽ làm các component không bị ghi đè các thuộc tính không muốn có lên nhau gây lỗi.


nó đem lại những gì cho việc xây dựng 1 trang web
- nó cung cấp nhiều lợi ích cho việc xây dựng 1 trang web như tính tại sử dụng lại các phần của trang web mà không cần phải code lại.
- tự cập nhật dữ liệu khi ta thay đổi mà không cần phải load lại toàn bộ trang web.
- có Vue CLI: Công cụ CLI mạnh mẽ giúp bạn khởi tạo dự án, cài đặt cấu hình và sử dụng plugin chỉ trong vài lệnh đơn giản.
- Vue sử dụng Virtual DOM thông qua hàm render để tối ưu hóa việc cập nhật giao diện, giúp tăng tốc độ xử lý và giảm thiểu các thao tác không cần thiết.
- Tổng hợp được nhiều framework giúp ta có thể xây dựng được 1 trang với giao diện đẹp hơn và mang tính tái sử dụng lại code.
- có các công cụ hỗ trợ rất nhiều cho việc xây dựng website gồm các công cụ như Vue Devtools, vue router, 
- Theo điều kiện hiện tại với các trang web hiện đều đang xây dựng dựa trên SPA và MPA thì ta lên tìm hiểu và học vue.js

