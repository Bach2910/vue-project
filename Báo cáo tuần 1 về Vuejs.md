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
                    deep: true
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

**v-for**: Lặp qua danh sách cũng gần giống với foreach
Ví dụ

    :v-for="(item, index) in foods" :key="index"
    {{ index + 1 }}. {{item.name}} - Price:{{item.price}} VND // goi ra
    data() {
      return {
        food: [
          { name: "fish", price: 100000 },
          { name: "meat", price: 200000 },
          { name: "sushi", price: 300000 },
      ],
    };

**v-bind**: Liên kết thuộc tính

    <a v-bind:href="url"></a> <!-- cú pháp viết tắt --> <a :href="url">

**v-on**: Lắng nghe sự kiện cũng được viết gọn là @click

    <a v-on:click="doSomething"></a> <!-- cú pháp ngắn gọn -->@click="doSomething">

![](/images/Aspose.Words.545ef93a-01ce-471f-9f49-2f69767c90a6.003.png)

**v-show**: chỉ thị v-show hoạt động tương tự như v-if, nhưng thay vì loại bỏ phần tử khỏi DOM, nó chỉ thay đổi thuộc
tính
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
    <script
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

**Template Refs**

+ cách để truy cập trực tiếp vào các phần tử DOM. Cách thường được dùng giống như với :key.

      <input ref="input">
+ Dùng ref ở trong v-for

      <li v-for="(item, index) in list" :key="index" ref="items">
        {{ item }}
      </li>

**Components Basics**
Mô hình của Vue thường được xây dựng như sau:
![img.png](images/img.png)

+ Defining a Component: nơi bạn có thể khai báo các thuộc tính như data, methods, props

        export default {
              props: {
                  msg: String
              },
              data() {};
              method() {};
              computed() {};
+ Passing Props: cách để truyền dữ liệu từ component cha sang component con. Bạn có thể định nghĩa props trong component
  con và truyền giá trị từ component cha bằng cách sử dụng thuộc tính trong thẻ component con.
  ở file App.vue là component cha ta khai báo như sau:

        import TitleLogin from './components/WeekTwo.vue'
        export default {
              name: 'App',
              components: {
                  TitleLogin
              },
        }
        
        <template>
             <TitleLogin msg="Welcome to Your Vue.js App"/>
        </template>

trong đoạn này đã import cho file App.vue sử dụng phần tử của component con của file WeekTwo.vue là 'TitleLogin'

        name: 'TitleLogin',
        props: {
             msg: String
        },
        
        <h2>{{ msg }}</h2>

khi khởi chạy ta sẽ chạy ra nội dung có trong component ở App.vue ta sẽ được kết quả khi chạy như sau: 
        ![img.png](images/img1.png)
nếu ta tạo thêm 1 component giống vậy nữa thì ta sẽ được kết là phần component TitleLogin sẽ được tạo ra thêm 1 lần nữa và toàn bộ nội dung component con trong WeekTwo sẽ được lặp lại 1 lần nữa.
        ![img.png](images/img2.png)
ta có thể khai báo 1 hàm và dùng v-for để không cần phải tạo nhiều component như ví dụ trên:

      const posts = ref([
          { id: 1, title: 'My journey with Vue' },
          { id: 2, title: 'Blogging with Vue' },
          { id: 3, title: 'Why Vue is so fun' } 
      ])
+ Listening to Events:quá trình phản hồi khi một sự kiện được kích hoạt từ một component con (child component) hoặc từ các sự kiện DOM gốc do trình duyệt tạo ra.
có thể gọi sự kiện đó ra bằng cách như sau: 
Ví dụ tạo ra sự kiện phóng to chữ:

      @enlarge-text="postFontSize += 0.1"
khai báo nó ở bên weektwo: 
      
      defineEmits(['enlarge-text'])
      <button @click="$emit('enlarge-text')">Big text</button>

khi click vào cỡ ở trong component BlogTitle sẽ phóng to ra

+ Content Distribution with Slots: việc dùng slot nhằm mục đích là để truyền đi nội dung như dưới đây ta tạo 1 component gọi là MessageReport
  
       <MessageReport>SomeThing bad happened</MessageReport>
và gõ thêm dòng này lệnh này vào file WeekTwo thì nó sẽ hiện ra nội dung ta đã ghi trong Component:
         
       <slot/>
nó sẽ hiện ra kết quả: 
![img.png](images/img4.png)
+ Dynamic Components : cho phép bạn hiển thị các component khác nhau dựa trên dữ liệu hoặc điều kiện như trong ví dụ sau cho phép ta hiển thị các components khác nhau:

Khai báo các component:

      import HelloWorld from "@/components/HelloWorld.vue";
      import WeekOne from './components/WeekOne.vue'
      import WeekTwo from "@/components/WeekTwo.vue";  

Khi click vào các button sau sẽ chuyển sang componet khác( có thể dùng trong việc chuyênr tiếp các trang web cũng khá hợp lý)

    <button @click="pages = 'HelloWorld'">Home</button>
    <button @click="pages = 'WeekOne'">WeekOne</button>
    <button @click="pages = 'WeekTwo'">WeekTwo</button>
    <component :is="pages"></component>

Self Closing Tags: là các component như kiểu các ví dụ trên ta đã tạo được như là <BlogTitle/>

**Component Registration**
Có 2 cách để Component Registration là Global Registration và Local Registration. Tại sao phải nghĩ ra 2 cách như vậy để làm gì ?
Tại vì: 
+ Global Registration: Component có thể được sử dụng ở bất kỳ đâu trong ứng dụng, phù hợp cho những component dùng nhiều lần trong nhiều nơi.
        Ví dụ:
        
         import MessageReport from './components/WeekTwo.vue'

         app.component('MessageReport', MessageReport)

       
+ Local Registration: Component chỉ có sẵn trong phạm vi của component cha, giúp tránh làm ô nhiễm không gian tên toàn cục và giảm khả năng xung đột khi sử dụng các component tương tự.      
        ví dụ:

        import MessageReport from './components/WeekTwo.vue'
        components: {
              MessageReport
        },
***PROPS***
Là 1 phần trong vue giúp truyền các component từ cha đến con nhằm mục đích tái sử dụng lại và tùy chỉnh lại các components
- Props Declaration
ví dụ:

      const props = defineProps(['msg'])
      console.log(props.msg)
- Reactive Props Destructure:giúp theo dõi trạng thái dựa trên việc truy cập thuộc tính
        
      const { msg } = defineProps(['msg'])
      watchEffect(() => {
         console.log(msg) 
      })
- Static vs. Dynamic Props: các biến động thường bao gồm các phần như number,boolean,Array,Object
+ Number

      <BlogTitle :likes="42" />
+ Boolean

      <BlogTitle :is-published="false" />    
+ Array

      <BlogTitle :comment-ids="[1, 2, 3]" />
+ Object

      <BlogTitle :author="{ name: 'Bach', company: 'ABC' }" />

- Binding Multiple Properties Using an Object
ví dụ: 

      const post = 
           {id: 1, 
            title: 'My journey with Vue'
      }
khi gọi nó ra thì ta chỉ cần chạy câu lệnh sau:

      <BlogTitle v-bind="post" /> thay vì chạy phải lệnh sau <BlogTitle :id="post.id" :title="post.title" />
- Prop Validation: các thành phần trong đều có thể gọi ra được theo yêu cầu props của chúng ví dụ như: 

      defineProps({
         propA: Number,
         propB: [String, Number],
         propC: {
             type: String,
             required: true
         },
         propD: {
             type: [String, null],
             required: true
         },
         propE: {
             type: Number,
             default: 100
         },
         propF: {
             type: Object,
             default(rawProps) {
                 return { message: 'hello' }
              }
         }
      })
rồi gọi các hàm ấy ra:

     <MessageReport :propA="10"
                    :propB="'Hello'"
                    propC="Required String"
                    propD="This is propD"
                    :propE="200"
                    :propF="{ message: 'Hello' }">
     </MessageReport>
trong trường hợp nêú bị báo lỗi "Cannot read properties of null (reading 'emitsOptions')" thì lên kiểm tra lại lại phiên bản Vue đang sử dụng có thể là do chưa cập nhật lên bị lỗi
      
     npm update

***Component Events***

được sử dụng để giao tiếp từ child component đến parent component, hoặc giữa các component khác nhau thông qua một event.

- Emitting and Listening to Events:sử dụng phương thức tích hợp $emit Ví dụ:

      export default {
            methods: {
               sendMessage() {
                   this.$emit('custom-event', 'Hello from child!'); 
               }
            }
      };
      <button @click="sendMessage">Gửi tin nhắn</button>
- Event Arguments: các dữ liệu được truyền kèm khi sự kiện được phát ra từ child component
  ví dụ: 
component con:
         
          <button @click="$emit('increaseBy', 1)">
                  Increase by 1
          </button>
          
component cha:

          <IncrementButton @increaseBy="incrementCount" />
ví dụ này khi click vào sẽ tăng số lên 1 

- Events Validation: chúng ta lắng nghe sự kiện submit từ Child Component và xử lý dữ liệu sau khi nhận được sự kiện hợp lệ.

Ví dụ: 
bên component con

     const emit = defineEmits({
         click: null,
         submit: ({ email, password }) => {
            if (email && password) {
                return true;
            } else {
                console.warn('Invalid submit event payload!');
                return false;
            }
         }
     });

bên component cha tạo hàm để check xem có thỏa mãn ko

     handleSubmit(data) {
         this.userData = data;
         console.log('Form submitted with data:', data);
     }

và ta sẽ được kết quả hiện ra được tài khoản và mật khẩu đã nhập 

**Component v-model**
v-model cũng có thể dùng giữa các giá trị trong component con và cha

Use in Basics way:
+ component con
    
      <template>
           <div>
             < input v-model="inputValue" />
           </div>
      </template>
      <script setup>
           import { ref } from 'vue';
           const inputValue = ref(''); 
      </script>
+ componet cha
 
      <template>
          <div>
            <input v-model="inputValue" />
          </div>
      </template>
      <script setup>
           import { ref } from 'vue';
           const inputValue = ref(''); // Khai báo dữ liệu trong component con
      </script>

- v-model arguments: v-model trên một thành phần cũng có thể chấp nhận một đối số như vậy ta có thể dùng như sau
ví dụ: 

      <script setup>
          import { ref } from 'vue'
          import MyComponent from './MyComponent.vue'
          const bookTitle = ref('v-model argument example')
      </script>
      <template>
          <h1>{{ bookTitle }}</h1>
          <MyComponent v-model:title="bookTitle" />
      </template>
- Multiple v-model bindings

component cha: 

       const first = ref('John')
       const last = ref('Doe')

      <template>
           <h1>{{ first }} {{ last }}</h1>
           <UserName
                    v-model:first-name="first"
                    v-model:last-name="last"
            />
     </template>
component con:

     <script setup>
           const firstName = defineModel('firstName')
           const lastName = defineModel('lastName')
     </script>
     <template>
           <input type="text" v-model="firstName" />
           <input type="text" v-model="lastName" />
     </template>

- Handling v-model modifiers: Vue hỗ trợ một số modifiers giúp bạn thay đổi cách thức hoạt động của v-model. Các modifiers phổ biến nhất là lazy, number, và trim.
ví dụ:
component cha

       <script setup>
            import { ref } from 'vue'
            import MyComponent from './MyComponent.vue'
            const myText = ref('')
      </script>
      <template>
          This input capitalizes everything you enter:
          <MyComponent v-model.capitalize="myText" />
      </template>

componet con

      <script setup>
            import { computed } from 'vue'

      const [model, modifiers] = defineModel({
            set(value) {
             if (modifiers.capitalize) {
                return value.charAt(0).toUpperCase() + value.slice(1)
             }
              return value
            }
      })
      </script>
      <template>
           <input type="text" v-model="model" />
      </template>
Đoạn mã trên sử dụng defineModel để xử lý giá trị nhập vào với các modifier, tạo ra một v-model linh hoạt có thể tùy chỉnh hành vi cập nhật giá trị (ví dụ như viết hoa chữ cái đầu tiên).

***Fallthrough Attributes***
những thuộc tính được truyền từ component cha vào component con mà không cần phải khai báo chúng trực tiếp trong props của component con.

Basics:

     <button class="large">Click Me</button>

Bên component cha gọi ra như sau:

    <BlogButton class="large" />

Ở đây, <BlogButton>không khai báo class là một prop được chấp nhận. Do đó, class được coi là một thuộc tính fallthrough và tự động được thêm vào <BlogButton>phần tử gốc

- class and style Merging: Nếu phần tử gốc của thành phần con đã có các thuộc tính class hoặc hiện có style, nó sẽ được hợp nhất với các giá trị class và style được thừa hưởng từ phần tử cha

      <button class="btn large">Click Me</button>
- v-on Listener Inheritance: dùng giống như với v-on bình thường 
      
       <MyButton @click="onClick" />
- Disabling Attribute Inheritance:
+ Nếu bạn không muốn một thành phần nào đó tự động kế thừa các thuộc tính, bạn có thể thiết lập inheritAttrs: false trong các tùy chọn của thành phần đó.
  
      <script setup>
        defineOptions({
        inheritAttrs: false
      })
      </script>
+ Hoặc ta cũng có thể truy cập trực tiếp vào bằng $attrs

      <span>Fallthrough attributes: {{ $attrs }}</span>
+ Để đảm bảo rằng tất cả các thuộc tính (như class, v-on listener) được áp dụng cho phần tử <button> bên trong và không bị thừa kế bởi phần tử <div> bên ngoài, bạn có thể sử dụng inheritAttrs: false kết hợp với v-bind="$attrs" trong Vue.

      <div class="btn-wrapper">
           <button class="btn" v-bind="$attrs">Click Me</button>
      </div>
+ Accessing Fallthrough Attributes in JavaScript: để truy cập vào ta cần phải khai báo 
   
      <script setup>
          import { useAttrs } from 'vue'
          const attrs = useAttrs()
      </script>
trong ngữ cảnh ta dùng setup:
     
      export default {
           setup(props, ctx) {
              console.log(ctx.attrs)
           }
      }

***Slots***
là một cách để truyền nội dung từ component cha vào component con
+ ta có thể khai báo mặc định như sau

      <slot></slot>
+ Slot(''):Dành cho các thành phần như kiểu header, main ,aside

      <slot name="header"></slot>
+ Slot có Scoped Slot cho phép truyền dữ liệu từ component con ra ngoài và xử lý trong component cha mà không cần phải trực tiếp khai báo props 

      <template>
         <div>
            <slot :message="message"></slot>
         </div>
      </template>

      <script>
         export default {
          data() {
             return {
                message: 'Hello from ChildComponent!'
             };
          }
      };
      </script>

khi chạy nó sẽ hiện ra giá trị của message trong component con

***Provide / Inject***
cho phép truyền dữ liệu từ component cha xuống các component con mà không cần phải truyền qua props từng cấp 
Trong đó:
+ Provide: Được sử dụng trong component cha để cung cấp dữ liệu.
- khi có setup:

      <script setup>
        import { provide } from 'vue'
        provide(/* key */ 'message', /* value */ 'hello!')
      </script>
- xét export default:

      import { provide } from 'vue'

      export default {
          setup() {
             provide(/* key */ 'message', /* value */ 'hello!')
          }
      }


+ Inject: Được sử dụng trong component con để nhận dữ liệu từ component cha.
- khi có setup:
     
       <script setup>
          import { inject } from 'vue'

          const message = inject('message')
       </script>
- xét export default:

      import { inject } from 'vue'

      export default {
           setup() {
              const message = inject('message')
              return { message }
            }
      }
Lưu ý:
+ Slot: Cho phép truyền nội dung vào component từ bên ngoài, đặc biệt hữu ích khi muốn tạo các layout linh hoạt và tái sử dụng. Component cha có thể "đóng gói" nội dung vào slot của component con.(Interface)
+ Provide/Inject: Dùng để chia sẻ dữ liệu giữa các component không có mối quan hệ trực tiếp (không phải cha con). provide được sử dụng trong component cha để cung cấp dữ liệu, còn inject trong component con để nhận dữ liệu đó.(data)

***Async Components***
cho phép tải các component một cách bất đồng bộ (lazy-loading), giúp giảm kích thước ban đầu của ứng dụng và tối ưu hiệu suất.
ví dụ

     loadComponent() {
        this.asyncComponent = defineAsyncComponent(() => import('./components/WeekTwo.vue'));
        this.isLoaded = true;
     },
     
     <button @click="loadComponent">Load Component</button>
     <component :is="asyncComponent" v-if="isLoaded"></component>
khi chạy sẽ load lại component của WeekTwo mà ko load lại toàn bộ trang

***Custom Directives***
đây là 1 trong các cách tạo ra 1 Custom Directives 

     const vHighlight = {
        beforeMount: (el) => {
         .style.backgroundColor = 'yellow';
        }
     }

    <div>
       <p v-highlight>This sentence is important!</p>
    </div>
ví dụ: tạo ra 1 hàm vHighlight giúp đổi màu background của thẻ p trên 

- Khi nào ta lên sử dụng Custom Directives: Chỉ nên sử dụng các chỉ thị tùy chỉnh khi chức năng mong muốn chỉ có thể đạt được thông qua thao tác DOM trực tiếp 

ví dụ này ta sẽ tạo 1 biến vFocus để dùng chức năng mong muốn là v-focus

    const vFocus = {
        mounted: (el) => el.focus()
    }
     <input v-focus />
- Directive Hooks: với mọi Custom Directives đều được cung cấp các several hook functions

      const myDirective = {
       created(el, binding, vnode) {
       },
       beforeMount(el, binding, vnode) {},
       mounted(el, binding, vnode) {},
       beforeUpdate(el, binding, vnode, prevVnode) {},
       updated(el, binding, vnode, prevVnode) {},
       beforeUnmount(el, binding, vnode) {},
       unmounted(el, binding, vnode) {}
      }
- Hook Arguments: được truyền các các đối số sau:
+ el: phần tử mà chỉ thị được liên kết tới. Có thể sử dụng để thao tác trực tiếp DOM.
+ binding: một đối tượng có chứa các thuộc tính sau.
+ value: Giá trị được truyền cho chỉ thị. Ví dụ trong v-my-directive="1 + 1", giá trị sẽ là 2.
+ oldValue: Giá trị trước đó, chỉ khả dụng trong beforeUpdatevà updated. Giá trị này khả dụng bất kể giá trị có thay đổi hay không.
+ arg: Đối số được truyền cho chỉ thị, nếu có. Ví dụ trong v-my-directive:foo, đối số sẽ là "foo".

ví dụ vs binding:

     <div v-example:foo.bar="baz">
     {
       arg: 'foo',
       modifiers: { bar: true },
       value: /* value of `baz` */,
       oldValue: /* value of `baz` from previous update */
     }
trong đó: + arg: Đây là đối số của chỉ thị, ví dụ như v-bind:foo thì arg sẽ là 'foo'.
          + modifiers: Các sửa đổi, ví dụ v-on:click.prevent sẽ có { prevent: true }.
          + value: Giá trị được gắn với chỉ thị, ví dụ giá trị của v-model="baz" là giá trị của biến baz.
          + oldValue: Giá trị trước khi cập nhật, giúp so sánh sự thay đổi giữa lần gọi trước và sau.
các đối số chỉ thị tùy chỉnh có thể là động như sau:
 
    <div v-example:[arg]="value"></div>
