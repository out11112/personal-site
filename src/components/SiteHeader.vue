<script setup>
import avatarUrl from '../assets/avatar.jpg'

const links = [
  { label: '关于我', href: '#about' },
  { label: '项目', href: '#projects' },
  { label: '技术栈', href: '#skills' },
  { label: 'AI说明', href: '#ai' },
  { label: '联系', href: '#contact' },
]
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="返回首页">
      <img class="brand-mark brand-logo" :src="avatarUrl" alt="个人介绍" />
      <span>个人介绍</span>
    </a>

    <nav class="nav-links" aria-label="主导航">
      <a v-for="link in links" :key="link.href" :href="link.href">
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
