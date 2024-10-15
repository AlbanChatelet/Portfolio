<template>
  <img :src="src" :width="width" :height="height" />
</template>

<script setup lang="ts">
import { pb } from '@/backend' // Assurez-vous que l'import de pb est correct

const props = defineProps<{
  record: any,      // Remplacez 'any' par le type correspondant si nécessaire
  filename: string,
  width?: number | string,
  height?: number | string,
  thumb?: string
}>()

const src = pb.getFileUrl(props.record, props.filename, {
  thumb: props.thumb || `${props.width ?? 0}x${props.height ?? 0}`
})
</script>
