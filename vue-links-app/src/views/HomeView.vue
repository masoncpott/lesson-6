<script setup lang="ts">
import { RouterLink } from 'vue-router'
import LinksButton from '@/components/LinksButton.vue'

interface Link {
  label: string
  url: string
  icon: string
}

const links: Link[] = [
  {
    label: 'Portfolio',
    url: 'https://www.masonpott.com',
    icon: 'mdi-briefcase',
  },
  {
    label: 'VSG Contemporary',
    url: 'https://vsgcontemporary.com/artists/45-mason-pott/',
    icon: 'mdi-palette',
  },
  {
    label: 'This is Colossal',
    url: 'https://www.thisiscolossal.com/2025/12/mason-pott-hyperrealistic-floral-paintings/',
    icon: 'mdi-star',
  },
  {
    label: 'Email',
    url: 'mailto:studio@masonpott.com',
    icon: 'mdi-email',
  },
]
</script>

<template>
  <v-main class="d-flex align-center justify-center">
    <v-container maxWidth="480" class="py-8">
      <v-row justify="center">
        <v-col cols="12">
          <v-card class="pa-8" elevation="0">
            <!-- Navigation Menu -->
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="d-flex justify-center gap-6">
                <RouterLink to="/" class="nav-link active">Home</RouterLink>
                <RouterLink to="/about" class="nav-link">About</RouterLink>
              </v-col>
            </v-row>

            <!-- Profile Photo -->
            <v-row justify="center" class="mb-8">
              <v-avatar size="120" color="surface-variant"></v-avatar>
            </v-row>

            <!-- Name and Tagline -->
            <v-row justify="center" class="mb-8">
              <v-col cols="12" class="text-center">
                <h1 class="text-h4 font-weight-bold mb-2">Mason Pott</h1>
                <p class="text-subtitle-1">Artist & Creative</p>
              </v-col>
            </v-row>

            <!-- Links -->
            <v-row justify="center">
              <v-col cols="12">
                <div
                  v-for="(link, index) in links"
                  :key="link.label"
                  :class="{ 'mb-0': index === links.length - 1 }"
                  class="mb-3"
                >
                  <LinksButton
                    :label="link.label"
                    :url="link.url"
                    :icon="link.icon"
                  />
                </div>
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
