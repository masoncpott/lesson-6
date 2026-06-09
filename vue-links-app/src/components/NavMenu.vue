<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" class="d-flex justify-center gap-6">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </v-col>
  </v-row>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
