<template>
  <div>
    <h1>Mes Projets</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.nom_projet }}</li>
    </ul>

    <h1>Mes Compétences</h1>
    <ul>
      <li v-for="competence in competences" :key="competence.id">{{ competence.nom_competence }}</li>
    </ul>
    <h1>Mes logiciels</h1>
    <ul>
      <li v-for="logiciel in logiciels" :key="logiciel.id">{{ logiciel.nom_logiciel }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { fetchProjects, fetchCompetences, fetchLogiciels } from '@/backend'; // Assurez-vous d'importer les deux fonctions

const projects = ref([]);
const competences = ref([]);
const logiciels = ref([]);

onMounted(async () => {
  projects.value = await fetchProjects();
  competences.value = await fetchCompetences();
  logiciels.value = await fetchLogiciels();
});
</script>
