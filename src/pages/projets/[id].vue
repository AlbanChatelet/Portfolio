<template>
  <div v-if="projet">
    <h2 class="font-haut-de-page text-3xl md:text-4xl font-[500] text-center md:text-left mb-4 py-24">
      {{ projet.nom_projet }}
    </h2>
    <p>{{ projet.description_projet }}</p>
    <img :src="projet.apercu_projet" alt="Aperçu du projet" class="max-w-full" />
  </div>
  <div v-else>
    <p>Projet non trouvé ou en cours de chargement...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'; // Pour accéder aux paramètres de la route
import { fetchProjects } from '@/backend'; // Assurez-vous que fetchProjects existe pour récupérer les projets

// Déclare une variable réactive pour stocker le projet spécifique
const projet = ref<any>(null);

// Récupère l'ID du projet depuis l'URL
const route = useRoute();
const projectId = route.params.id as string; // Assure-toi que l'ID est bien une chaîne

// Récupère tous les projets et filtre celui correspondant à l'ID
onMounted(async () => {
  const projets = await fetchProjects(); // Récupère tous les projets
  projet.value = projets.find((p: any) => p.id === projectId); // Trouve le projet correspondant à l'ID
  if (!projet.value) {
    console.error("Projet non trouvé avec l'ID:", projectId);
  }
});
</script>
