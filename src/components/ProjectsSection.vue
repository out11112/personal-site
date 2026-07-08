<script setup>
defineProps({
  projects: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="projects" class="content-section section-shell">
    <div class="section-heading">
      <p class="eyebrow">Projects</p>
      <h2>项目经历</h2>
    </div>

    <div class="project-list">
      <article v-for="project in projects" :key="project.title" class="project-card">
        <div class="project-topline">
          <h3>{{ project.title }}</h3>
          <span>{{ project.period }}</span>
        </div>
        <p>{{ project.summary }}</p>

        <div class="tag-row">
          <span v-for="item in project.stack" :key="item">{{ item }}</span>
        </div>

        <ul>
          <li v-for="point in project.points" :key="point">{{ point }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
