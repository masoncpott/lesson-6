<script setup lang="ts">
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
            <!-- Profile Photo -->
            <v-row justify="center" class="mb-6">
              <v-avatar size="120" color="surface-variant"></v-avatar>
            </v-row>

            <!-- Name and Tagline -->
            <v-row justify="center" class="mb-6">
              <v-col cols="12" class="text-center">
                <h1 class="text-h4 font-weight-bold mb-2">Mason Pott</h1>
                <p class="text-subtitle-1">Artist & Creative</p>
              </v-col>
            </v-row>

            <!-- Links -->
            <v-row justify="center">
              <v-col cols="12">
                <v-btn
                  v-for="(link, index) in links"
                  :key="link.label"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outlined"
                  size="lg"
                  block
                  class="mb-3 text-none"
                  :class="{ 'mb-0': index === links.length - 1 }"
                >
                  <v-icon start :icon="link.icon"></v-icon>
                  {{ link.label }}
                </v-btn>
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

:deep(.v-btn) {
  transition: all 0.3s ease;
}

:deep(.v-btn:hover) {
  transform: translateY(-2px);
}
</style>
