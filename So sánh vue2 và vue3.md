**Hiệu Năng**
+ vue3: ta có thể khai báo thư viện mà không cần thiết phải cài đặt nó

      import { ref } from 'vue'; // Chỉ import module cần thiết
      const count = ref(0);
      console.log(count.value);
+ vue2: ta phải cài đặt cho đủ thư viện thì mới chạy được

**Composition API vs Options API**

+ vue3(thì sử dụng theo CompositionAPI):Dễ dàng chia logic phức tạp thành các function riêng biệt và sử dụng lại trong nhiều component. Nhưng mà nó lại gây khó hiểu cho người mới học với nhưng khái niệm reactive, ref, computed (lên học hơn bởi do tính tái sử dụng nổi bật hơn so với vue2)

       import { ref, onMounted } from 'vue';

       export default {
        setup() {
          const count = ref(0);
          const increment = () => count.value++;
          onMounted(() => console.log('Component mounted!'));
          return { count, increment };
         },
       };
+ vue2(sử dụng theo Options API):mặc dù giúp người mới học dễ hiểu hơn bởi nó chia ra từng thành phần riêng biệt nhưng đổi lại nó sẽ hạn chế cho tái sử dụng lại code bắt ta phải phụ thuộc vào mixins nhiều
   
       export default {
         data() {
           return { count: 0 };
         },
       methods: {
          increment() {
            this.count++;
          },
       },
       mounted() {
           console.log('Component mounted!');
       },
       };

**Fragment (Multi-root Components)**

+ vue3:cho phép sử dụng nhiều root node có tác dụng làm cho bố cục của giao diện không bị ảnh hưởng nhiều do không bắt buộc phải có wrapper div 
+ vue2:chỉ cho phép 1 root node do cách Vue 2 quản lý Virtual DOM, nó yêu cầu mỗi component được biểu diễn dưới dạng một cây DOM duy nhất. Vì nó bắt buộc phải có wrapper div lên điều này có thể gây ra 1 số lỗi liên quan đến qiao diện

**Teleport**
Teleport là một tính năng mới trong Vue 3, cho phép bạn di chuyển nội dung của một component đến một vị trí khác trong DOM, ngoài cây DOM của component cha hiện tại.
Do trong vue2 mọi thành phần của component đều phải được render trong cấu trúc DOM của nó nên sẽ không có chức năng này.

     <template>
         <div>
             <h1>Page Title</h1>
             <teleport to="body">
         <div>Rendered in body</div>
             </teleport>
         </div>
     </template>

**Reactive System**
+ Vue 2 :sử dụng Object.defineProperty để thiết lập các thuộc tính dữ liệu phản ứng. Giới hạn chỉ có thể theo dõi các thuộc tính đã được khai báo trước. Nếu thêm thuộc tính mới hoặc thay đổi kích thước mảng, hệ thống phản ứng sẽ không tự động nhận biết.
              
      export default {
        data() {
            return { state: { count: 0 } };
        },
        methods: {
           increment() {
                this.state.count++;
           },
        },
      };
+ Vue 3 :sử dụng Proxy để theo dõi được mọi thao tác trên đối tượng, kể cả việc thêm, xóa thuộc tính hoặc thay đổi kích thước mảng. Hiệu suất tốt hơn, quản lý trạng thái phức tạp dễ dàng hơn.

        import { reactive } from 'vue';
        const state = reactive({ count: 0 });
        state.count++;

**TypeScript**
+ vue2: Phụ thuộc vào thư viện vue-class-component(Do cơ chế Option API). Cần khai báo rõ ràng các kiểu dữ liệu trong lớp, không được tự động suy luận.

        import Vue from 'vue';
        import Component from 'vue-class-component';
        @Component
        export default class App extends Vue {
          message: string = 'Hello Vue 2 with TypeScript!';
        
          get uppercaseMessage(): string {
            return this.message.toUpperCase();
          }
        
          changeMessage(): void {
              this.message = 'New Message';
          }
        }
