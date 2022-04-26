import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

// @ts-ignore heroku デプロイ時に発生するため無効
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL ?? "/";
axios.defaults.baseURL = apiBaseUrl;

createApp(App).mount('#app')
