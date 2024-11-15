<template>
  <section v-if="projet">
    <header class="bg-cover bg-center flex flex-col items-center justify-start mt-20 sm:py-32 px-4 text-center relative" :style="{ backgroundImage: `url(${fondImage})` }">
    <h2 class="font-handjet text-3xl md:text-8xl font-[500] text-center md:text-left mb-4 ">
      {{ projet.nom_projet }}
    </h2>
    <h2 class="font-handjet text-2xl md:text-4xl font-[400] text-center md:text-center pt-12 px-[400px]">
      {{ projet.intitule }}
    </h2>
    <div class="w-[310px] h-[60px] rounded-[5px] bg-interactions flex items-center justify-center project-button mt-10 ">
      <p class="text-white font-handjet text-4xl">Lien vers le site</p>
    </div>
  </header>














    <p>{{ projet.p1 }}</p>
    <p>{{ projet.p2 }}</p>
    <p>{{ projet.p3 }}</p>
    <p>{{ projet.p4 }}</p>
    
    <!-- Section pour les images -->
    <section>
      <div v-for="(image, index) in [projet.mockup, projet.f1, projet.f2, projet.f3, projet.f4, projet.f5, projet.f6, projet.f7]" :key="index" class="">
        <ImgPb v-if="image" :record="projet" :filename="image" width="auto" height="132" class="h-[200px] w-auto" />
      </div>
    </section>

    

    <!-- Autres informations sur le projet -->
    <p>{{ projet.titre_tuto_1 }}</p>
    <p>{{ projet.t1_1 }}</p>
    <p>{{ projet.t1_2 }}</p>
    <p>{{ projet.t1_3 }}</p>
    <p>{{ projet.t1_4 }}</p>
    <p>{{ projet.titre_tuto_2 }}</p>
    <p>{{ projet.t2_1 }}</p>
    <p>{{ projet.t2_2 }}</p>
    <p>{{ projet.t2_3 }}</p>
    
    
    <!-- Liste des compétences -->
    <ul v-if="projet.expand?.competences" class="list-disc pl-5">
      <li v-for="competence in projet.expand.competences" :key="competence.id">
        <p>{{ competence.nom_competence }}</p>
      </li>
    </ul>
    <p>{{ projet.moi_1 }}</p>
    <p>{{ projet.moi_2 }}</p>
    <p>{{ projet.moi_3 }}</p>
  </section>
</template>

<script setup lang="ts" name="ProjectDetails">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProjects } from '@/backend';
import ImgPb from '@/components/ImgPb.vue';
import fondImage from '@/assets/fond.webp';
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