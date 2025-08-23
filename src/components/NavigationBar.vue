<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted } from 'vue'
import type Section from '@/model/section.ts'

const props = defineProps<{
  navItems: Section[]
  activeSectionId: string
}>()

const emit = defineEmits<{
  update: [id: string]
}>()

let observer = null as IntersectionObserver | null

onMounted(() => {
  nextTick(() => {
    setupObserver()
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})

function scrollToSection(id: string): void {
  const el = document.getElementById(id)
  if (el) {
    const yOffset = -100
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

function setupObserver(): void {
  const options: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  }
  observer = new IntersectionObserver(observerCallback, options)
  observeEachSection()
}

function observerCallback(entries: IntersectionObserverEntry[]): void {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id
      emit('update', id)
      window.history.pushState(null, '', '#' + id)
    }
  })
}

function observeEachSection(): void {
  props.navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    if (el) {
      observer!.observe(el)
    }
  })
}
</script>

<template>
  <nav :class="$style.bar">
    <div
      v-for="item in navItems"
      :key="item.id"
      :class="[$style['bar__item'], { [$style['bar__item--active']]: activeSectionId === item.id }]"
      @click.prevent="scrollToSection(item.id)"
    >
      <p>{{ item.label }}</p>
    </div>
  </nav>
</template>

<style module lang="scss">
$color-primary: #ec4186;

.bar {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    max-width: 200px;
    height: 100%;
    font-weight: var(--font-bold);
    font-size: 20px;

    &--active {
      color: white;
      //background-color: $color-primary;
      border-bottom: 2px $color-primary solid;
      margin-bottom: -2px;
    }

    &:hover {
      color: white;
      //background-color: rgba(236, 65, 134, 0.2);
      border-bottom: 2px rgba(236, 65, 134, 0.6) solid;
      margin-bottom: -2px;
      cursor: pointer;
    }
  }
}
</style>
