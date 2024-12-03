### **Cách bước để bắt đầu sử dụng được Vue trên laragon**

### + vào Terminal gõ lệnh ”npm install -g @vue/cli” ( Lệnh này sẽ giúp tại các thứ cần thiết để chạy vue).

### + để tạo dự án mới ta chạy lệnh “ vue create my-project”

+ sau đó “ cd my-project” để truy cập vào project rồi chạy lệnh “npm run serve”

* Kết quả: 

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.001.png)

Trong phpstoms ta sẽ được 1 thư mục có cấu trúc như sau:

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.002.png)

+ Tệp chính sẽ là main.js

+ App.vue sẽ là thư mục gốc

+ Trong thư mục components/: chứa các thành phần giao diện được tái sử dụng

***Kiến thức cần biết***

### **Reactive Data Binding**

Tự động đồng bộ dữ liệu giữa giao diện và logic thông qua các chỉ thị (directives) như v-model, v-bind.

V-model: giúp bạn kết nối một input field với một dữ liệu trong component

	 <(input hoặc textarea) v-model="message" placeholder="Type something">

            <p>Message: {{ message }}</p>

Nó còn tác dụng với các textarea, select

	 <select v-model="selectedOption">

    		<option disabled value="">Please select one</option>

    		<option>Option 1</option>

    		<option>Option 2</option>

    		<option>Option 3</option>

  	</select>
    <p>Selected: {{ selectedOption }}</p>

Các modifier của v-model:

+ lazy: với cái này thì sẽ lưu giá trị khi người dùng tap ra khỏi input

+ number: tự động chuyển đổi thành số

+ trim: giúp loại bỏ khoảng trắng ở đầu và cuối

Ta có làm với v-model với components nhưng ta cần phải xác định và phát hiện ra sự kiện input

    <template>

      <input :value="value" @input="$emit('input', $event.target.value)" />

    </template>

    <script>

      export default {

        props: ['value']

    };

    </script>

Trong trường hợp này là sẽ giúp ta lưu ra giá trị vừa nhập vào value

Lifecycle Hooks:(Phần này khá lằng nhăng lên đọc kĩ hơn)

Cũng như cái tên gần như là 1 vòng đời với nó ta có thể thực hiện các tác vụ như khởi tạo, hủy bỏ , cập nhật

+ beforeCreate(): là thời điểm bắt đầu tiến trình và khi dùng ta không thể nào truy cập vào được data, computed,
watchers

      beforeCreate() {

         console.log('beforeCreate');

      }

+ created(): như cái tên là được tạo ra và nó được gọi ngay khi instance được khởi tạo và giờ ta có thể truy cập vào
data, computed, watchers

      created() {

         console.log('created');

      console.log(this.message);

      }

+beforeMount(): nó sẽ được sử dụng ngay trước khi Vue instance được mount vào DOM , sau khi render hàm được gọi lần đầu
tiên được dùng trong khi DOM chưa được tạo và bạn không thể truy cập vào DOM elements

    beforeMount() {

      console.log('beforeMount');

    }

+ mount(): trái ngược với beforeMount nó được sử dụng sau khi đã được mount vào DOM dùng khi lúc bạn có thể truy cập
vào DOM và thực hiện các tác vụ liên quan đến DOM như cập nhật hoặc gọi API.

      mounted() {

        console.log('mounted');

      }

+ beforeUpdate(): dùng trước khi có sự thay đổi với data hoặc props

      beforeUpdate() {

        console.log('beforeUpdate');

      }

+ update(): dùng ngay sau khi Vue component được re-render và DOM được cập nhật.

      updated() {

        console.log('updated');

      }

+ beforeUnmount(): ngay trước khi Vue instance bị hủy bỏ (unmounted). Đây là thời điểm trước khi Vue bắt đầu làm sạch
các resources.

      beforeUnmount() {

        console.log('beforeUnmount');

      }

+ Unmount(): được gọi ngay sau khi Vue instance đã bị hủy bỏ và tất cả các listener sự kiện hoặc resources liên quan đã
được dọn dẹp. Dùng khi bạn có thể thực hiện các tác vụ sau khi Vue instance bị hủy, như giải phóng bộ nhớ hoặc dọn dẹp
tài nguyên

      unmounted() {

        console.log('unmounted');

      }

### **WATCHER(!!!!)**

Watchers là một tính năng trong Vue.js cho phép bạn theo dõi sự thay đổi của dữ liệu (data) và thực hiện các hành động (
ví dụ như gọi API, tính toán lại giá trị, hoặc thay đổi DOM) khi dữ liệu thay đổi.

