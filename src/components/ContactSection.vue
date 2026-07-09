<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="contact" class="contact-section section-shell">
    <div>
      <p class="eyebrow">Contact</p>
      <h2>期待进一步交流</h2>
      <p>如果你正在查看此网页，可以通过右侧方式了解项目源码和作者GitHub主页。</p>
    </div>

    <div class="contact-actions">
      <a class="button button-primary" href="https://github.com/out11112/personal-site" target="_blank" rel="noreferrer">
        项目仓库
      </a>
      <a class="button button-secondary" :href="profile.github" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </section>
</template>
