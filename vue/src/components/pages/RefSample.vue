<script setup lang="ts">
import { ref, onMounted } from 'vue';
import RefSampleChild from '../organisms/RefSampleChild.vue'

const child = ref<InstanceType<typeof RefSampleChild>>();
onMounted(() => {
  if(!child.value) return;
  console.log(JSON.stringify(child.value))
  console.log(child.value?.counter())
})
</script>

<template>
<div>
  <ref-sample-child ref="child" />
  <button @click="child?.counter">count</button>
</div>
</template>