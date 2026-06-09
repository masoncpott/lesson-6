<script setup lang="ts">
import LinksButton from '@/components/LinksButton.vue'
import NavMenu from '@/components/NavMenu.vue'

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
            <NavMenu />

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
