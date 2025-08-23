<script setup lang="ts">
import MainView from './views/MainView.vue'
</script>

<template>
  <div :class="$style.app">
    <div :class="$style['neon-bg']"></div>
    <MainView :class="$style.main" />
  </div>
</template>

<style module lang="scss">
html,
body,
.app {
  margin: 0;
  padding: 0;
  background: #000;
  min-height: 100%;
}

.main {
  position: relative;
  z-index: 1;
  color: white;
}

.neon-bg {
  // todo more chaotic in the future
  position: fixed;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(circle at 0% 20%, rgba(56, 18, 74, 1), transparent 30%),
    radial-gradient(circle at 40% 100%, rgba(238, 84, 74, 0.4), transparent 30%),
    radial-gradient(circle at 70% 0%, rgba(56, 18, 74, 1), transparent 30%),
    radial-gradient(circle at 100% 60%, rgba(238, 84, 74, 0.4), transparent 30%);
  filter: blur(80px);
  animation: move 15s infinite alternate ease-in-out;
}

@keyframes move {
  0% {
    transform: translate(-10%, -10%) scale(1);
  }
  50% {
    transform: translate(10%, 10%) scale(1.2);
  }
  100% {
    transform: translate(-10%, 10%) scale(1);
  }
}
</style>
