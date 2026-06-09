<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

const isDarkMode = ref(true)

onMounted(() => {
  // Check if there's a saved preference
  const saved = localStorage.getItem('darkMode')
  if (saved !== null) {
    isDarkMode.value = saved === 'true'
  }
  updateDarkMode()
})

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('darkMode', String(isDarkMode.value))
  updateDarkMode()
}

const updateDarkMode = () => {
  if (isDarkMode.value) {
    document.documentElement.classList.remove('light-mode')
  } else {
    document.documentElement.classList.add('light-mode')
  }
}
</script>

<template>
  <div class="app-container">
    <nav class="top-nav">
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/about" class="nav-link">About</RouterLink>
    </nav>
    <button class="theme-toggle" @click="toggleDarkMode" :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
      <span v-if="isDarkMode">☀️</span>
      <span v-else>🌙</span>
    </button>
    <RouterView />
  </div>
</template>

<style scoped>
.app-container {
  position: relative;
}

.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  z-index: 999;
}

.nav-link {
  text-decoration: none;
  color: var(--color-heading);
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 0.25rem;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-heading);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.nav-link.router-link-active {
  color: var(--color-heading);
}

.nav-link.router-link-active::after {
  transform: scaleX(1);
  transform-origin: left;
}

.theme-toggle {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 50%;
  width: 48px;
  height: 48px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
}

.theme-toggle:hover {
  background: var(--color-background-mute);
  border-color: var(--color-border-hover);
}

.theme-toggle:active {
  transform: scale(0.95);
}

@media (max-width: 640px) {
  .top-nav {
    gap: 1.5rem;
    padding: 1rem 1rem;
  }

  .nav-link {
    font-size: 0.95rem;
  }

  .theme-toggle {
    top: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
    font-size: 1.25rem;
  }
}
</style>
