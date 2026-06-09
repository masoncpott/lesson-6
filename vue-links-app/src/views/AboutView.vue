<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
</script>

<template>
  <v-main class="d-flex align-center justify-center py-8">
    <v-container maxWidth="480">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="pa-8" elevation="0">
            <!-- Navigation Menu -->
            <NavMenu />

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

