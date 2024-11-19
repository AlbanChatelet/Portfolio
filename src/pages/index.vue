<script setup lang="ts">
import { onMounted, ref } from 'vue';
import fondImage from '@/assets/fond.webp';
import barreSeparation from '@/assets/icons/barre-separation.vue';
import phoneIcon from '@/assets/icons/phone-icon.vue';
import pingIcon from '@/assets/icons/ping-icon.vue';
import computerIcon from '@/assets/icons/computer-icon.vue';
import MobileIcon from '@/assets/icons/mobile-icon.vue';
import collectifIcon from '@/assets/icons/collectif-icon.vue';
import soloIcon from '@/assets/icons/solo-icon.vue';
import ImgPb from '@/components/ImgPb.vue'; // Chemin à ajuster si nécessaire
import grandeBarreSeparation from '@/assets/icons/grande-barre-separation.vue';
import { fetchCompetences, fetchLogiciels, fetchProjects } from '@/backend'; // Assurez-vous d'importer les deux fonctions
import { RouterLink } from 'vue-router/auto';

import { useRouter } from 'vue-router';

const router = useRouter();


// Variable réactive pour stocker les compétences
interface Competence {
  id: string;
  nom_competence: string;
}


interface Logiciel {
  id: string;
  nom_logiciel: string;
  logo_logiciel?: string;
}

const competences = ref<Competence[]>([]);
const logiciels = ref<Logiciel[]>([]);
const projets = ref<any[]>([]);
// Variable réactive pour stocker les logiciels

// Fonction pour récupérer toutes les compétences depuis PocketBase


// Fonction pour récupérer tous les logiciels depuis PocketBase

// Récupère les compétences et les logiciels au montage du composant
onMounted(async () => {
  competences.value = await fetchCompetences();
  logiciels.value = await fetchLogiciels();
  projets.value = await fetchProjects();
});
// Fonction pour l'effet de machine à écrire en boucle
function animateTextLoop() {
  const elements = document.querySelectorAll(".animate-text");
  const delay = 100; // Délai entre chaque lettre
  const eraseDelay = 50; // Délai pour effacer chaque lettre
  const pause = 2000; // Pause à la fin de l'animation

  elements.forEach((elem) => {
    const content = elem.getAttribute("data-text") || "";
    const startFrom = content.indexOf("l"); // Trouver l'index de "A" pour commencer l'animation
    let index = startFrom; // Commencer à "A"
    let isErasing = false;

    // Fonction de boucle d'animation
    function type() {
      if (!isErasing && index < content.length) {
        elem.textContent = content.substring(0, index + 1);
        index++;
        setTimeout(type, delay);
      } else if (isErasing && index > startFrom) {
        elem.textContent = content.substring(0, index - 1);
        index--;
        setTimeout(type, eraseDelay);
      } else if (index === content.length) {
        setTimeout(() => (isErasing = true, type()), pause);
      } else {
        isErasing = false;
        setTimeout(type, delay);
      }
    }

    type();
  });
}

// Vérification de la taille de l'écran
const isMobile = ref(window.innerWidth < 640); // Exemple: 640px pour mobile

// Écouteur d'événements pour redimensionner l'écran
window.addEventListener('resize', () => {
  isMobile.value = window.innerWidth < 640;
});

onMounted(() => {
  if (!isMobile.value) {
    animateTextLoop(); // Exécuter l'animation uniquement si pas sur mobile
  } else {
    const elements = document.querySelectorAll(".animate-text");
    elements.forEach(elem => {
      elem.textContent = elem.getAttribute("data-text") || ""; // Affiche le texte complet
    });
  }
});

function goToProjetsSection() {
  router.push({ path: '/', hash: '#projets' });
}

function goToContactSection() {
  router.push({ path: '/', hash: '#contact' });
}

</script>

