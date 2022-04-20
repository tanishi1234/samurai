<script lang="ts" setup>
/**
 * スコープ付きスロットのサンプル
 * https://v3.ja.vuejs.org/guide/component-slots.html#%E3%82%B9%E3%82%B3%E3%83%BC%E3%83%95%E3%82%9A%E4%BB%98%E3%81%8D%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88
 */
import SlotScopeTemplate from '../templates/SlotScopeTemplate.vue'
</script>

<template>
  <slot-scope-template>
    <template #default="{ text }">
      <div>
        <p>子コンポーネントで入力された情報を出力します</p>
        <p class="text-red-600">{{ text }}</p>
      </div>
    </template>
  </slot-scope-template>
</template>
