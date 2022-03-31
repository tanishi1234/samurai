<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import axios from 'axios';

const message = ref("");
axios.get('/api/hello/laravelworld').then(res => {
  message.value = res.data;
})
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div id="message">{{ message }}</div>
  </div>
</template>

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
