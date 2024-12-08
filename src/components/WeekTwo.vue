<script setup>
import { ref, onMounted, defineProps ,defineEmits} from 'vue';
const props = defineProps({
  msg: String,
  posts: Array,
});
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
function submitForm(email, password) {
  emit('submit', { email, password });
}
const list = ref([1, 2, 3]);
const itemRefs = ref([]);
onMounted(() => {
  itemRefs.value.forEach((item) => {
    console.log(item.textContent);
  });
  console.log(props.msg);
});
const username = ref('');
const sum = ref(0);
const a = ref('');
const b = ref('');
const message = ref('Hello from SlotPOST!');
function sumEnable() {
  sum.value = parseFloat(a.value) + parseFloat(b.value);
}
const email = ref('');
const password = ref('');
const vHighlight = {
  beforeMount: (el) => {
    el.style.backgroundColor = 'yellow';
  }
}
const vFocus = {
  mounted: (el) => el.focus()
}
const inputRef = ref(null);
const focusInput = () => {
  inputRef.value.focus();
};
</script>
<template>
  <div>
    <div>
      <input ref="inputRef" v-focus />
      <button @click="focusInput">Focus vào Input</button>
    </div>
    <div>
       <p v-highlight>This sentence is important!</p>
    </div>
    <div>
      <slot :message="message"></slot>
    </div>
    <div>
    <h2>Login Form</h2>
    <form @submit.prevent="submitForm(email, password)">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" id="email" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
    <button @click="$emit('increaseBy', 1)">
      Increase by 1
    </button>
    <h1>{{ msg }}</h1>
    <slot/>
    <button @click="$emit('enlarge-text')">Big text</button>
    <div>
      <input v-model="username" type="text" />
      <p>{{ username }}</p>
    </div>
    <div>
      <input v-model.number="a" type="text" />
      <input v-model.number="b" type="text" />
      <button @click="sumEnable">CALCULATE SUM</button>
      <p>{{ sum }}</p>
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index" :ref="el => itemRefs[index] = el">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
