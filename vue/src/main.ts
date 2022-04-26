import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL ?? "/";
// console.log(import.meta.env)
// console.log(import.meta.env.VITE_API_BASE_URL)
axios.defaults.baseURL = apiBaseUrl;

createApp(App).mount('#app')
