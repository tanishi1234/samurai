<script setup lang="ts">
</script>
<template>
  <div class="header bg-lime-500 bg-opacity-50 p-2">
    <div class="navi-bar">
      <div class="logo">
        <img src="../../assets/img/logo.png">
      </div>
      <ul class="global-navi">
        <li class="list"><a class="link" href="#">よくある質問</a></li>
        <li class="list"><a class="link" href="#">会員登録</a></li>
        <li class="list"><a class="link" href="#">ログイン</a></li>
      </ul>
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
  width: 80px;
  height: 80px
}

.navi-bar {
  display: flex;
  max-width: 1140px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}

.global-navi {
  display: flex;
}

.list {
  margin-left: 2rem;
}

.link {
  color: black;
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