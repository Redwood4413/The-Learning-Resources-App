import { createApp } from 'vue';
import './style.css';
// import './reset.css';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseWrapper from './components/UI/BaseWrapper.vue';

import App from './App.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseWrapper', BaseWrapper);

app.mount('#app');
