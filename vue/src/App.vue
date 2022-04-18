<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import RefSample from './components/RefSample.vue';
import axios from 'axios';

const message = ref("");
axios.get('/api/hello/laravelworld').then(res => {
  message.value = res.data;
})

interface UserModel {
  id: number;
  name: string;
  email: string;
}
const userId = ref("1");
const user = ref<UserModel>({
  id: 0, name: "", email: "",
});
const getUser = (id: String|number) => {
  if(id) {
    axios.post('/api/graphql', {
      query: `{
        user(id: ${id}) {
          id
          name
          email
        }
      }`,
    }).then(res => {
      user.value = res.data.data.user ?? { id: 0, name: "", email: "" };
    })
  }
}
getUser(1);
watch(userId, (id) => {
  getUser(id);
})

const refSample = ref<InstanceType<typeof RefSample>>();
onMounted(() => {
  if(!refSample.value) return;
  console.log(JSON.stringify(refSample.value))
  console.log(refSample.value?.counter())
})
</script>

<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <div id="message">{{ message }}</div>
    <div style="padding-top: 1rem;">
      <div><label>user id:</label><input type="text" v-model="userId" /></div>
      <div style="border: solid 1px; margin: 1rem; padding: 1rem; text-align: center;">
        <div v-if="user.id">
          <p>{{ user.name }}</p>
          <p>{{ user.email }}</p>
        </div>
        <div v-else>Not Found</div>
      </div>
    </div>
    <ref-sample ref="refSample"></ref-sample>
    <button @click="refSample?.counter">count</button>
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
