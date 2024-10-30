<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import HeaderPage from './components/HeaderPage.vue';
</script>

<template>
  <header>
    <div class="wrapper bg-[#DEF5FF]">
      <HeaderPage />
    </div>
  </header>
  <main> <!-- Ajout d'un margin-top -->
    <Suspense>
      <RouterView />
    </Suspense>
  </main>
</template>

