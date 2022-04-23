<script lang="ts" setup>
import { ref } from 'vue';

const text = ref("");
</script>

<template>
  <div>
    <h1><slot name="title">タイトル</slot></h1>
    <div>
      <label>テキストを入力してください : </label>
      <input type="text" v-model="text" />
    </div>
    <div>
      <slot :text="text">ボディ</slot>
    </div>
  </div>
</template>