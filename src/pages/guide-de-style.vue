<script setup lang="ts">
import ScrollReset from '@/assets/icons/scroll-reset.vue';
import phoneIcon from '@/assets/icons/phone-icon.vue';
import pingIcon from '@/assets/icons/ping-icon.vue';

import { ref, onMounted } from 'vue';
import PocketBase from 'pocketbase';
import type { CompetencesResponse, LogicielsResponse } from '@/pocketbase-types'; // Types générés par PocketBase Typegen

// Crée une instance de PocketBase
const pb = new PocketBase('http://127.0.0.1:8090'); // Assurez-vous que l'URL est correcte

// Variable réactive pour stocker les compétences
const competences = ref<CompetencesResponse[]>([]);

// Variable réactive pour stocker les logiciels
const logiciels = ref<LogicielsResponse[]>([]);

// Fonction pour récupérer toutes les compétences depuis PocketBase
const fetchCompetences = async () => {
  try {
    const result = await pb.collection('competences').getFullList<CompetencesResponse>({
      sort: '-created', // Tri des compétences par date de création (si nécessaire)
    });
    competences.value = result;
  } catch (error) {
    console.error("Erreur lors de la récupération des compétences :", error);
  }
};

// Fonction pour récupérer tous les logiciels depuis PocketBase
const fetchLogiciels = async () => {
  try {
    const result = await pb.collection('logiciels').getFullList<LogicielsResponse>({
      sort: '-created', // Tri des logiciels par date de création (si nécessaire)
    });
    logiciels.value = result;
  } catch (error) {
    console.error("Erreur lors de la récupération des logiciels :", error);
  }
};

// Récupère les compétences et les logiciels au montage du composant
onMounted(() => {
  fetchCompetences();
  fetchLogiciels();
});
</script>

<template>
  <div class="grid grid-cols-2 gap-12 px-12">
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

    <div class="space-y-4">
      <h2 class="font-bold text-2xl text-mise-en-evidence">Intéractions</h2>
      <!-- Bouton Projets -->
      <div class="w-[210px] h-[52px] rounded-[5px] bg-interactions flex items-center justify-center">
        <p class="text-white font-handjet text-3xl">Projets</p>
      </div>
      <!-- Composants -->
      <phoneIcon />
      <pingIcon />
      <ScrollReset />
    </div>

    <!-- Section compétences -->
    <div>
      <h2 class="font-bold text-2xl text-mise-en-evidence mb-4">Compétences</h2>
      <div class="flex flex-wrap gap-4">
        <div 
          v-for="competence in competences" 
          :key="competence.id"
          class="rounded-md p-4 text-center bg-mise-en-evidence font-poppins text-lg text-white"
        >
          {{ competence.nom_competence }}
        </div>
      </div>
    </div>

    <!-- Section logiciels -->
    <div>
      <h2 class="font-bold text-2xl text-mise-en-evidence mb-4">Logiciels</h2>
      <div class="flex flex-wrap gap-4">
        <div 
          v-for="logiciel in logiciels" 
          :key="logiciel.id"
          class="rounded-md p-4 text-center bg-mise-en-evidence font-poppins text-lg text-white"
        >
          {{ logiciel.nom_logiciel }}
        </div>
      </div>
    </div>
  </div>
</template>
