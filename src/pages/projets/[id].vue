<template>
  <section v-if="projet">
    <header class="bg-cover bg-center flex flex-col items-center justify-start py-12 sm:py-32 px-4 text-center relative" :style="{ backgroundImage: `url(${fondImage})` }">
    <h2 class="font-handjet text-3xl md:text-8xl font-[500] text-center md:text-left mb-4 py-24">
      {{ projet.nom_projet }}
    </h2>
    <p class="font-handjet px-12 text-lg sm:text-xl md:text-xl lg:text-3xl mt-4 tracking-tight sm:tracking-normal text-gray-600">{{ projet.intitule }}</p>
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

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProjects } from '@/backend';
import ImgPb from '@/components/ImgPb.vue';
import fondImage from '@/assets/fond.webp';
const projet = ref<any>(null);
const route = useRoute();
const projectId = route.params.id as string;

onMounted(async () => {
  const projets = await fetchProjects();
  projet.value = projets.find((p: any) => p.id === projectId);
  if (!projet.value) {
    console.error("Projet non trouvé avec l'ID:", projectId);
  }
});
</script>
