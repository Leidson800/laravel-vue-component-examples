import './bootstrap';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import LoginFormComponent from './components/LoginForm.vue';

const app = createApp(App);

app.component('login-form-component', LoginFormComponent);
app.use(router);
app.mount('#app');
