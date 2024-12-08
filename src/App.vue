<template>
  <div>
    <button @click="pages = 'HelloWorld'">Home</button>
    <button @click="pages = 'WeekOne'">WeekOne</button>
    <button @click="pages = 'WeekTwo'">WeekTwo</button>
    <component :is="pages"></component>
  </div>
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogTitle v-for="post in posts" :key="post.id" :msg="post.title" @enlarge-text="postFontSize += 0.1"
               :posts="posts"/>
  </div>
  <MessageReport>SomeThing bad happened</MessageReport>
  <p>Current Count: {{ count }}</p>
  <IncrementButton @increaseBy="incrementCount"/>
  <div>
    <SubmitLogin @submit="handleSubmit"/>
    <div v-if="userData">
      <h3>Submitted Data:</h3>
      <p>Email: {{ userData.email }}</p>
      <p>Password: {{ userData.password }}</p>
    </div>
  </div>
  <ChildComponent>
    <template v-slot:default="slotProps">
      <p>{{ slotProps.message }}</p>
    </template>
  </ChildComponent>
  <button @click="loadComponent">Load Component</button>
  <component :is="asyncComponent" v-if="isLoaded"></component>
</template>
<script>
import {ref} from 'vue';
import { defineAsyncComponent } from 'vue';
import BlogTitle from './components/WeekTwo.vue'
import MessageReport from './components/WeekTwo.vue'
import HelloWorld from "@/components/HelloWorld.vue";
import WeekOne from './components/WeekOne.vue'
import WeekTwo from "@/components/WeekTwo.vue";
import IncrementButton from './components/WeekTwo.vue'
import SubmitLogin from './components/WeekTwo.vue'
import ChildComponent from './components/WeekTwo.vue';
export default {
  name: 'App',
  components: {
    BlogTitle, MessageReport, WeekOne, WeekTwo, HelloWorld, IncrementButton, SubmitLogin,ChildComponent
  },
  setup() {
    const pages = ref('HelloWorld');
    const postFontSize = ref(1)
    const posts = ref([
      {id: 1, title: 'My journey with Vue'},
    ]);
    return {
      posts, postFontSize, pages
    };
  },
  data() {
    return {
      count: 0,
      userData: null,
      asyncComponent: null,
      isLoaded: false,
    };
  },
  methods: {
    loadComponent() {
      this.asyncComponent = defineAsyncComponent(() => import('./components/WeekTwo.vue'));
      this.isLoaded = true;
    },
    handleSubmit(data) {
      this.userData = data;
      console.log('Form submitted with data:', data);
    },
    incrementCount(value) {
      this.count += value;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
