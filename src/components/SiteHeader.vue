<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import avatarUrl from '../assets/avatar.jpg'

const links = [
  { label: '关于我', href: '#about' },
  { label: '技术能力', href: '#skills' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

const theme = ref('light')
const activeHref = ref('#about')
let ticking = false

const updateActiveSection = () => {
  const distanceToBottom =
    document.documentElement.scrollHeight - window.innerHeight - window.scrollY

  if (distanceToBottom <= 12) {
    activeHref.value = '#contact'
    return
  }

  const marker = window.scrollY + window.innerHeight * 0.42
  let currentHref = links[0].href

  links.forEach((link) => {
    const section = document.querySelector(link.href)

    if (section && section.offsetTop <= marker) {
      currentHref = link.href
    }
  })

  activeHref.value = currentHref
}

const handleScrollSpy = () => {
  if (ticking) {
    return
  }

  ticking = true
  window.requestAnimationFrame(() => {
    updateActiveSection()
    ticking = false
  })
}

const isDark = computed(() => theme.value === 'dark')
const themeLabel = computed(() => (isDark.value ? '切换为亮色模式' : '切换为暗色模式'))

const applyTheme = (nextTheme) => {
  theme.value = nextTheme
  document.documentElement.dataset.theme = nextTheme
  localStorage.setItem('site-theme', nextTheme)
}

const toggleTheme = () => {
  applyTheme(isDark.value ? 'light' : 'dark')
}

onMounted(() => {
  const savedTheme = localStorage.getItem('site-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  applyTheme(savedTheme || (prefersDark ? 'dark' : 'light'))

  window.addEventListener('scroll', handleScrollSpy, { passive: true })
  window.addEventListener('resize', updateActiveSection)
  updateActiveSection()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScrollSpy)
  window.removeEventListener('resize', updateActiveSection)
})
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="返回首页">
      <img class="brand-mark brand-logo" :src="avatarUrl" alt="个人介绍" />
      <span>个人介绍</span>
    </a>

    <div class="header-actions">
      <nav class="nav-links" aria-label="主导航">
        <a
          v-for="link in links"
          :key="link.href"
          :class="{ active: activeHref === link.href }"
          :href="link.href"
          @click="activeHref = link.href"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        class="theme-toggle"
        type="button"
        :aria-label="themeLabel"
        :title="themeLabel"
        @click="toggleTheme"
      >
        <span class="theme-toggle-icon" aria-hidden="true"></span>
        <span>{{ isDark ? '暗色' : '亮色' }}</span>
      </button>
    </div>
  </header>
</template>
