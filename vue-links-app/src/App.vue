<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify'

const theme = useTheme()

const toggleTheme = () => {
  const newTheme = theme.global.name.value === 'dark' ? 'light' : 'dark'
  theme.global.name.value = newTheme
  localStorage.setItem('appTheme', newTheme)
}
</script>

<template>
  <v-app>
    <v-app-bar elevation="1" class="px-4">
      <v-spacer />

      <v-btn
        icon
        @click="toggleTheme"
        :aria-label="theme.global.name.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
      >
        <v-icon>{{ theme.global.name.value === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
