<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
import { ref } from 'vue'; // Importer ref
import MenuBurger from "../assets/icons/MenuBurger.vue"; // Import du composant de l'icône burger

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Fonction de scroll fluide
function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

import { useRouter } from 'vue-router';

const router = useRouter();

function goToAproposSection() {
  router.push({ path: '/', hash: '#apropos' });
}

function goToHomeSection() {
  router.push({ path: '/', hash: '#home' });
}
function goToProjetsSection() {
  router.push({ path: '/', hash: '#projets' });
}
function goToContactSection() {
  router.push({ path: '/', hash: '#contact' });
}


</script>


<template>
  <header class="bg-[#D8E4FA] text-black flex items-center py-4 md:py-0 justify-between fixed top-0 left-0 w-full shadow-md z-50">
    <!-- Logo -->
    <RouterLink to="/" class="flex items-center ml-4 md:ml-16">
      <img class="h-16 md:h-24" src="../assets/logo.webp" alt="Logo" />
    </RouterLink>

    <!-- Menu Desktop -->
    <nav class="hidden md:flex items-center space-x-8 md:pr-6">
      <ul class="flex space-x-8">
        <li>
          <button 
            @click="goToHomeSection" 
            class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
            ACCUEIL
          </button>
        </li>
        <li>
          <button 
            @click="goToAproposSection" 
            class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
            A PROPOS
          </button>
        </li>
        <li>
          <button 
            @click="goToProjetsSection" 
            class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
            PROJETS
          </button>
        </li>
        <li>
          <button 
            @click="goToContactSection" 
            class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
            CONTACT
          </button>
        </li>
      </ul>
    </nav>

    <!-- Menu Burger pour mobile -->
    <button @click="toggleMenu" class="md:hidden flex items-center mr-4">
      <template v-if="isMenuOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </template>
      <template v-else>
        <MenuBurger class="w-6 h-6" />
      </template>
    </button>

    <!-- Menu Mobile avec ombre en bas et transition -->
    <transition name="slide-fade">
      <div v-if="isMenuOpen" class="absolute top-16 right-0 w-full bg-[#D8E4FA] z-50 flex flex-col p-4 md:hidden shadow-lg shadow-gray-500/50">
        <!-- Liens du menu mobile -->
        <nav class="flex flex-col items-start space-y-2 font-spartan w-full">
          <button 
            @click="() => { goToHomeSection(); toggleMenu(); }" 
            class="text-black text-lg font-source-code-pro font-bold border-b border-gray-300 py-2 w-full">
            ACCUEIL
          </button>
          <button 
            @click="() => { goToAproposSection(); toggleMenu(); }" 
            class="text-black text-lg font-source-code-pro font-bold border-b border-gray-300 py-2 w-full">
            A PROPOS
          </button>
          <button 
            @click="() => { goToProjetsSection(); toggleMenu(); }" 
            class="text-black text-lg font-source-code-pro font-bold border-b border-gray-300 py-2 w-full">
            PROJETS
          </button>
          <button 
            @click="() => { goToContactSection(); toggleMenu(); }" 
            class="text-black text-lg font-source-code-pro font-bold py-2 w-full">
            CONTACT
          </button>

        </nav>
      </div>
    </transition>
  </header>
</template>

<style>
/* Transition personnalisée */
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateY(0);
  opacity: 1;
}
.slide-fade-leave-from {
  transform: translateY(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
