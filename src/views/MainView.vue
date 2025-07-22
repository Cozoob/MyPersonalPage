<script lang="ts">
import {defineComponent} from 'vue'
import NavigationBar from '../components/NavigationBar.vue'

export default defineComponent({
  name: "MainView",

  components: {NavigationBar: NavigationBar},

  data() {
    return {
      sections: [
        {id: 'about', label: 'About'},
        {id: 'experience', label: 'Experience'},
        {id: 'skills', label: 'Skills'},
        {id: 'projects', label: 'Projects'}
      ],
      activeSectionId: 'about'
    };
  },
})
</script>

<template>
  <div class="page">
    <NavigationBar
      class="page__navigation-bar"
      :navItems="sections"
      :activeSectionId="activeSectionId"
      @update:activeSectionId="activeSectionId = $event"/>
    <section
      v-for="section in sections"
      :id="section.id"
      class="page__section"
    >
      <h2>{{ section.label }}</h2>
      <p>Content TODO for {{ section.label }}</p>
    </section>
  </div>

</template>

<style scoped lang="scss">

.page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__navigation-bar {
    position: sticky;
    top: 20px;
    margin: 20px 0;
  }

  &__section {
    height: 100vh;
    border: 1px pink solid;
  }
}
</style>
