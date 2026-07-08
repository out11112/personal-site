<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="about" class="content-section section-shell">
    <div class="section-heading">
      <p class="eyebrow">About</p>
      <h2>关于我</h2>
    </div>

    <div class="about-grid">
      <p class="lead-text">{{ profile.intro }}</p>
      <ul class="highlight-list">
        <li v-for="item in profile.highlights" :key="item.label">
          <strong>{{ item.label }}：</strong>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
