<template>
  <section v-if="projet">
    <header class="bg-cover bg-center flex flex-col items-center justify-start mt-20 md:py-32 px-4 text-center relative" :style="{ backgroundImage: `url(${fondImage})` }">
    <h2 class="font-handjet text-6xl md:text-8xl font-[500] text-center md:text-left md:mb-4 pt-12 md:pt-0">
      {{ projet.nom_projet }}
    </h2>
    <h2 class="font-handjet text-2xl md:text-4xl font-[400] text-center md:text-center pt-12 md:px-[400px]">
      {{ projet.intitule }}
    </h2>
    <a :href="projet.lien" target="_blank">
  <div class="w-[310px] h-[60px] rounded-[5px] bg-interactions flex items-center justify-center project-button mt-10">
    <p class="text-white font-handjet text-4xl">Lien vers le site</p>
  </div>
</a>


    <div class="pb-12 md:pb-0"></div>
  </header>

  <section class="bg-[#DEF5FF]">
    <div class="flex flex-col md:flex-row items-start pt-4 md:pt-8 mx-4 md:mx-48"> <!-- Modifier ml-40 par mx-4 pour une marge responsive -->
      <div class="md:w-1/2 md:mx-20"> <!-- Colonne de gauche -->
      <ImgPb 
        v-if="projet.mockup" 
        :record="projet" 
        :filename="projet.mockup" 
        width="" height="" 
        class="md:transition-transform md:transform md:hover:scale-105 mx-auto h-auto w-[700px] md:w-[1000px] md:pt-16" 
      />
      </div>
    <div class="md:w-1/2 max-w-screen-md p-4 md:pb-16"> <!-- Colonne de droite -->
      <h2 class="font-source-sans-3 text-4xl md:text-5xl font-bold text-[#1F0032] pb-6">{{ projet.nom_projet }}, c'est quoi ?</h2> <!-- Ajustement de la taille du texte -->
    <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-4">{{ projet.p1 }}</p>
    <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-4">{{ projet.p2 }}</p>
    <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-4">{{ projet.p3 }}</p>
    <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-4">{{ projet.p4 }}</p>
    </div>
    
  </div>
    </section>

    <section class="bg-cover bg-center" :style="{ backgroundImage: `url(${fondImage})` }">
  <h2 class="font-source-sans-3 text-3xl mx-4 md:text-5xl font-bold text-[#1F0032] pb-6 md:pl-[196px] pt-12">Fonctionnalités : Que peut-on faire sur ce site ?</h2>
  <div class="flex flex-col md:flex-row items-start mx-4 md:mx-48"> <!-- Modifier ml-40 par mx-4 pour une marge responsive -->

    <div class="md:w-1/2 max-w-screen-md pb-16 p-2"> <!-- Colonne de gauche -->
      <p class="mt-2 font-source-sans-3 text-xl text-[#555555] pt-4 font-semibold">{{ projet.titre_fonctionnalite_1 }}</p>
      
      <!-- Conteneur en grille pour organiser les images -->
      <div class="grid grid-cols-2 gap-4 pt-6">
        <ImgPb v-if="projet.f1" :record="projet" :filename="projet.f1" width="" height="" class="transition-transform transform hover:scale-105 w-full md:h-[230px]" />
        <ImgPb v-if="projet.f2" :record="projet" :filename="projet.f2" width="" height="" class="transition-transform transform hover:scale-105 w-full md:h-[230px]" />
        <ImgPb v-if="projet.f3" :record="projet" :filename="projet.f3" width="" height="" class="transition-transform transform hover:scale-105 w-full md:h-[230px]" />
        <ImgPb v-if="projet.f4" :record="projet" :filename="projet.f4" width="" height="" class="transition-transform transform hover:scale-105 w-full md:h-[230px]" />
      </div>
      <p class="mt-2 font-source-sans-3 text-xl text-[#555555] pt-4 pb-4 font-semibold">{{ projet.titre_tuto_1 }}</p>
    
  <div class="flex items-start mt-2 pt-4">
  <oneCircle class="w-[70px] h-auto" />
  <p class="font-source-sans-3 text-xl text-[#555555] italic pl-6">{{ projet.t1_1 }}</p>
</div>
<div class="flex items-start mt-2 pt-4">
  <twoCircle class="w-[70px] h-auto" />
  <p class="font-source-sans-3 text-xl text-[#555555] italic pl-6">{{ projet.t1_2 }}</p>
</div>
<div class="flex items-start mt-2 pt-4">
  <threeCircle class="w-[90px] h-auto" />
  <p class="font-source-sans-3 text-xl text-[#555555] italic pl-6">{{ projet.t1_3 }}</p>
</div>
<div class="flex items-start mt-2 pt-4">
  <fourCircle class="w-[70px] h-auto" />
  <p class="font-source-sans-3 text-xl text-[#555555] italic pl-6">{{ projet.t1_4 }}</p>
