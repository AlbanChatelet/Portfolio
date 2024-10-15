<script>
import ScrollReset from '@/assets/icons/scroll-reset.vue';

export default {
  components: {
    ScrollReset, // Composant déclaré ici
  },
};
</script>

<template>
  <div class="grid grid-cols-2 gap-12">
    <!-- Section haut de page -->
    <div class="space-y-4">
      <h2 class="font-bold text-2xl text-mise-en-evidence">Haut de page</h2>
      <ul class="space-y-2">
        <li><h1 class="font-haut-de-page text-7xl">haut de page (Departure Mono)</h1></li>
        <li><p class="font-haut-de-page text-xl">sous-titre haut de page (Departure Mono)</p></li>
      </ul>
    </div>

    <!-- Section titres et menus -->
    <div class="space-y-4">
      <h2 class="font-bold text-2xl text-mise-en-evidence">Titres des sections et menus</h2>
      <ul class="space-y-2">
        <li><p class="font-source-code-pro text-4xl">Titres des sections (Source Code Pro)</p></li>
        <li><p class="font-source-code-pro text-base">elements du menu (Source Code Pro)</p></li>
      </ul>
    </div>

    <!-- Section boutons -->
    <div class="space-y-4">
      <h2 class="font-bold text-2xl text-mise-en-evidence">Boutons</h2>
      <ul class="space-y-2">
        <li><p class="font-handjet text-3xl">contenu des boutons (Handjet)</p></li>
        <li><p class="font-handjet text-6xl">Bouton CV (Handjet)</p></li>
        <li><p class="font-handjet text-base">Formulaire de contact (Handjet)</p></li>
      </ul>
    </div>

    <!-- Section intitulés et textes -->
    <div class="space-y-4">
      <h2 class="font-bold text-2xl text-mise-en-evidence">Intitulés et textes</h2>
      <ul class="space-y-2">
        <li><p class="font-source-sans-3 text-5xl">intitulés (Source Sans 3)</p></li>
        <li><p class="font-source-sans-3 text-lg">textes (Source Sans 3)</p></li>
        <li><p class="font-poppins text-xl">Compétences / logiciels (Poppins)</p></li>
      </ul>
    </div>
  </div>

  <!-- Section interactions -->
  <div class="space-y-4">
    <h2 class="font-bold text-2xl text-mise-en-evidence">Intéractions</h2>

    <!-- Bouton Projets -->
    <div class="w-[210px] h-[52px] rounded-[5px] bg-interactions flex items-center justify-center">
      <p class="text-white font-handjet text-3xl">Projets</p>
      
    </div>

    <!-- Composant ScrollReset -->
    <ScrollReset />
  </div>
</template>
