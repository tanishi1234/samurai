import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL ?? "/";
// @ts-ignore heroku デプロイ時に発生するため無効
axios.defaults.baseURL = apiBaseUrl;

createApp(App).mount('#app')
