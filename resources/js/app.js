import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import TestComponent from './components/Test.vue';
import LoginFormComponent from './components/LoginForm.vue';

const app = createApp({});
app.component('test-component', TestComponent);
app.component('login-form-component', LoginFormComponent);
app.mount('#app');
