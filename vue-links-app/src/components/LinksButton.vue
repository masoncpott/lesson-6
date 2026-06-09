<script setup lang="ts">
defineProps<{
  label: string
  url: string
  icon: string
}>()
</script>

<template>
  <v-btn
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    variant="outlined"
    size="x-large"
    block
    min-height="56"
    class="text-none"
  >
    <v-icon start :icon="icon" size="24"></v-icon>
    <span class="text-base">{{ label }}</span>
  </v-btn>
</template>

<style scoped>
:deep(.v-btn) {
  transition: all 0.3s ease;
}

:deep(.v-btn:hover) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