Cách hoạt động: Khi một thuộc tính trong data thay đổi, watcher sẽ "lắng nghe" sự thay đổi đó và gọi một hàm xử lý mà
bạn đã chỉ định.

+ Format của watcher:

Sử dụng watch trong Vue instance: Bạn có thể khai báo các watcher trong object watch trong Vue instance.

Cơ chế hoạt động: Khi dữ liệu mà bạn "watch" thay đổi, hàm callback sẽ được gọi. Bạn có thể sử dụng watcher để thực hiện
các tác vụ bất đồng bộ như gọi API hoặc tính toán lại các giá trị phụ thuộc vào dữ liệu đó.

* How to use:

  + Basic: tạo 1 watcher để theo dõi 1 thuộc tính cụ thể của data và thực hiện hành động khi value change

        <template>

            <div>

            <input v-model="message" />

            <p>{{ message }}</p>

            </div>

        </template>
        <script>

        export default {

           data() {

               return {
               message: ''

         };
        },
           watch: {
             message(newValue, oldValue) {
             console.log('Message changed from', oldValue, 'to', newValue);
             }
           }
          };
        </script>

Với trường hợp này giá trị message sẽ thay đổi ( do người dùng nhập vào ô input), thì lúc này vue sẽ gọi hàm watch ra
chứa 2 tham số mới của oldValue, newValue.

+ Watcher cho nhiều thuộc tính:

       <div>
          <input v-model="message" />

          <input v-model="count" />

          <p>Message: {{ message }}</p>

          <p>Count: {{ count }}</p>
      </div>

      data() {
        return {

        message: '',

        count: 0

      };

      },

      watch: {

      message(newValue) {

      console.log('Message changed to:', newValue);

      },
      count(newValue) {

          console.log('Count changed to:', newValue);

       }

      }

Trường hợp là khi ta nhập giá trị mới vào cả message và count đều có watcher riêng biệt, và mỗi khi một trong hai giá
trị thay đổi.

+ Watcher với dữ liệu phức tạp:

Trong trường hợp khi bạn muốn theo dõi như 1 mảng và đối tượng, ta có thể dùng deep để theo dõi sâu vào từng chi tiết
của từng phần tử trong mảng và đối tượng.

     <template>

       <div>

       <input v-model="user.name" />

       <p>User Name: {{ user.name }}</p>

      </div>

    </template>

    <script>

       export default {

           data() {

           return {

           user: {

           name: ''

           }

         };

       },

      watch: {

          user: {

          handler(newValue) {

          console.log('User object changed:', newValue);

            },

          deep: true  // Bật chế độ theo dõi sâu

         }

      }

    };

     </script>

Khi ta thay đổi bất cứ thuộc tính nào của user thì nó sẽ tự gọi watcher về. Với deep: true, Vue sẽ theo dõi mọi thay đổi
trong user, không chỉ thay đổi trực tiếp của chính thuộc tính đó

+watchEffect: cho phép chúng ta theo dõi các phụ thuộc phản ứng của lệnh gọi lại một cách tự động, kết hợp theo dõi phụ
thuộc và tác dụng phụ thành một giai đoạn. Nó tự động theo dõi mọi thuộc tính phản ứng được truy cập trong quá trình
thực thi đồng bộ của nó.

Ví dụ:

    import { reactive, watchEffect } from 'vue';

    const state = reactive({ count: 0, name: 'Vue' });

    watchEffect(() => {

       console.log(state.count, state.name);

    });

    state.count++;

    state.name = 'React';

Trong trường hợp này thì nó sẽ tự theo dõi các giá trị của count và name sẽ tự động chạy lại và in ra các giá trị mới
của chúng.

+Stop Watcher: Do watcher được khai báo đồng bộ bên trong lên nếu trong trường hợp không đồng bộ thì ta phải dừng thu
công để không bị rò rỉ bộ nhớ

    <script setup>

      import { watchEffect } from 'vue';

      watchEffect(() => {});

      setTimeout(() => {

      watchEffect(() => {})

    }, 100)

    </script>

Và ta có 1 hàm trả về như sau:

    const unwatch = watchEffect(() => {})

    unwatch()

**Directives (Chỉ thị)**

**v-if**: Hiển thị điều kiện.

	Ví dụ: kiểm tra xem mật khẩu trùng nhau hay không hoặc là làm chức năng hidden

**v-for**: Lặp qua danh sách

    <a v-on:click="doSomething"></a> <!-- cú pháp ngắn gọn -->@click="doSomething">

