<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import AiUsageSection from './components/AiUsageSection.vue'
import ContactSection from './components/ContactSection.vue'
import { aiUsage, profile, projects, skills } from './data/profile'
</script>

<template>
  <SiteHeader />
  <main>
    <HeroSection :profile="profile" />
    <AboutSection :profile="profile" />
    <ProjectsSection :projects="projects" />
    <SkillsSection :skills="skills" />
    <AiUsageSection :ai-usage="aiUsage" />
    <ContactSection :profile="profile" />
  </main>
</template>
