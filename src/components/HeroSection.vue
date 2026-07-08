<script setup>
defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <section id="top" class="hero-section section-shell">
    <div class="hero-copy">
      <p class="eyebrow">Vue 3 + Vite Personal Website</p>
      <h1>{{ profile.name }}</h1>
      <p class="hero-role">{{ profile.role }}</p>
      <p class="hero-intro">{{ profile.intro }}</p>

      <div class="hero-actions">
        <a class="button button-primary" href="#projects">查看项目</a>
        <a class="button button-secondary" href="#contact">联系我</a>
      </div>
    </div>

    <aside class="profile-panel" aria-label="个人摘要">
      <div>
        <span class="panel-label">当前方向</span>
        <strong>{{ profile.role }}</strong>
      </div>
      <div>
        <span class="panel-label">所在地区</span>
        <strong>{{ profile.location }}</strong>
      </div>
      <div>
        <span class="panel-label">交付能力</span>
        <strong>开发 / 构建 / 部署</strong>
      </div>
    </aside>
  </section>
</template>
