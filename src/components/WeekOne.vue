<script>
export default {
  name: 'TitleLogin',
  props: {
    msg: String
  },
  data() {
    return {
      list:['apple','fish','banana','orange'],
      note:'',
      name: '',
      message: '',
      username: '',
      password: '',
      confirmPassword: '',
      sex: '',
      a: null,
      b: null,
      sum: null,
      difference: null,
      multiply: null,
      divide: null,
      user: {
        name: 'Tom',
        country: 'USA',
        age: '40'
      },
      box: {
        background: 'gray',
        display: 'flex',
      },
      boxContent: {
        padding: '10px',
        textAlign: 'left',
        alignItems: 'start',
      },
      pStyle: {
        margin: '10px',
        textAlign: 'start',
      },
      report:{
        position:'absolute',
        top:'0',
        left:'30px',
        backgroundColor: 'whitesmoke',
        fontSize: '30px',
      },
      button:{
        padding: '10px',
        margin: '10px',
      }
    };
  },
  watch: {
    name(newValue, oldValue) {
      if (newValue) {
        this.message = `Hello, ${newValue}! (You changed from "${oldValue}" to "${newValue}")`;
      } else {
        this.message = 'Please enter a valid message!';
      }
    }
  },
  computed: {
    passwordMismatch() {
      return this.password && this.confirmPassword && this.password !== this.confirmPassword;
    },
  },
  methods: {
    focusInput() {
      this.$refs.inputRef.focus(); // Truy cập phần tử DOM qua $refs
    },
    greeting(message) {
      alert(message);
    },
    submitForm() {
      if (this.passwordMismatch) {
        alert('Vui lòng kiểm tra lại mật khẩu.');
        return;
      }
      alert(`Đăng nhập thành công!\nTên đăng nhập: ${this.username}`);
    },
    calculate(sum, difference, multiply, divide) {
      if (sum) {
        this.sum = this.a + this.b;
      }
      if (difference) {
        this.difference = this.a - this.b;
      }
      if (multiply) {
        this.multiply = this.a * this.b;
      }
      if (divide) {
        if (this.b !== 0) {
          this.divide = this.a / this.b;
        } else {
          this.divide = "Null";
        }
      }
    }
  }
}
</script>
<template>
  <h2>{{ msg }}</h2>
  <div :style="box">
    <div :style="boxContent">
      <form @submit.prevent="submitForm">
        <div>
          <label for="username">Tên đăng nhập:</label>
          <input type="text" id="username" v-model="username" required/>
        </div>
        <div>
          <label for="password">Mật khẩu:</label>
          <input type="password" id="password" v-model="password" required/>
        </div>
        <div>
          <label for="confirmPassword">Nhập lại mật khẩu:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" required/>
        </div>
        <p :style="report" v-if="passwordMismatch" style="color: red;">Mật khẩu không khớp</p>
        <select v-model="sex">
          <option disabled value="">Please select one</option>

          <option>male</option>

          <option>female</option>
        </select>
        <p>Selected: {{ sex }}</p>
        <button :style="button" type="submit">Đăng nhập</button>
        <p :style="pStyle">Nội dung vừa được nhập <br> {{ username }} -- {{ sex }} </p>
      </form>
      <br>
      <br>
      <div class="exAboutFor">
        Ví dụ về v-for
        <ul>
          <li v-for="(item,index,key) in user" :key="key">
            {{ key }}. {{ index }} - {{ item }}
          </li>
        </ul>
      </div>
      <div class="exMath">
        <form @submit.prevent=calculate(true,true,true,true)>
          <div>
            <label for="a">Nhap gia tri cua a</label>
            <input type="text" id="a" v-model.number="a" placeholder="Nhap gia tri a">
          </div>
          <div>
            <label for="b">Nhap gia tri cua b</label>
            <input type="text" id="b" v-model.number="b" placeholder="Nhap gia tri b">
          </div>
          <button :style="button" type="submit">Tính toán</button>
        </form>
        <p :style="pStyle" v-if="sum !== null">Tong cua 2 gia tri la {{ sum }}</p>
        <p :style="pStyle" v-if="difference !== null">Hieu cua 2 gia tri la {{ difference }}</p>
        <p :style="pStyle" v-if="multiply !== null">Nhan cua 2 gia tri la {{ multiply }}</p>
        <p :style="pStyle" v-if="divide !== null">Chia cua 2 gia tri la {{ divide }}</p>
      </div>
      <div class="exWatcher">
          <h1>EXAMPLE WATCHER</h1>
          <input v-model="name" placeholder="enter your name in here"/>
          <p>{{ message }}</p>
      </div>
      <div>
        <input ref="inputRef" placeholder="Enter something" />
        <button @click="focusInput">Focus Input</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
input {
  width: 100%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  font-size: 16px;
}
form {
  display: flex;
}
</style>