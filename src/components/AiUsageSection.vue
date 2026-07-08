<script setup>
defineProps({
  aiUsage: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section id="ai" class="content-section section-shell ai-section">
    <div class="section-heading">
      <p class="eyebrow">AI Workflow</p>
      <h2>AI 工具使用说明</h2>
    </div>

    <ol class="timeline-list">
      <li v-for="(item, index) in aiUsage" :key="item">
        <span>{{ String(index + 1).padStart(2, '0') }}</span>
        <p>{{ item }}</p>
      </li>
    </ol>
  </section>
</template>