+ vue3: Không cần dùng thư viện bổ trợ như vue-class-component(Do cơ chế Composition API). TypeScript hỗ trợ sâu hơn thông qua các hàm như ref, reactive, computed, và watch, giúp tự động suy luận kiểu.

        <script lang="ts">
        import { ref } from 'vue';
        
        export default {
          setup() {
            const message = ref<string>('Hello Vue 3 with TypeScript!');
        
            const uppercaseMessage = (): string => {
              return message.value.toUpperCase();
            };
        
            const changeMessage = (): void => {
              message.value = 'New Message';
            };
        
            return { message, uppercaseMessage, changeMessage };
          },
        };
        </script>

**Custom Directives và Lifecycle Hooks**

- vue2:ta phải đăng ký directive bằng cách sử dụng Vue.directive() (global) hoặc khai báo trực tiếp trong phần directives của một component (local).

        import Vue from 'vue';

        Vue.directive('highlight', {
           bind(el, binding) {
             el.style.backgroundColor = binding.value || 'yellow';
           },
        });

        <template>
          <div v-highlight="'lightblue'">Nền màu xanh nhạt</div>
        </template>
- Custom Directives trong Vue 2 hỗ trợ các lifecycle hooks sau:
+ bind: Gọi một lần khi directive được gắn vào phần tử.
+ inserted: Gọi khi phần tử được chèn vào DOM.
+ update: Gọi khi giá trị của directive hoặc thuộc tính của phần tử thay đổi.
+ componentUpdated: Gọi sau khi cập nhật lại toàn bộ thành phần con.
+ unbind: Gọi khi directive được gỡ khỏi phần tử.

- vue3: giới thiệu một cú pháp mới và các API để tạo directives. Các directives giờ đây được đăng ký thông qua một hàm đơn giản hoặc đối tượng

        import { createApp } from 'vue';
        
        const app = createApp({});
        app.directive('highlight', (el, binding) => {
           el.style.backgroundColor = binding.value || 'yellow';
        });
        app.mount('#app');
- Trong Vue 3, các lifecycle hooks cho directives đã được đổi tên và gọn gàng hơn:
+ created (thay cho bind): Gọi một lần khi directive được gắn vào phần tử.
+ beforeMount (thay cho inserted): Gọi trước khi phần tử được chèn vào DOM.
+ mounted: Gọi khi phần tử đã được chèn vào DOM.
+ beforeUpdate: Gọi trước khi giá trị của directive thay đổi.
+ updated: Gọi sau khi giá trị của directive thay đổi.
+ beforeUnmount (thay cho unbind): Gọi trước khi directive được gỡ.
+ unmounted: Gọi sau khi directive được gỡ khỏi phần tử.

Trong vue3 có thêm các lifecycle hooks mới:
+ onErrorCapture(Vue 2 dùng errorHandler)	Xử lý lỗi trong các component con hoặc trong chính component.
+ onRenderTracked: theo dõi reactive dependency được render trong component.
+ onRenderTriggered: xác định khi nào component render lại do reactive dependency thay đổi.

**Global API**
+ vue3:module hóa API

        import { createApp } from 'vue';
        import App from './App.vue';
        const app = createApp(App);
        app.component('MyComponent', {
             template: '<div>My Component</div>',
        });
        app.mount('#app');
+vue2: gắn trực tiếp vào Vue

        import Vue from 'vue';
        import App from './App.vue';
        
        Vue.component('MyComponent', {
           template: '<div>My Component</div>',
        });
        
        new Vue({
           render: h => h(App),
        }).$mount('#app');

### Đánh giá chung và tính sử dụng lâu dài
vue3:nên sử dụng nó sẽ giúp ta nhận được cập nhật tính năng mới và cải tiến hiệu năng.
vue2:Chỉ còn hỗ trợ bảo trì và sửa lỗi, không phát triển thêm tính năng mới.
