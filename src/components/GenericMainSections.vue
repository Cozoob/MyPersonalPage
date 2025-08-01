<script lang="ts">
import {defineComponent, type PropType} from 'vue'

import AboutSection from "@/components/AboutSection.vue";

interface Section {
  id: string;
  label: string;
}

export default defineComponent({
  name: "GenericMainSections",

  components: {AboutSection},

  props: {
    sections: {
      type: Array as PropType<Section[]>,
      required: true,
      default: () => []
    }
  }
})
</script>

<template>
  <div class="container">
    <section
      v-for="section in sections"
      :key="section.id"
      class="container__section"
    >
      <template v-if="section.id == 'about'">
        <AboutSection/>
      </template>
      <template v-else-if="section.id == 'experience'">
        <h2>experience - GENERIC</h2>
        <p>Content TODO for experience</p>
      </template>
      <template v-else-if="section.id == 'skills'">
        <h2>skills - GENERIC</h2>
        <p>Content TODO for skills</p>
      </template>
      <template v-else-if="section.id == 'projects'">
        <h2>projects - GENERIC</h2>
        <p>Content TODO for projects</p>
      </template>
      <template v-else>
        <h2>ERROR</h2>
        <p>NO SUCH SECTION...</p>
      </template>
    </section>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  width: 100%;

  &__section {
    height: 100%;
    max-width: 1200px;
    width: 100%;
    border: 1px pink solid;
  }
}

</style>
