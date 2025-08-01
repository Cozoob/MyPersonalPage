<script lang="ts">
import {defineComponent} from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import GenericMainSections from "@/components/GenericMainSections.vue";
import FooterBar from "@/components/FooterBar.vue";

export default defineComponent({
  name: "MainView",

  components: {NavigationBar, GenericMainSections, FooterBar},

  data() {
    return {
      sections: [ // todo use pinia for that?
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
    <GenericMainSections :sections="sections"/>
    <FooterBar/>
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
}
</style>
