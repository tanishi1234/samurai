<script setup lang="ts">
</script>

<template>
  <div>
    <!-- <p style="display: flex; justify-content: center; gap: 10px;"> -->
      <!-- use the router-link component for navigation. -->
      <!-- specify the link by passing the `to` prop. -->
      <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/api-sample">ApiSample</router-link>
      <router-link to="/ref-sample">RefSample</router-link>
      <router-link to="/v-if-sample">VIfSample</router-link>
      <router-link to="/slot-scope-sample">SlotScopeSample</router-link> -->
    <!-- </p> -->
    
    <router-view></router-view>
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
