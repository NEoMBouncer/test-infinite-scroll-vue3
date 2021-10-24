// Global
import { createApp } from 'vue'
import App from './App.vue'
// Tailwind
import '@/assets/styles/tailwind.css';
// Theme
import '@/assets/styles/theme.scss';

const app = createApp(App)

// Run
app.mount('#app')
