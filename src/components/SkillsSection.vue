<script setup>
defineProps({
  skills: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="skills" class="content-section section-shell">
    <div class="section-heading">
      <p class="eyebrow">Abilities</p>
      <h2>技术能力</h2>
    </div>

    <div class="skills-grid">
      <article v-for="skill in skills" :key="skill.name" class="skill-card">
        <div class="skill-card-head">
          <h3>{{ skill.name }}</h3>
          <span>{{ skill.type }}</span>
        </div>
        <div class="skill-meter" aria-hidden="true">
          <span :style="{ width: `${skill.level}%` }"></span>
        </div>
        <p>{{ skill.level }}%</p>
      </article>
    </div>
  </section>
</template>
