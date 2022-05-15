<script setup lang="ts">
</script>
<template>
  <div>
    <div class="logo">
      <img src="../../assets/img/logo.png">
    </div>
    <div class="menu-container bg-lime-300 bg-opacity-50 p-2">
      <div class="item">ホーム</div>
      <div class="item">メニュー1</div>
      <div class="item">メニュー2</div>
    </div>
    
  </div>
</template>

<style scoped>
.logo {
  text-align: center;
}

.menu-container {
  display: flex;
  text-align: center;
  justify-content: center;
}

.item {
  @apply px-10 border-r first:border-l border-black;
  border-right: 1px solid black;
}

</style>