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
      <p>如果你正在查看这份笔试作品，可以通过以下方式了解源码和线上效果。</p>
    </div>

    <div class="contact-actions">
      <a class="button button-primary" :href="`mailto:${profile.email}`">发送邮件</a>
      <a class="button button-secondary" :href="profile.github" target="_blank" rel="noreferrer">
        GitHub
      </a>
    </div>
  </section>
</template>
