import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Revenir à une position sauvegardée (par exemple, après un retour avec le bouton du navigateur)
      return savedPosition
    } else if (to.hash) {
      // Si un hash est présent dans l'URL, scroll vers cet élément
      const element = document.querySelector(to.hash)
      if (element) {
        return { el: to.hash, behavior: 'smooth' } // Vue Router gère `scrollIntoView`
      }
    } else {
      // Scroll en haut de la page pour les autres navigations
      return { top: 0 }
    }
  }
})

// Votre logique actuelle d'écoute des routes reste ici (facultatif)
router.afterEach((to) => {
  if (to.hash) {
    const element = document.querySelector(to.hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
})

app.use(router)

app.mount('#app')
