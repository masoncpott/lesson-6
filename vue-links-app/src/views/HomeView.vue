<script setup lang="ts">
interface Link {
  label: string
  url: string
}

const links: Link[] = [
  {
    label: 'Portfolio',
    url: 'https://www.masonpott.com',
  },
  {
    label: 'VSG Contemporary',
    url: 'https://vsgcontemporary.com/artists/45-mason-pott/',
  },
  {
    label: 'This is Colossal',
    url: 'https://www.thisiscolossal.com/2025/12/mason-pott-hyperrealistic-floral-paintings/',
  },
  {
    label: 'Email',
    url: 'mailto:studio@masonpott.com',
  },
]
</script>

<template>
  <main class="links-container">
    <div class="card">
      <!-- Profile Photo Placeholder -->
      <div class="profile-photo"></div>

      <!-- Name and Tagline -->
      <h1 class="name">Mason Pott</h1>
      <p class="tagline">Artist & Creative</p>

      <!-- Links -->
      <nav class="links-list">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.url"
          class="link-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ link.label }}
        </a>
      </nav>
    </div>
  </main>
</template>

<style scoped>
.links-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  max-width: 480px;
  padding: 2rem 1.5rem;
  text-align: center;
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

.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-background-soft) 0%, var(--color-background-mute) 100%);
  margin: 0 auto 2rem;
  flex-shrink: 0;
  border: 2px solid var(--color-border);
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.tagline {
  font-size: 1.125rem;
  color: var(--color-text);
  margin: 0 0 2rem 0;
  font-weight: 500;
  opacity: 0.8;
}

.links-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.link-button {
  display: block;
  padding: 1rem;
  background: var(--color-background-soft);
  color: var(--color-heading);
  text-decoration: none;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
}

.link-button:hover {
  background: var(--color-background-mute);
  border-color: var(--color-border-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.link-button:active {
  transform: translateY(0);
}

@media (max-width: 640px) {
  .card {
    padding: 2rem 1rem;
  }

  .name {
    font-size: 2rem;
  }

  .tagline {
    font-size: 1rem;
  }

  .link-button {
    padding: 0.875rem;
    font-size: 0.95rem;
  }

  .profile-photo {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;
  }
}
</style>