<template>
  <header id="home" class="bg-cover bg-center flex flex-col items-center justify-start py-12 sm:py-32 px-4 text-center relative" :style="{ backgroundImage: `url(${fondImage})` }">
    <h1 class="animate-text font-handjet text-4xl sm:text-5xl md:text-8xl lg:text-8xl mt-16 tracking-tight sm:tracking-normal relative" data-text="Hey ! Je suis Alban Chatelet">
      H
    </h1>
    <h2 class="font-handjet text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 tracking-tight sm:tracking-normal text-gray-600">
      Un développeur Web Full Stack
    </h2>
    <!-- Bouton Projets -->
    
    <div @click="goToProjetsSection" class="w-[210px] h-[52px] rounded-[5px] bg-interactions flex items-center justify-center project-button mt-20 ">
      <p class="text-white font-handjet text-3xl">Projets</p>
    </div>
  </header>


  <!-- SECTION A PROPOS -->

  <section id="apropos" class="bg-[#DEF5FF]">
  <div class="flex flex-col items-center text-center pt-8">
    <p class="font-source-code-pro text-4xl font-semibold text-[#1F0032]">A PROPOS</p>
    <barreSeparation class="mt-4" /> <!-- Ajoutez une marge supérieure pour espacer -->
  </div>
  <div class="flex flex-col md:flex-row items-start pt-4 md:pt-8 mx-4 md:mx-48"> <!-- Modifier ml-40 par mx-4 pour une marge responsive -->
    <div class="md:w-1/2 max-w-screen-md p-4 pb-16"> <!-- Colonne de gauche -->
  <h2 class="font-source-sans-3 text-4xl md:text-5xl font-bold text-[#1F0032]">Qui suis-je ?</h2> <!-- Ajustement de la taille du texte -->
  
  <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-8">Je suis un jeune <span class="font-semibold text-black">développeur Web full stack</span> axé sur le <span class="font-semibold text-black">front-end</span>, qui crée et gère le front-end des sites Web et des applications Web. Découvrez mes travaux dans la section <span class="font-semibold text-black">Projets</span> !</p>

  <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-8">N'hésitez pas à vous connecter sur <span class="font-semibold text-black">LinkedIn</span> où je publie du contenu utile lié au développement et à la programmation Web.</p>

  <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-8">Encore en <span class="font-semibold text-black">études</span>, je suis pleinement ouvert aux opportunités de <span class="font-semibold text-black">stages</span> ou d’<span class="font-semibold text-black">alternance</span> où je peux contribuer, apprendre et évoluer !</p>

  <p class="mt-2 font-source-sans-3 text-lg text-[#555555] pt-8">Si vous avez une bonne opportunité correspondant à mes <span class="font-semibold text-black">compétences</span> et à mon <span class="font-semibold text-black">expérience</span>, n'hésitez pas à me contacter à l’adresse : <a href="mailto:chateletalban20@gmail.com" class="text-black font-semibold">chateletalban20@gmail.com</a></p>
</div>

    <div class="md:w-1/2 p-4 md:mx-20"> <!-- Colonne de droite -->
  
  <div class="flex items-start flex-col md:flex-row md:pt-16"> <!-- Flex pour aligner l'image et les icônes -->
    <img src="../assets/portrait.webp" alt="" class="h-[250px] md:h-[210px] object-cover mb-4 ml-10 md:mb-0 transition-transform transform hover:scale-105"> <!-- Ajustement de la taille de l'image -->
    
    <div class="flex flex-col ml-4"> <!-- Utilisation de flex-col pour empiler les éléments sur mobile -->
      <div class="flex items-center mb-4 md:mb-6 md:mt-4"> <!-- Ajustement de la marge -->
        <pingIcon class="h-8 w-8 md:h-10 md:w-10"/> <!-- Réduction de la taille des icônes pour mobile -->
        <p class="font-source-sans-3 text-lg md:text-2xl text-[#555555] ml-8"><span class="font-semibold text-black">Montbéliard</span>, Franche Comté</p>
      </div>
      <div class="flex items-center mb-4 md:mb-6"> <!-- Ajustement de la marge -->
        <pingIcon class="h-8 w-8 md:h-10 md:w-10"/>
        <p class="font-source-sans-3 text-lg md:text-2xl text-[#555555] ml-8"><span class="font-semibold text-black">Rouen</span>, Normandie</p>
      </div>
      <div class="flex items-center mb-4 ml-1"> <!-- Ajustement de la marge -->
        <phoneIcon class="h-8 w-8 md:h-9 md:w-9"/> <!-- Réduction de la taille des icônes pour mobile -->
        <p class="font-source-sans-3 text-lg font-semibold md:text-2xl text-[#000000] ml-8">06 04 43 59 48</p>
      </div>
    </div>
  </div>
  <div  @click="goToContactSection"  class="w-[180px] md:w-[200px] h-[48px] rounded-[5px] bg-interactions flex items-center justify-center mt-4 mb-12 project-button ml-16 md:ml-12 md:mt-10">
    <p class="text-white font-handjet text-2xl md:text-3xl">Contact</p>
  </div>
