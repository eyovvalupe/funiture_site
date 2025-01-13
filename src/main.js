import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import VueGoogleMaps from '@fawmi/vue-google-maps';
import { Map_API_KEY } from './config';

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(VueGoogleMaps, {
    load: {
        key: Map_API_KEY,
    },
})

app.mount('#app')
