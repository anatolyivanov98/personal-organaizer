import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { initializeApp } from 'firebase/app'

import App from './App.vue'
import router from './router'

const app = createApp(App)

initializeApp({
  apiKey: 'AIzaSyCKt6yzyENWlKp6vUoYzgA63h20_l0s__Y',
  authDomain: 'persoal-organaizer.firebaseapp.com',
  projectId: 'persoal-organaizer',
  storageBucket: 'persoal-organaizer.appspot.com',
  messagingSenderId: '92132540060',
  appId: '1:92132540060:web:bf40a49f1a79160b87f759'
})

app.use(createPinia())
app.use(router)

app.mount('#app')
