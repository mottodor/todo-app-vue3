import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// import icons
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { FaCheck, FaPen, FaTrash } from 'oh-vue-icons/icons';

addIcons(FaCheck, FaPen, FaTrash);

const app = createApp(App);
app.component('v-icon', OhVueIcon);

app.use(router);

app.mount('#app');
