import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

console.log(import.meta.env)
console.log(import.meta.env.VITE_API_BASE_URL)
// axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL ?? '/';

createApp(App).mount('#app')