</div>


    </div>
      <div class="md:w-1/2 md:mx-20"> <!-- Colonne de droite -->
        <p class="mt-2 font-source-sans-3 text-xl text-[#555555] pt-4 font-semibold">{{ projet.titre_fonctionnalite_1 }}</p>
      
      <!-- Conteneur en grille pour organiser les images -->
      <div class="grid grid-cols-2 gap-4 pt-6">
        <ImgPb v-if="projet.f1" :record="projet" :filename="projet.f5" width="" height="" class="transition-transform transform hover:scale-105 w-full md:h-[230px]" />
        <ImgPb v-if="projet.f2" :record="projet" :filename="projet.f6" width="" height="" class="transition-transform transform hover:scale-105 w-full md:h-[230px]" />
        <ImgPb v-if="projet.f3" :record="projet" :filename="projet.f7" width="" height="" class="transition-transform transform hover:scale-105 w-full md:h-[230px]" />
        
      </div>
      <p class="mt-2 font-source-sans-3 text-xl text-[#555555] pt-4 pb-4 font-semibold">{{ projet.titre_tuto_2 }}</p>
    
  <div class="flex items-start mt-2 pt-4">
  <oneCircle class="w-[22.5px] md:w-[50px] h-auto" />
  <p class="font-source-sans-3 text-xl text-[#555555] italic pl-6">{{ projet.t2_1 }}</p>
</div>
<div class="flex items-start mt-2 pt-4">
  <twoCircle class="w-[22.5px] md:w-[50px] h-auto" />
  <p class="font-source-sans-3 text-xl text-[#555555] italic pl-6">{{ projet.t2_2 }}</p>
</div>
<div class="flex items-start mt-2 pt-4 pb-12">
  <threeCircle class="w-[22.5px] md:w-[50px] h-auto" />
  <p class="font-source-sans-3 text-xl text-[#555555] italic pl-6">{{ projet.t2_3 }}</p>
</div>


      </div>
  </div>
</section>
  
<section class="bg-[#DEF5FF]">
  <div class="flex flex-col md:flex-row items-start pt-4 md:pt-8 mx-4 md:pb-16">
  <!-- Section Compétences (gauche) -->
  <div class="w-full md:w-1/2 md:pl-48 py-8"> <!-- Limite la largeur à 50% de l'écran sur les écrans moyens et plus grands -->
    <h2 class="font-source-sans-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F0032] mb-8 text-left">Compétences</h2>
    
    <div class="flex flex-wrap gap-4 sm:gap-6 justify-start items-start">
      <div 
        v-for="competence in projet.expand.competences" 
        :key="competence.id"
        class="inline-block rounded-md px-8 py-2 sm:px-16 sm:py-4 bg-mise-en-evidence font-poppins text-base sm:text-2xl text-white transition-transform transform hover:scale-105 hover:shadow-lg"
      >
        <p>{{ competence.nom_competence }}</p>
      </div>
    </div>

    <div class="md:flex">
      <a :href="projet.lien" target="_blank">
      <div class="md:w-[310px] md:h-[70px] w-[210px] rounded-[5px] bg-interactions flex items-center justify-center project-button mt-10 mx-auto md:mr-8">
        <p class="text-white font-handjet text-3xl md:text-4xl">Lien vers le site</p>
      </div></a>
      <RouterLink to="/">
      <div class="md:w-[310px] md:h-[70px] w-[210px] rounded-[5px] border-solid border-2 border-interactions flex items-center justify-center project-button mt-4 md:mt-10 mx-auto md:mr-24">
        <p class="text-interactions font-handjet text-3xl md:text-4xl">Retour à l'accueil</p>
      </div></RouterLink>
    </div>

  </div>

  <div class="md:w-1/2 md:pr-40 md:pt-[100px]">
    <!-- Section Compétences (droite) -->
    <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-4">{{ projet.p1 }}</p>
    <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-4">{{ projet.p2 }}</p>
    <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-4 pb-12 md:pb-0">{{ projet.p3 }}</p>
  </div></div>
</section>



    
   
    
    
    
  </section>

  <button
  @click="scrollToTop"
  class="fixed bottom-6 right-6 md:bottom-16 md:right-16  rounded-full transition-transform transform hover:scale-105"
  aria-label="Remonter en haut"
>
  <scrollReset class="h-[80px] w-[70px]" />
</button>
</template>

<script setup lang="ts" name="ProjectDetails">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProjects } from '@/backend';
import ImgPb from '@/components/ImgPb.vue';
import fondImage from '@/assets/fond.webp';
import oneCircle from '@/assets/icons/oneCircle.vue';
import twoCircle from '@/assets/icons/twoCircle.vue';
import threeCircle from '@/assets/icons/threeCircle.vue';
import fourCircle from '@/assets/icons/fourCircle.vue';
import scrollReset from '@/assets/icons/scroll-reset.vue';
 
const projet = ref<any>(null);
const route = useRoute();
const projectId = (route.params as { id: string }).id;

onMounted(async () => {
  const projets = await fetchProjects();
  projet.value = projets.find((p: any) => p.id === projectId);
  if (!projet.value) {
    console.error("Projet non trouvé avec l'ID:", projectId);
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Permet un défilement fluide
  });
}

</script>

<style scoped>
/* Styles pour le bouton Projets */
.project-button {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Ombre par défaut */
  transition: box-shadow 0.3s ease; /* Transition douce pour l'effet */
}

.project-button:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5); /* Ombre plus forte au survol */
}

.hover\:shadow-lg:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}
</style>