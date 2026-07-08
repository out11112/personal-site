<script setup>
const links = [
  { label: '关于我', href: '#about' },
  { label: '技术栈', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: 'AI 说明', href: '#ai' },
  { label: '联系', href: '#contact' },
]
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="返回首页">
      <span class="brand-mark">P</span>
      <span>Personal Site</span>
    </a>

    <nav class="nav-links" aria-label="主导航">
      <a v-for="link in links" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
