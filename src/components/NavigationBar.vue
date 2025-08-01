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

function setupObserver() {
  console.error('setupObserver1')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.error('setupObserver2')
        if (entry.isIntersecting) {
          const id = entry.target.id
          emit('update', id)
          window.history.pushState(null, '', '#' + id)
        }
      })
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    },
  )

  console.error('setupObserver3', observer)

  props.navItems.forEach((item) => {
    const el = document.getElementById(item.id)
    console.log('el', el)
    if (el) {
      observer!.observe(el)
    }
  })
}
</script>

<template>
  <nav class="bar">
    <div
      v-for="item in navItems"
      :key="item.id"
      :class="['bar__item', { 'bar__item--active': activeSectionId === item.id }]"
      @click.prevent="scrollToSection(item.id)"
    >
      <p>{{ item.label }}</p>
    </div>
  </nav>
</template>

<style scoped lang="scss">
$color-primary: #6c63ff;
$color-secondary: #3f3d56;

.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 2px #e0e0e0 solid;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
    font-weight: var(--font-bold);
    font-size: 20px;
    border-radius: 20px;

    &:active,
    &--active {
      color: white;
      background-color: $color-primary;
    }

    &:hover {
      color: white;
      background-color: $color-secondary;
      cursor: pointer;
    }
  }
}
</style>
