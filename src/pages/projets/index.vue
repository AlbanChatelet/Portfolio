<script setup lang="ts">
import { pb } from '@/backend';

 
    const listeProjets = await pb.collection('projets').getFullList();

</script>

<template>
    <ul>
        <li v-for="unProjet in listeProjets" :key="unProjet.id"> {{ unProjet.nom_projet }}</li>
    </ul>

</template>