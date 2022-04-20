<script setup lang="ts">
interface Props {
  isHoge: Boolean,
}

const { isHoge } = defineProps<Props>()
</script>

<template>
<div>
  <span v-if="isHoge">hoge</span>
  <span v-else>huga</span>
</div>
</template>