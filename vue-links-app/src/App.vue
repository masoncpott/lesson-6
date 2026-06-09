<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

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

.theme-toggle {
  position: fixed;
  top: 2rem;
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
  .theme-toggle {
    top: 1rem;
    right: 1rem;
    width: 44px;
    height: 44px;
    font-size: 1.25rem;
  }
}
</style>