</div>
  </div>
</section>




<section id="competences" class="bg-cover bg-center py-2 sm:py-10 px-4 relative" :style="{ backgroundImage: `url(${fondImage})` }">
  <div class="container mx-auto my-8 px-4 grid grid-cols-1 sm:grid-cols-2 gap-8">
    
    <!-- Section Compétences (gauche) -->
    <div>
      <h2 class="font-source-sans-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F0032] mb-8 text-left">Compétences</h2>
      
      <div class="flex flex-wrap gap-4 sm:gap-6 justify-start items-start"> <!-- Alignement gauche -->
        <div 
          v-for="competence in competences" 
          :key="competence.id"
          class="inline-block rounded-md px-8 py-2 sm:px-16 sm:py-4 bg-mise-en-evidence font-poppins text-base sm:text-2xl text-white transition-transform transform hover:scale-105 hover:shadow-lg" 
        >
          {{ competence.nom_competence }}
        </div>
      </div>
    </div>

    <!-- Section Logiciels (droite) -->
    <div>
      <h2 class="font-source-sans-3 text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F0032] mb-4 text-left md:ml-6">Logiciels</h2>
      
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
        <div 
          v-for="logiciel in logiciels" 
          :key="logiciel.id"
          class="flex flex-col items-center"
        >
          <ImgPb 
            v-if="logiciel.logo_logiciel" 
            :record="logiciel" 
            :filename="logiciel.logo_logiciel" 
            width="128" height="128" 
            class="transition-transform transform hover:scale-105"
          />
          <div class="rounded-md px-6 py-2 sm:px-9 sm:py-4 bg-mise-en-evidence font-poppins text-base sm:text-2xl text-white mt-2 sm:mt-4 transition-transform transform hover:scale-105 hover:shadow-lg">
            {{ logiciel.nom_logiciel }}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- SECTION PROJETS -->

<section id="projets" class="bg-[#DEF5FF] py-8">
  <!-- Titre de la section -->
  <div class="flex flex-col items-center text-center">
    <p class="font-source-code-pro text-4xl font-semibold text-[#1F0032] md:text-5xl">MES PROJETS</p>
    <barreSeparation class="mt-4" /> <!-- Barre de séparation avec une marge supérieure -->
  </div>

  <!-- Sous-titre de la section -->
  <div class="flex justify-center">
    <h2 class="font-source-sans-3 text-md md:text-lg text-[#555555] text-center max-w-md mx-4 pt-8">
      Vous trouverez ici quelques-uns des <span class="font-semibold text-black">projets</span> que j'ai créés, que ce soit pour mes <span class="font-semibold text-black">études</span> ou dans un cadre <span class="font-semibold text-black">personnel</span>
    </h2>
  </div>
  
      

  <!-- Liste des projets -->
  <!-- Liste des projets -->
