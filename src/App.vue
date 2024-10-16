<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
  <header>

    <div class="wrapper">
      
      <HeaderPage />
      <nav>
        <ul>
          <RouterLink to="/">Accueil</RouterLink>
          
          <RouterLink to="/projets">projets</RouterLink>
          <RouterLink to="/guide-de-style">Guide de style</RouterLink>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <Suspense>
    <RouterView /></Suspense>
    </main>
  
</template>

