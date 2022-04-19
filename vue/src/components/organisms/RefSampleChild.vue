<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
const counter = () => {
  count.value++;
}
defineExpose({
  counter,
})
</script>

<template>
  <div>This is RefSample.vue</div>
  <button @click="counter">count is: {{ count }}</button>
</template>