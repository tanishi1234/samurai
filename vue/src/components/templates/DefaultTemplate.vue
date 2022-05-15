<script setup lang="ts">
import AppHeader from '../organisms/AppHeader.vue'
</script>

<template>
    <div>
        <app-header />
        <main>
            <slot></slot>
        </main>
        <footer>フッター</footer>
    </div>    
</template>

<style scoped>

</style>