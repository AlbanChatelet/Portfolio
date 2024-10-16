<script setup lang="ts">
import { RouterLink } from 'vue-router/auto';
import { ref } from 'vue'; // Importer ref
import MenuBurger from "../assets/icons/MenuBurger.vue"; // Import du composant de l'icône burger

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-[#D8E4FA] text-black p-4 flex items-center justify-between relative">
    <!-- Logo -->
    <RouterLink to="/" class="flex items-center ml-4">
      <img class="h-12" src="../assets/logo.webp" alt="Logo" />
    </RouterLink>

    <!-- Menu Desktop -->
    <nav class="hidden md:flex items-center space-x-8">
  <ul class="flex space-x-8">
    <li>
      <RouterLink 
        to="/" 
        class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
        ACCUEIL
      </RouterLink>
    </li>
    <li>
      <RouterLink 
        to="/About" 
        class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
        A PROPOS
      </RouterLink>
    </li>
    <li>
      <RouterLink 
        to="/projets" 
        class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
        PROJETS
      </RouterLink>
    </li>
    <li>
      <RouterLink 
        to="/contact" 
        class="bg-[#D8E4FA] text-black rounded-lg w-[153px] h-[60px] flex items-center justify-center shadow-lg transition-all duration-200 hover:shadow-xl font-source-code-pro font-bold">
        CONTACT
      </RouterLink>
    </li>
  </ul>
</nav>

    <!-- Menu Burger pour mobile -->
    <button @click="toggleMenu" class="md:hidden flex items-center">
      <template v-if="isMenuOpen">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </template>
      <template v-else>
        <MenuBurger class="w-6 h-6" />
      </template>
    </button>

    <!-- Menu Mobile -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="absolute top-16 right-0 w-full bg-[#D8E4FA] z-50 flex flex-col p-4 md:hidden">
        <!-- Liens du menu mobile -->
        <nav class="flex flex-col items-start space-y-2 font-spartan w-full">
          <RouterLink @click="toggleMenu" to="/" class="text-black text-lg font-source-code-pro font-bold border-b border-gray-300 py-2 w-full">ACCUEIL</RouterLink>
          <RouterLink @click="toggleMenu" to="/About" class="text-black text-lg font-source-code-pro font-bold  border-b border-gray-300 py-2 w-full">A PROPOS</RouterLink>
          <RouterLink @click="toggleMenu" to="/projets" class="text-black text-lg font-source-code-pro font-bold  border-b border-gray-300 py-2 w-full">PROJETS</RouterLink>
          <RouterLink @click="toggleMenu" to="/contact" class="text-black text-lg font-source-code-pro  font-bold py-2 w-full">CONTACT</RouterLink>
        </nav>
      </div>
    </transition>
  </header>
</template>
