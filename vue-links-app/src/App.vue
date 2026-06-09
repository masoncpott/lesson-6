<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
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
      <template v-slot:prepend>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
      </template>

      <v-spacer />

      <RouterLink to="/about" class="nav-link">About</RouterLink>

      <template v-slot:append>
        <v-btn
          icon
          @click="toggleTheme"
          :aria-label="theme.global.name.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <v-icon>{{ theme.global.name.value === 'dark' ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped>
.nav-link {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
  padding: 0.5rem 0;
  margin: 0 1rem;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
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

.nav-link.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
