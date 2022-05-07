import { createApp } from 'vue'
import App from './App.vue'
import router from './plugins/router'
import './assets/styles/index.css'
import axios from 'axios'

// @ts-ignore heroku デプロイ時に発生するため無効
const apiBaseUrl: string = import.meta.env.VITE_API_BASE_URL ?? "/";
axios.defaults.baseURL = apiBaseUrl;

const app = createApp(App);

app.use(router);

app.mount('#app');
