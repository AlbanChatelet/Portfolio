import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.afterEach((to) => {
  // Vérifie si l'URL contient un hash
  if (to.hash) {
    const element = document.querySelector(to.hash)
    if (element) {
      // Scrolling fluide vers l'élément
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
})

app.use(router)

app.mount('#app')
