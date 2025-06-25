import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import LoginFormComponent from './components/LoginForm.vue';

const app = createApp({});
app.component('login-form-component', LoginFormComponent);
app.mount('#app');
