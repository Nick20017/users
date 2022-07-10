import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'
import Vuetify from 'vuetify';
import { store } from './store';

import App from './App.vue'

Vue.use(VueCompositionAPI)
Vue.use(Vuetify);

const app = createApp({
  render: () => h(App),
  store
})

app.mount('#app')
