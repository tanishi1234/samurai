<script setup lang="ts">
import { ref } from 'vue';
import MyVIf from '../organisms/MyVIfChild.vue'

const isHoge = ref(true);
</script>

<template>
<div>
  <div>
    <my-v-if :is-hoge="isHoge" />
    <button @click="isHoge = !isHoge">toggle</button>
  </div>
</div>
</template>