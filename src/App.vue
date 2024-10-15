<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'

</script>

<template>
  <header>

    <div class="wrapper">
      <h1 class="text-2xl bg-slate-400">Template principale</h1>
      <LogInOut/>
      <nav>
        <ul>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/About">About</RouterLink>
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