**v-bind**: Liên kết thuộc tính

    <a v-bind:href="url"></a> <!-- cú pháp viết tắt --> <a :href="url">

**v-on**: Lắng nghe sự kiện cũng được viết gọn là @click

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.003.png)

**v-show**: chỉ thị v-show hoạt động tương tự như v-if, nhưng thay vì loại bỏ phần tử khỏi DOM, nó chỉ thay đổi thuộc tính
CSS display.

**v-else-if**: xác định điều kiện khác nếu v-if trước đó là false

(v-if:điều kiện thay đổi hiếm còn v-for là cho thường xuyên)

**Event Handling**
Dễ dàng xử lý sự kiện với cú pháp như @click="methodName".
**Animation**
Hỗ trợ tích hợp các hiệu ứng chuyển động, dễ dàng sử dụng giống như là làm với css bình thường.

Ví dụ:

    <p :class="{'animate-fade':

      @keyframes fadeIn {

         0% {

            opacity: 0;

         }

        100% {

           opacity: 1;

        }

     }

    .animate-fade {

        animation: fadeIn 0.5s ease-in-out;

    },

Computed
các giá trị được tính toán dựa trên các thuộc tính phản ứng. Chúng được "cache" (lưu trữ) và chỉ được tính lại khi các
phụ thuộc thay đổi. Điều này giúp tối ưu hóa hiệu suất, đặc biệt với các phép toán phức tạp.

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.004.png)

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.005.png)

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.006.png)

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.007.png)

**Method**

các hàm có thể được gọi trong template hoặc script. Mỗi khi được gọi, chúng thực thi lại. Chúng không lưu trữ giá trị mà
chỉ thực hiện hành động.

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.008.png)

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.009.png)

**Reactive State**

một cách để quản lý trạng thái (state) của ứng dụng

* property

Được khai báo bằng thuộc tính data

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.010.png)

Khi thay đổi nhưng giá trị này thì dữ liệu cũng sẽ bị thay đổi

* reactive

Dùng để tạo 1 đối tượng reactive( thường dùng khi quản lý nhiều dữ liệu

Phải khai báo bên trên “Là Import { reactive } from ‘vue’ ”

Truy cấp trực tiếp:state.property {message:’hello’)

 Ví dụ:

	Const “ ” = reactive({

		biến1: ‘’,

		Biến2:’’

    });

	Return {“ ”}

* ref

Tương tự nhu reactive nhưng thường dùng trong trường hợp cần watch 1 giá trị duy nhất

Truy cấp qua value {Ref(‘hello’)}

Ví dụ:

	Const “ ” = ref(0);

	Return {“ ”};

Computed Properties

 là các thuộc tính được tính toán từ trạng thái (state) hoặc dữ liệu (data) hiện tại.

Lý do cần dùng :

Thay vì lặp lại các phép tính trong nhiều phần của template, bạn có thể định nghĩa chúng một lần trong computed.

Thay vì phải làm như này:

    <p>{{ title }} -- {{ name }} -- {{ age }}</p> 

Ta có thể rut gọn bằng cách cho nó vào 1 actor như này

    actor() {

      return ${this.title} ${this.name} ${this.age};

    }

Xong gọi ra {{actor}}

Trường hợp khác có thể gọi ra như sau :

    const firstName = ref('John');

       const lastName = ref('Doe');

       const fullName = computed(() => ${firstName.value} ${lastName.value});

       return { firstName, lastName, fullName };

    }

Gọi ra fullname

Ta cũng thể dùng cả get set

    data() {

       return {

         firstName: 'John',

         lastName: 'Doe'

     };

    },

    computed: {

       fullName: {

         get() {

            return ${this.firstName} ${this.lastName};

       },
      set(newValue) {

           const parts = newValue.split(' ');

           this.firstName = parts[0] || '';

           this.lastName = parts[1] || '';

       }

      }

    }

Dùng trong trường hợp khi cần nhập dữ liệu từ input

