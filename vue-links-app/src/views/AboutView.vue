<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <v-main class="d-flex align-center justify-center py-8">
    <v-container maxWidth="480">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="pa-8" elevation="0">
            <!-- Navigation Menu -->
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="d-flex justify-center gap-6">
                <RouterLink to="/" class="nav-link">Home</RouterLink>
                <RouterLink to="/about" class="nav-link active">About</RouterLink>
              </v-col>
            </v-row>

            <!-- Title -->
            <v-row justify="center" class="mb-6">
              <v-col cols="12" class="text-center">
                <h1 class="text-h4 font-weight-bold">About</h1>
              </v-col>
            </v-row>

            <!-- Bio -->
            <v-row class="mb-6">
              <v-col cols="12">
                <p class="text-body-1 text-justify">
                  Mason Pott is a Chicago-based fine artist known for his hyperrealistic oil paintings and explorations of florals and color theory. With meticulous attention to detail and a deeply considered multidisciplinary process, he begins each work with a carefully staged photoshoot of a floral arrangement. Pott then translates these vivid bouquets into large-scale paintings on custom-cut aluminum panels, creating works that blur the line between painting and sculptural object. His practice reflects a belief in the interconnectedness of craft, intuition, and design, resulting in moody still lifes that approach the timeless tradition through a distinctly contemporary lens.
                </p>
              </v-col>
            </v-row>

            <!-- Credentials -->
            <v-row class="pt-6" style="border-top: 1px solid rgba(255, 255, 255, 0.12)">
              <v-col cols="12">
                <p class="text-body-2 mb-2">
                  <strong>Education:</strong> BFA from the University of Illinois at Urbana-Champaign (2015)
                </p>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<style scoped>
:deep(.v-card) {
  animation: fadeIn 0.6s ease-in;
}

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

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link.active::after {
  transform: scaleX(1);
  transform-origin: left;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
