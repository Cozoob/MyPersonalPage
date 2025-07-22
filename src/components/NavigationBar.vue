<script lang="ts">
import {defineComponent, nextTick, type PropType} from 'vue'

interface NavItem {
  id: string;
  label: string;
}

export default defineComponent({
    name: "NavigationBar",

    props: {
      navItems: {
        type: Array as PropType<NavItem[]>,
        required: true
      },
      activeSectionId: {
        type: String,
        required: true
      }
    },

    emits: ['update:activeSectionId'],

    data() {
      return {
        observer: null as IntersectionObserver | null,
      };
    },

    mounted() {
      nextTick(() => {
        this.setupObserver();
      });
    },

    beforeUnmount() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },

    methods: {
      scrollToSection(id: string): void {
        const el = document.getElementById(id);
        if (el) {
          const yOffset = -100;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      },

      setupObserver() {
        this.observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const id = entry.target.id;
                this.$emit('update:activeSectionId', id);
                window.history.pushState(null, '', '#' + id);
              }
            });
          },
          {
            root: null,
            rootMargin: '0px',
            threshold: 0.50,
          }
        );

        this.navItems.forEach((item) => {
          const el = document.getElementById(item.id);
          if (el) {
            this.observer!.observe(el);
          }
        });
      },
    }
  },
)
</script>

<template>
  <nav class="bar">
    <div
      v-for="item in navItems"
      :class="['bar__item', {'bar__item--active': activeSectionId === item.id}]"
      :key="item.id"
      @click.prevent="scrollToSection(item.id)"
    >
      <p>{{ item.label }}</p>
    </div>
  </nav>
</template>

<style scoped lang="scss">
$color-primary: #6C63FF;

.bar {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px #E0E0E0 solid;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    height: 100%;
    font-size: 20px;
    border-radius: 20px;

    &:hover, &:active, &--active {
      color: white;
      background-color: $color-primary;
      cursor: pointer;
    }
  }
}
</style>