Hoặc trong trường hợp tính số tiền hóa đơn này

    data() {

        return {

           cartItems: [

             { name: 'Apple', price: 10, quantity: 2 },

             { name: 'Banana', price: 5, quantity: 3 }

        ]

       };

    },

    computed: {

       totalPrice() {

           return this.cartItems.reduce((total, item) => {

           return total + item.price * item.quantity;

        }, 0);

    }

Rồi ta lại gọi hàm totaliprice ra

**Class and Style Bindings**

Liên kết thuộc tính class

Giúp đặt tên cho class để class không còn hiện là data123

Liên kết với 1 đối tượng

Trong trường hợp như này:

    return {

       Food: true,

       Water: false

    };

    <div :class="{ eat: Food, 'drink': Water }">Hello World</div>

Nếu thỏa mãn điều kiện trên thì sẽ được kết quả là

    <div class=”active”>Hello World</div>

Liên kết với 1 mảng 

     return {
          Eat: 'food',

          Drink: 'water'

     };

:class=”[Eat,drink]” == class=”food,water”

 Ta cũng có thể kết hợp cả chuỗi + mảng + đối tượng cùng với nhau

**Style Bindings**

Basic

    :style="styleObject"

Tương tự như với class ta cũng sẽ liên kết được với, mảng , đối tượng

Ví dụ

Đối tượng:

    Apple: {

      color: 'red',

      fontSize: '14px'

    }

    :style=”Apple”

Mảng

    Color: {

      color: 'blue'

    },

    Size: {

      fontSize: '16px'

    }

    :style=”[color,size]”

Ví dụ

Làm biến động

    Color:’red’,

    Size:14,

    <div :style="{ color: color, fontSize: Size + 'px' }">Dynamic Style</div>

Hiển nhiên là ta cũng có thể kết hợp cả class và style

**List Rendering**

Sẽ được kết hợp với v-for:

Cảm giác dùng sẽ hơi giống với foreach của laravel

Cũng sẽ lặp từng phần tử

     <div v-for="item in items" :key="item.id">

       {{ item }}

    </div>

Khác với foreach là phải :key đây là thuộc tính bắt buộc giúp Vue tối ưu hóa DOM

Ví dụ;

    <template>

      <ul>

        <li v-for="(item,index) in fruits" :key="index">

        {{ index + 1 }}. {{ item }}

        </li>

     </ul>

    </template>

    <script>

      export default {

       data() {

         return {

            fruits: ["Apple", "Banana", "Cherry"]

         };

      }

     };

    </script>

Lặp qua đối tượng:

Ví dụ:

    <div v-for="(value, key, index) in object" :key="key">

       {{ index }}: {{ key }} - {{ value }}

    </div>

    <template>

       <div>

         <p v-for="(value, key, index) in user" :key="key">

         {{ index }}: {{ key }} = {{ value }}

         </p>

      </div>

    </template>

    <script>

     export default {

       data() {

          return {

            user: {

            name: "John",

            age: 30,

            country: "USA"

            }

         };

       }

     };

    </script>

Khác với ví dụ trên là nếu qua object thì kết quả sẽ ra là

0: name = John

1: age = 30

2: country = USA

Nhờ có nó ta có thể làm thêm chức năng như them và xóa và với các components. Ta còn có thể kết hợp các điều kiện với
nhau

Even Handling:

Bao gồm các click, button, submit

Trường hợp của click:

+ Khi ta thêm @vào là sẽ thành viết tắt cho v-on

+ Phương thức xử lý sự kiện ta có thể định nghĩa cho nó như trong trường hợp này ta có thê định nghĩa nó để hiện thông
báo khi ta nhấn vào:

      <template>

       <div>

          <button @click="showAlert">Click me</button>

       </div>

      </template>

      <script>

      export default {

          methods: {

          showAlert() {

          alert("Button clicked!");

         }

        }

      };

      </script>

+ Truy tham số cho nó : Trường hợp này là nó sẽ hiện thông báo

      <template>

         <div>

            <button @click="greet('Hello')">Click me</button>

        </div>

      </template>

      <script>

        export default {

         methods: {

           greet(message) {

           alert(message);

           }

         }

       };

      </script>

+ Ngừng sự kiện với event.stopPropagation

      <div @click="parentClick">

          <button @click.stop="buttonClick">Click me</button>

      </div>

Nó sẽ chỉ hiện thông báo của butotnclick thôi còn parent thì không

+ ngừng hành vi với event.preventDefaut()

      <form @submit.prevent="submitForm">

          <button type="submit">Submit</button>

      </form>

Trong trường hợp này nó sẽ chặn làm cho form không gửi được

Sử dụng .once để lắng nghe sự kiện chỉ một lần

     <button @click.once="buttonClick">Click me</button>

Làm chỉ thấy được việc chỉ có 1 lần thôi

+ Sử dụng .key để xử lý các phím cụ thể

      <input @keyup.enter="submitForm" placeholder="Press Enter" />

Mặc định gắn thêm nút cho sự kiện này như trong trường hợp này enter

+ Kết hợp nhiều sự kiện với .native

Vue.js cung cấp cách lắng nghe sự kiện gốc (native event) trên các component bằng cách sử dụng .native.

     <my-component @click.native="handleClick"></my-component>
