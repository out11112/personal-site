<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import { profile, projects, skills } from './data/profile'

const showBackTop = ref(false)

const updateBackTop = () => {
  showBackTop.value = window.scrollY > 420
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  updateBackTop()
  window.addEventListener('scroll', updateBackTop, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateBackTop)
})
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection :profile="profile" />
    <AboutSection :profile="profile" />
    <SkillsSection :skills="skills" />
    <ProjectsSection :projects="projects" />
    <ContactSection :profile="profile" />
  </main>

  <button
    class="back-top"
    :class="{ visible: showBackTop }"
    type="button"
    aria-label="返回顶部"
    title="返回顶部"
    @click="scrollToTop"
  >
    <span class="back-top-icon" aria-hidden="true"></span>
    <span>顶部</span>
  </button>
</template>
