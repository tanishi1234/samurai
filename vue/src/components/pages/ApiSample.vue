<script setup lang="ts">
import { ref, watch } from 'vue';
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
</script>

<template>
  <div>
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
  </div>
</template>
