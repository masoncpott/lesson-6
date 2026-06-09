<script setup lang="ts">
defineProps<{
  icon: string
  url: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    icon
    variant="text"
    size="large"
  >
    <v-icon :icon="icon" size="28"></v-icon>
  </v-btn>
</template>

<style scoped>
:deep(.v-btn) {
  transition: all 0.3s ease;
}

:deep(.v-btn:hover) {
  transform: translateY(-2px);
}
</style>