<div class="my-8 w-full max-w-[100rem] mx-auto">
  <div class=" flex justify-center">
    <grandeBarreSeparation /> <!-- Grande barre de séparation -->
  </div>

  <div 
    v-for="projet in projets" 
    :key="projet.id" 
    class="flex flex-col md:flex-row items-center justify-center w-full py-12"
  >
    <!-- Partie gauche : Aperçu du projet -->
    <div class="w-full md:w-6/12">
      <ImgPb 
        v-if="projet.apercu_projet" 
        :record="projet" 
        :filename="projet.apercu_projet" 
        width="300" height="150" 
        class="transition-transform transform hover:scale-105 w-10/12 mx-auto h-auto" 
      />
    </div>

    <!-- Partie droite : Détails du projet -->
    <div class="w-full md:w-6/12 p-4 md:p-8 flex flex-col justify-between">
      <!-- Nom du projet -->
      <h2 class="font-haut-de-page text-3xl md:text-4xl font-[500] text-center md:text-left mb-4">{{ projet.nom_projet }}</h2>

      <!-- Description du projet -->
      <p class="font-source-sans-3 text-md md:text-lg text-[#555555] mb-4 md:text-left text-center">{{ projet.description_projet }}</p>

      <!-- Bouton Voir et Icônes Support et Groupe -->
      <div class="flex flex-col md:flex-row items-center justify-between md:mt-4"> <!-- Disposition en ligne sur desktop -->
        <router-link :to="`/projets/${projet.id}`">
  <button class="bg-interactions text-white font-handjet text-2xl md:text-3xl w-[160px] md:w-[200px] h-[40px] md:h-[48px] rounded-lg flex items-center justify-center project-button transition-transform transform hover:scale-105 hover:shadow-lg mb-4 md:mb-0">
    Voir
  </button>
</router-link>
        
        <!-- Icônes Support et Groupe -->
        <div class="flex items-center space-x-4"> <!-- Alignement sur une même ligne -->
          <div class="flex items-center text-md md:text-lg">
            <component :is="projet.support === 'Mobile First' ? MobileIcon : computerIcon" class="w-8 h-8 mr-2"/>
            <span class="font-source-sans-3 text-md md:text-lg text-[#555555]">{{ projet.support }}</span>
          </div>
          <div class="flex items-center text-md md:text-lg">
            <component :is="projet.groupe === 'Solo' ? soloIcon : collectifIcon" class="w-12 h-12 mr-2"/>
            <span class="font-source-sans-3 text-md md:text-lg text-[#555555]">{{ projet.groupe }}</span>
          </div>
          
        </div>
      </div>
      
    </div>
    
  </div>
  
</div>

</section>


<!-- SECTION CONTACT -->
<section id="contact" class="bg-cover bg-center py-10 px-4 sm:py-16 relative" :style="{ backgroundImage: `url(${fondImage})` }">
  <!-- Titre de la section -->
  <div class="flex flex-col items-center text-center mb-8">
    <p class="font-source-code-pro text-4xl font-semibold text-[#1F0032] md:text-5xl">CONTACT</p>
  </div>

  <!-- Formulaire de contact -->
  <div class="max-w-lg mx-auto bg-[#DEF5FF] p-8 rounded-lg shadow-lg">
    <form action="#" method="POST" class="space-y-6">
      <!-- Champ Nom -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700 font-haut-de-page">Nom</label>
        <input type="text" id="name" name="name" required
          class="mt-1 block w-full px-4 py-2 border border-[#C7DFFD] bg-[#C7DFFD] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      <!-- Champ Email -->
      <div>
        <label for="email" class="block text-sm font-medium text-gray-700 font-haut-de-page">Email</label>
        <input type="email" id="email" name="email" required
          class="mt-1 block w-full px-4 py-2 border border-[#C7DFFD] bg-[#C7DFFD] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>

      <!-- Champ Message -->
      <div>
        <label for="message" class="block text-sm font-medium text-gray-700 font-haut-de-page">Message</label>
        <textarea id="message" name="message" rows="4" required
          class="mt-1 block w-full px-4 py-2 border border-[#C7DFFD] bg-[#C7DFFD] rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      </div>

      <!-- Bouton Envoyer -->
      <div class="flex justify-center">
        <button type="submit"
          class="w-full md:w-auto px-24 py-3 bg-[#0094D3] text-white font-haut-de-page md:text-2xl rounded-md hover:bg-[#00a9d3] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-200">
          Envoyer
        </button>
      </div>
    </form>
  </div>



</section>






</template>

<style scoped>
.animate-text {
  visibility: visible;
}

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
