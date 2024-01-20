<template>
  <div class="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<style lang="scss">
  @import "./assets/styles/main.scss";
  .app {
    display: flex;
    width: 100%;
    height: 100%;
  }
</style>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { DefaultLayout } from '@/layouts/index'
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'App',
  components: {
    DefaultLayout
  },
  setup() {
    const route = useRoute();
    const layout = computed(() => route.meta.layout)
    return {
      layout
    }
  },
})
</script>

