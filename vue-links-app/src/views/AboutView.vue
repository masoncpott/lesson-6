<script setup lang="ts">
</script>

<template>
  <main class="about-container">
    <div class="card">
      <h1 class="title">About</h1>
      
      <div class="bio">
        <p>
          Mason Pott is a Chicago-based fine artist known for his hyperrealistic oil paintings and explorations of florals and color theory. With meticulous attention to detail and a deeply considered multidisciplinary process, he begins each work with a carefully staged photoshoot of a floral arrangement. Pott then translates these vivid bouquets into large-scale paintings on custom-cut aluminum panels, creating works that blur the line between painting and sculptural object. His practice reflects a belief in the interconnectedness of craft, intuition, and design, resulting in moody still lifes that approach the timeless tradition through a distinctly contemporary lens.
        </p>
      </div>

      <div class="credentials">
        <p><strong>Education:</strong> BFA from the University of Illinois at Urbana-Champaign (2015)</p>
      </div>
    </div>
  </main>
</template>

<style scoped>
.about-container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}

.card {
  width: 100%;
  max-width: 480px;
  padding: 2rem 1.5rem;
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

.title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
  color: var(--color-heading);
  letter-spacing: -0.02em;
}

.bio {
  margin-bottom: 2rem;
  line-height: 1.8;
}

.bio p {
  color: var(--color-text);
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
}

.credentials {
  padding-top: 2rem;
  border-top: 1px solid var(--color-border);
}

.credentials p {
  color: var(--color-text);
  margin: 0.5rem 0;
  font-size: 0.95rem;
  opacity: 0.9;
}

.credentials strong {
  color: var(--color-heading);
  font-weight: 600;
}

@media (max-width: 640px) {
  .about-container {
    padding-top: 4rem;
  }

  .card {
    padding: 2rem 1rem;
  }

  .title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .bio p {
    font-size: 0.95rem;
  }

  .credentials p {
    font-size: 0.9rem;
  }
}
</style>
